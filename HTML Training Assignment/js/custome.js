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
    if ($(window).width() < 570) {


        if ($('#sidebarMenu').hasClass('xyz')) {
            $('#sidebarxyz').removeClass("d-none d-lg-block d-xl-block d-xxl-block");
            $('#sidebarMenu').removeClass("d-none d-lg-block d-xl-block d-xxl-block");
            $('#sidebarMenu').addClass("show d-sm-block xyz");
        }
        else {

            $('#sidebarxyz').addClass("d-none d-lg-block d-xl-block d-xxl-block");
            $('#sidebarMenu').addClass("d-none d-lg-block d-xl-block d-xxl-block");
            $('#sidebarMenu').removeClass("show d-sm-block xyz");
        }


    }
});

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

