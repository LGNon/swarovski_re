$(function() {
    /* ==================================================
       1. 초기 설정 및 스크롤바 숨김
       ================================================== */
    $('html, body').css({
        '-ms-overflow-style': 'none', 
        'scrollbar-width': 'none'
    });
    $('<style>')
        .prop('type', 'text/css')
        .html('body::-webkit-scrollbar { display: none; }')
        .appendTo('head');

    // BEST 섹션 초기 컨텐츠 설정 (selected 클래스 유지)
    const initTarget = $('.filter_btn.selected a').attr('href');
    $('.best_inner > .item_sec').hide();
    $(initTarget).show();

    /* ==================================================
       2. BANNER SECTION (자동 슬라이드 + 드래그 + 도트)
       ================================================== */
    let dotIdx = 0;
    const $bannerSlider = $('.banner_slider');
    const $bannerWrap = $('#banner_wrap');
    const bannerCount = $('.banner_slide').length;

    // 공통 배너 이동 함수
    function show_banner() {
        $bannerSlider.stop().animate({ 
            marginLeft: '-100%' 
        }, 1000, function() {
            $(this).append($('.banner_slide').first());
            $(this).css('margin-left', 0);
            
            dotIdx++;
            if (dotIdx >= bannerCount) { dotIdx = 0; }
            
            const $bannerDots = $('#banner_wrap .page_pointer img');
            $bannerDots.attr('src', 'images/dot_w.png').removeClass('ban_selected');
            $bannerDots.eq(dotIdx).attr('src', 'images/dot_b.png').addClass('ban_selected');
        });
    }

    // 자동 슬라이드 타이머
    let bannerTimer = setInterval(show_banner, 5000);

    // --- 드래그 이벤트 추가 ---
    let bIsDrag = false;
    let bStartX = 0;
    let bCurrentX = 0;

    $bannerSlider.on('mousedown touchstart', function(e) {
        clearInterval(bannerTimer); // 드래그 시작 시 자동 재생 일시정지
        bIsDrag = true;
        bStartX = (e.type === 'touchstart') ? e.originalEvent.touches[0].pageX : e.pageX;
        $(this).css('transition', 'none');
    });

    $(window).on('mousemove touchmove', function(e) {
        if (!bIsDrag) return;
        bCurrentX = (e.type === 'touchmove') ? e.originalEvent.touches[0].pageX : e.pageX;
        const diff = bCurrentX - bStartX;
        $bannerSlider.css('margin-left', diff + 'px');
    });

    $(window).on('mouseup touchend', function() {
        if (!bIsDrag) return;
        bIsDrag = false;

        const diff = bCurrentX - bStartX;
        const threshold = 100; // 100px 이상 드래그 시 이동

        if (diff < -threshold) {
            // 왼쪽으로 밀었을 때 (다음 슬라이드)
            show_banner();
        } else if (diff > threshold) {
            // 오른쪽으로 밀었을 때 (이전 슬라이드 - 무한루프 역방향 처리)
            $bannerSlider.stop().animate({ marginLeft: '0' }, 300, function() {
                // 맨 뒤의 슬라이드를 앞으로 가져옴
                $('.banner_slide').last().prependTo($bannerSlider);
                // 가져온 만큼 마진을 -100%로 밀어두고 다시 0으로 애니메이션
                $bannerSlider.css('margin-left', '-100%').animate({ marginLeft: '0' }, 300);
                
                // 도트 인덱스 감소
                dotIdx--;
                if (dotIdx < 0) { dotIdx = bannerCount - 1; }
                const $bannerDots = $('#banner_wrap .page_pointer img');
                $bannerDots.attr('src', 'images/dot_w.png').removeClass('ban_selected');
                $bannerDots.eq(dotIdx).attr('src', 'images/dot_b.png').addClass('ban_selected');
            });
        } else {
            // 임계값 미달 시 제자리로
            $bannerSlider.stop().animate({ marginLeft: '0' }, 300);
        }

        // 드래그 종료 후 자동 재생 재시작
        bannerTimer = setInterval(show_banner, 5000);
    });

    /* ==================================================
       3. BEST SECTION (기존 selected 클래스 유지)
       ================================================== */
    $('.filter_btn a').click(function(e) {
        e.preventDefault();
        $('.filter_btn').removeClass('selected');
        $(this).parent().addClass('selected');

        const target = $(this).attr('href');
        $('.best_inner > .item_sec').hide();
        $(target).fadeIn(400);
    });

    /* ==================================================
       4. CATEGORY SECTION (드래그 + 버튼 연동)
       ================================================== */
    (function() {
        const $wrapper = $('.category_wrapper');
        const $inner = $('.categories_inner');
        const $cards = $('.categories_card');
        const $prevBtn = $('.prev_btn');
        const $nextBtn = $('.next_btn');
        
        let isDrag = false;
        let startX = 0;
        let currentX = 0;
        let pageIdx = 0;
        const pageCount = $cards.length;

        // 1. 위치 업데이트 및 버튼 제어 함수
        function updatePos(ani = true) {
            const moveX = -(pageIdx * 100);
            $inner.css({ 
                'transition': ani ? 'margin-left 0.4s ease' : 'none', 
                'margin-left': moveX + '%' 
            });

            // 버튼 숨김/보임 처리
            if (pageIdx === 0) $prevBtn.stop().fadeOut(200);
            else $prevBtn.stop().fadeIn(200);

            if (pageIdx === pageCount - 1) $nextBtn.stop().fadeOut(200);
            else $nextBtn.stop().fadeIn(200);
        }

        // 2. 마우스/터치 시작
        $inner.on('mousedown touchstart', function(e) {
            isDrag = true;
            startX = (e.type === 'touchstart') ? e.touches[0].pageX : e.pageX;
            $inner.css('transition', 'none'); 
        });

        // 3. 드래그 중
        $(window).on('mousemove touchmove', function(e) {
            if (!isDrag) return;
            
            currentX = (e.type === 'touchmove') ? e.touches[0].pageX : e.pageX;
            const diff = currentX - startX;
            const containerWidth = $wrapper.width();
            
            // 실시간 위치 반영 (px 계산)
            const movePx = -(pageIdx * containerWidth) + diff;
            $inner.css('margin-left', movePx + 'px');
        });

        // 4. 드래그 종료
        $(window).on('mouseup touchend', function() {
            if (!isDrag) return;
            isDrag = false;

            const diff = currentX - startX;
            const threshold = 50; // 50px 이상 밀어야 페이지 전환

            if (diff < -threshold && pageIdx < pageCount - 1) {
                pageIdx++; // 왼쪽으로 밀기 (다음)
            } else if (diff > threshold && pageIdx > 0) {
                pageIdx--; // 오른쪽으로 밀기 (이전)
            }

            updatePos(); 
        });

        // 5. 버튼 클릭 이벤트 연동
        $nextBtn.on('click', function() {
            if (pageIdx < pageCount - 1) {
                pageIdx++;
                updatePos();
            }
        });

        $prevBtn.on('click', function() {
            if (pageIdx > 0) {
                pageIdx--;
                updatePos();
            }
        });

        // 초기 상태 실행
        updatePos();
    })();
});