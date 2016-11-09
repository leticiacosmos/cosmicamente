$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if(scrollTop > 100)
        $('.navbar').addClass('scrollado');
    else
        $('.navbar').removeClass('scrollado');
});

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if(scrollTop > 100)
        $('.logomini').addClass('scrollado2');
    else
        $('.logomini').removeClass('scrollado2');
})