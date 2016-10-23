$(function() {
    $('.nav a').click(function(e) {
        var $this = $(this),
            section = $(this).data('nav'),
            nav = $('.navbar-nav');

        if ($('[data-section=' + section + ']').length) {
            $('html,body').animate({
                scrollTop: $('[data-section=' + section + ']').offset().top
            }, 500)
        }
        nav.find('.active').removeClass('active');
        $this.parent().addClass('active');
        e.preventDefault();

    });
    $(window).scroll(function(e) {
        var header = $('.top-nav'),
            scrolltop = $(this).scrollTop();
        if (scrolltop > 500 && scrolltop < 2000) {
            header.addClass('top-nav-fixed');
        } else if (scrolltop <= 500) {
            header.removeClass('top-nav-fixed');
        }

    })
})
