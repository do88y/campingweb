$(function () {
    // 네비게이션 메뉴 호버했을 때 애니메이션
    $('.dropdown_box').hide();
    $('.mainMenu > li').hover(function () {
        $(this).find('.dropdown_box').stop(true,true).slideDown(300);
    }, function () {
        $(this).find('.dropdown_box').slideUp(300);
    });

    // 공지사항 띄우기
    setTimeout(function () {
        $('#popup').show();  // 팝업오픈
        $('body').append('<div class="backon"></div>');  // 뒷배경 생성
    },2000);
    // 공지사항 닫기(close 누르거나 배경 누르면)
    $('body').on('click', function (event) {
        if(event.target.className == 'close' || event.target.className == 'backon') {
            $('#popup').hide();
            $('.backon').hide();
        }
    });

    $('.contents_inner').hover(function () {
        $(this).css('opacity',0.3);
    }, function () {
        $(this).css('opacity',0.65);
    });
});