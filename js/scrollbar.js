$(function(){
  /* ==================================================
     1. 초기 설정 및 스크롤바 숨김
     ================================================== */
  // 브라우저 전체 스크롤바 숨김 (스크롤 기능은 유지)
  $('html, body').css({
      '-ms-overflow-style': 'none', 
      'scrollbar-width': 'none'
  });
  $('<style>')
      .prop('type', 'text/css')
      .html('body::-webkit-scrollbar { display: none; }')
      .appendTo('head');
});