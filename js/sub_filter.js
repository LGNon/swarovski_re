$(function() {
    // 1. 초기 상태 설정: 모든 탭메뉴를 숨기고 시작합니다.
    // (CSS에서 display: none;을 미리 해두는 것이 더 좋지만, JS에서도 한 번 더 잡아줍니다.)
    $('.tab_menu').hide();

    // 2. 메인 버튼(li) 클릭 이벤트
    $('.filter_wrapper > ul > li').on('click', function(e) {
        // 드롭다운 내부의 li나 이미지를 클릭했을 때 이벤트가 겹치는(버블링) 것을 방지
        if ($(e.target).closest('.tab_menu').length) return;

        const $this = $(this);
        const $subMenu = $this.find('.tab_menu');
        const $arrowImg = $this.find('.arrow_btn');

        // [옵션] 다른 열려있는 탭메뉴가 있다면 닫기
        $('.tab_menu').not($subMenu).slideUp(300);
        $('.arrow_btn').not($arrowImg).attr('src', 'images/ep_arrow-down.png');

        // 현재 메뉴 토글 (열기/닫기)
        $subMenu.stop().slideToggle(300, function() {
            // 애니메이션이 끝난 후, 화살표 상태를 체크하여 이미지 변경
            if ($subMenu.is(':visible')) {
                $arrowImg.attr('src', 'images/ep_arrow-up.png');
            } else {
                $arrowImg.attr('src', 'images/ep_arrow-down.png');
            }
        });
    });

    // 3. 드롭다운(tab_menu) 내부 항목 클릭 시
    $('.tab_menu li').on('click', function(e) {
        e.stopPropagation(); // 부모 li의 클릭 이벤트가 실행되지 않도록 차단

        const $this = $(this);
        const selectedText = $this.contents().get(0).nodeValue.trim(); // 텍스트만 추출
        const $parentWrapper = $this.closest('.filter_wrapper > ul > li');

        // 체크 표시(active 클래스) 이동
        $this.siblings().removeClass('active');
        $this.addClass('active');

        // 첫 번째 li(정렬 메뉴)인 경우 상단 텍스트(최신순 등) 변경
        if ($parentWrapper.find('.sort_text').length > 0) {
            $parentWrapper.find('.sort_text').text(selectedText);
        }

        // 선택 완료 후 메뉴를 닫고 화살표를 아래로 변경
        $this.parent().slideUp(300);
        $parentWrapper.find('.arrow_btn').attr('src', 'images/ep_arrow-down.png');
    });

    // 4. 외부 영역 클릭 시 메뉴 닫기 (사용자 편의성)
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.filter_wrapper > ul > li').length) {
            $('.tab_menu').slideUp(300);
            $('.arrow_btn').attr('src', 'images/ep_arrow-down.png');
        }
    });
});