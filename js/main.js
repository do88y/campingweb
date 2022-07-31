$(function () {
    // 네비게이션 메뉴 호버했을 때 애니메이션
    $('.dropdown_box').hide();
    $('.mainMenu > li').hover(function () {
        $(this).find('.dropdown_box').stop(true,true).slideDown(300);
    }, function () {
        $(this).find('.dropdown_box').slideUp(300);
    });

    // 이미지 영역 이미지 슬라이드
    $('.slider_panel').append($('.slider_image').first().clone());  // 첫번째 이미지 복제해서 맨 뒤에 붙이기
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());  // 마지막 이미지를 복제해서 맨 앞에 붙이기
    var index=1;
    var auto;
    moveSlider(index);
    autoSlider();
    // 컨트롤 버튼 클릭
    $('.control_button').click(function () {
        index=$(this).index();
        moveSlider(index+1);
    });
    // 애니메이션 캔버스 클릭 이벤트
    $('.animation_canvas').click(function () {
        if(index < 7) {
            index++;
            moveSlider(index);
        }else {
            $('.slider_panel').css('left',0);
            index=1;
            moveSlider(index);
        }

    });
    // 이미지 슬라이드 구현 함수
    function moveSlider(index) {
        $('.slider_panel').animate({
            left:-(index*900)
        },'slow');
        $('.control_button').removeClass('active');
        $('.control_button').eq(index-1).addClass('active');
        $('.slider_text').hide();
        $('.slider_text').eq(index-1).fadeIn('slow');
    }
    // 애니메이션 캔버스 영역에 이벤트
    $('.animation_canvas').hover(function () {
        clearInterval(auto);
    }, function () {
        autoSlider();
    });
    // 자동 이미지 슬라이드 구현 함수
    function autoSlider () {
        auto=setInterval(function () {
            $('.animation_canvas').trigger('click');
        },3000);
    }

    // 콘텐츠 영역 호버 할 때 애니메이션 
    $('.con_food').hover(function () {
        $(this).children('h2').stop(true,true).animate({
            left:320,
            zIndex:20
        });
        $(this).children('div').stop(true,true).animate({
            left:180,
            opacity:0.3,
            zIndex:10
        },'fast');
    }, function () {
        $(this).children('h2').animate({
            left:20
        });
        $(this).children('div').animate({
            left:345,
            opacity:1
        },'fast');
    });
    $('.con_solo').hover(function () {
        $(this).children('h2').stop(true,true).animate({
            left:330,
            zIndex:20
        },'fast');
        $(this).children('div').stop(true,true).animate({
            left:170,
            opacity:0.3,
            zIndex:10
        },'fast');
    }, function () {
        $(this).children('h2').animate({
            left:660
        },'fast');
        $(this).children('div').animate({
            left:10,
            opacity:1
        },'fast');
    });
    $('.con_sleep').hover(function () {
        $(this).children('h2').stop(true,true).animate({
            top:130,
            zIndex:20
        },'fast');
        $(this).children('div').stop(true,true).animate({
            top:80,
            opacity:0.3,
            zIndex:10
        },'fast');
    }, function () {
        $(this).children('h2').animate({
            top:15
        },'fast');
        $(this).children('div').animate({
            top:160,
            opacity:1
        },'fast');
    });
    $('.con_dog').hover(function () {
        $(this).children('#title_dog').stop(true,true).animate({
            left:230,
            zIndex:20
        },'fast');
        $(this).children('#title_dog2').stop(true,true).animate({
            left:520,
            zIndex:20
        },'fast');
        $(this).children('div').stop(true,true).animate({
            left:230,
            opacity:0.3,
            zIndex:10
        },'fast');
    }, function () {
        $(this).children('#title_dog').animate({
            left:0
        },'fast');
        $(this).children('#title_dog2').animate({
            left:765
        },'fast');
        $(this).children('div').animate({
            left:275,
            opacity:1
        },'fast');
    });
});