$('.nav-link').on('click', function () {
    $('.active-link').removeClass('active-link');
    $(this).addClass('active-link');
});


$('.toggalbtn').click(function () {
   
    $(this).toggleClass("click");
    if ($('#sidebarMenu').hasClass('xyz')) {
        $('#sidebarMenu').removeClass("d-none xyz");
        $('#sidebarMenu').addClass("d-none d-lg-block d-xl-block d-xxl-block");
        $('#mainContent').removeClass("col-lg-12");
        $('#mainContent').addClass("col-lg-10");
    } else {
        $('#sidebarMenu').removeClass("d-none d-lg-block d-xl-block d-xxl-block");
        $('#sidebarMenu').addClass("d-none xyz");
        $('#mainContent').removeClass("col-lg-10");
        $('#mainContent').addClass("col-lg-12");
    }
});

