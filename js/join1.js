$(function () {
    // 네비게이션 메뉴 호버했을 때 애니메이션
    $('.dropdown_box').hide();
    $('.mainMenu > li').hover(function () {
        $(this).find('.dropdown_box').stop(true,true).slideDown(300);
    }, function () {
        $(this).find('.dropdown_box').slideUp(300);
    });

    // 전체동의 누르면 체크박스 전체선택/해제
    $('#allAgree').click(function () {
        var allChecked=$(this).is(':checked');
        if(allChecked) {
            $('.require').prop('checked',true);
        }else {
            $('.require').prop('checked',false);
        }
    });
    
    // 체크박스 하나 해제하면 전체 체크박스 해제
    $('.require').click(function () {
        var total=$('.require').length;
        var checked=$('.require:checked').length;
        if(total != checked) {
            $('#allAgree').prop('checked',false);
        }else {
            $('#allAgree').prop('checked',true);
        }
    });

    // 다음단계 버튼 클릭 시 페이지 이동
    $('#btn_next').click(function () {
        var bool=$('#allAgree').is(':checked');
        if(bool) {
            location.href='join2.html';
        }else {
            alert('필수 이용약관에 동의하셔야 회원가입이 가능해요😥')
        } 
    });

});