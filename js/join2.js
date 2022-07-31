$(function () {
    // 네비게이션 메뉴 호버했을 때 애니메이션
    $('.dropdown_box').hide();
    $('.mainMenu > li').hover(function () {
        $(this).find('.dropdown_box').stop(true,true).slideDown(300);
    }, function () {
        $(this).find('.dropdown_box').slideUp(300);
    });

    // 선택한 이메일 호스트 인풋박스에 넣기
    $('#emailDomain').change(function () {
        var emailDomain=$(this).val();
        if(emailDomain == 1) {  // 직접입력일때
            $('#email').val('');
        }else {
            $('#email').val(emailDomain);  // 이메일 인풋박스에 선택된 호스트 등록
        }
    });

    // 휴대전화번호 칸에 숫자 제외 문자 입력시 ""로 대체
    $('input[numberOnly]').on('keyup', function () {
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    });
});