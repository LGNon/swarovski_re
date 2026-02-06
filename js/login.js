$(function() {
  // 1. 세션 정보 가져오기
  const savedID = sessionStorage.getItem("id");
  const savedPwd = sessionStorage.getItem("pwd");
  const path = window.location.pathname;

  // 2. 로그인 상태에 따른 리다이렉트 처리
  if (savedID) {
    // 로그인 된 상태인데 login 이나 signup 페이지에 있다면
    if (path.includes("login.html") || path.includes("signup.html")) {
      window.location.href = "mypage.html";
    }
  } else {
    // 로그아웃 상태인데 mypage 에 접근했다면
    if (path.includes("mypage.html")) {
      alert("로그인이 필요합니다.");
      window.location.href = "login.html";
      return; // 이후 코드 실행 방지
    }
  }

  // --- 이벤트 등록 ---

  // 회원가입 폼 제출
  $('#singupForm').on('submit', function(event) {
    event.preventDefault();
    const id = $('#u_id').val().trim();
    const pwd = $('#u_pwd').val().trim();

    if (id === "" || pwd === "") {
      alert("아이디와 비밀번호를 모두 입력해 주세요.");
      return;
    }

    localStorage.setItem("id", id);
    localStorage.setItem("pwd", pwd);
    alert("회원가입이 완료되었습니다.");
    window.location.href = "login.html";
  });

  // 로그인 버튼 클릭
  $('#loginBtn').on('click', function(e) {
    e.preventDefault();
    const id = $('#u_id').val().trim();
    const pwd = $('#u_pwd').val().trim();
    const savedID = localStorage.getItem('id');
    const savedPwd = localStorage.getItem('pwd');

    if (savedID === id && savedPwd === pwd) {
      sessionStorage.setItem('id', id);
      sessionStorage.setItem('pwd', pwd);
      alert('로그인 성공!');
      window.location.href = "index.html";
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  });

  // 로그아웃 버튼 클릭 (가장 중요!)
  $('#logoutButton').on('click', function(e) {
    e.preventDefault();
    console.log("로그아웃 버튼 클릭됨"); // 작동 확인용
    sessionStorage.clear();
    alert('로그아웃 되었습니다.');
    window.location.href = "index.html";
  });

  // 회원탈퇴 버튼 클릭
  $('#singOut').on('click', function(e) {
    e.preventDefault();
    if (confirm("정말로 탈퇴하시겠습니까? 저장된 정보가 모두 삭제됩니다.")) {
      localStorage.removeItem("id");
      localStorage.removeItem("pwd");
      sessionStorage.clear();
      alert("회원탈퇴가 완료되었습니다.");
      window.location.href = "index.html";
    }
  });
});