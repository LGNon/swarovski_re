$(function(){
  // menu_wrapper
    // 섹션 전환 설정 (기존 코드 유지)
    $('#container section:not(' + $('.submenu li a.connect.selected').attr('href') + ')').hide();
    
    $('.submenu li a.connect').click(function() {
        $('.submenu li a.connect').removeClass('selected');
        $(this).addClass('selected');
        $('#menu_wrap').css({ right: '-60%' });
        $('#container section').hide();
        $($(this).attr('href')).show();
    });

    // 메뉴 아이콘 클릭 시 메뉴 표시
    $('.menu_icn').click(function() {
        $('#menu_wrap').animate({ right: 0 }, 400);
    });

    // 메뉴 숨김 (마우스 이탈 및 닫기 버튼)
    $('#menu_wrap').mouseleave(function() {
        $(this).animate({ right: '-70%' }, 400);
    });
    $('.menu_close').click(function() {
        $('#menu_wrap').animate({ right: '-70%' }, 400);
    });

    // 아코디언 GNB 메뉴
    $('#gnb > ul > li').click(function() {
        const $subMenu = $(this).children('ul');
        const $arrowImg = $(this).find('img');
        const $anchor = $(this).children('a');

        // 다른 메뉴 닫기
        $('#gnb > ul > li').not(this).children('ul').slideUp();
        $('#gnb > ul > li').not(this).find('img').attr('src', 'images/ep_arrow-right.png');
        $('#gnb > ul > li').not(this).children('a').removeClass('on');

        // 현재 클릭한 메뉴 토글
        if ($subMenu.is(':visible')) {
            $subMenu.slideUp();
            $arrowImg.attr('src', 'images/ep_arrow-right.png');
            $anchor.removeClass('on');
        } else {
            $subMenu.slideDown();
            $arrowImg.attr('src', 'images/ep_arrow-down.png');
            $anchor.addClass('on');
        }
    });
});