$(document).ready(function() {
    $('#mobile-btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });
    
    const sections = $('section');
    const navItems = $('.nav-item');

    
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 3px 5px rgba(0, 0, 0, 0.1');
        }


    console.log(scrollPosition); // Mostra a posição do scroll no console
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })


        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    })
    
});

ScrollReveal().reveal('#port', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('#port2', {
    origin: 'right',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('#port3', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('#port4', {
    origin: 'right',
    duration: 1500,
    distance: '15%'
});


ScrollReveal().reveal('#port5', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('#port6', {
    origin: 'right',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('#port7', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});