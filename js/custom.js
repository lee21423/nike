$(function () {

    $('.dung').fullpage({
        anchors: ['01', '02'],
        afterLoad: function (a, idx) {
            $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on')
        },
    });


    $('.dots button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);

        $('.main_content .list').animate({ top: -500 * idx }, 800, 'easeOutBounce')
    });


    // let idx = 0;

    // setInterval(function () {
    //     console.log(idx);
    //     idx = idx + 1;
    //     if (idx == 3) {
    //         idx = 0;
    //     }
    //     $('.inner').animate({ left: -1200 * idx }, 1000)
    // }, 3000);



});


