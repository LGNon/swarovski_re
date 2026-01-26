$(function() {
    // 1. '모두 동의합니다' 체크박스를 클릭했을 때
    $('#all_check').click(function() {
        // 현재 '모두 동의합니다'의 체크 상태를 변수에 저장 (true 또는 false)
        const isChecked = $(this).prop('checked');
        
        // 하위 리스트에 있는 모든 체크박스의 상태를 동일하게 변경
        $('.list_inner .checkbox').prop('checked', isChecked);
    });

    // 2. 개별 체크박스를 클릭해서 하나라도 해제되면 '전체 선택'도 해제되게 만들기 (역동작)
    $('.list_inner .checkbox').click(function() {
        // 하위 체크박스의 전체 개수
        const total = $('.list_inner .checkbox').length;
        // 현재 체크된 체크박스의 개수
        const checked = $('.list_inner .checkbox:checked').length;

        // 개수가 같으면 전체 선택 체크, 다르면 해제
        if (total === checked) {
            $('#all_check').prop('checked', true);
        } else {
            $('#all_check').prop('checked', false);
        }
    });
});