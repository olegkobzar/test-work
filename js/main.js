$('.input-box').each(function() {
    var self = $(this);

    self.find('input').focus(function() {
        $(this).closest('.input-box').addClass('active');
    });

    self.find('input').blur(function() {
        if(self.find('input').val().length < 1) {
            $(this).closest('.input-box').removeClass('active');
        };
    });
})

function customSelect() {
    $('.custom-select__btn').on('click', function() {
        $(this).closest('.custom-select').toggleClass('active');
    })
    
    $('.custom-select__list li').on('click', function() {
        var value = $(this).data('value');
    
        $(this).closest('.custom-select').find('.custom-select__btn').text(value);
    
        $(this).closest('.custom-select').removeClass('active');
        $(this).closest('.custom-select').addClass('selected');
    })
    
    $(window).click(function(e) {
        if (!$(e.target).closest('.custom-select').length) {
            $('.custom-select').removeClass('active');
        }
    });
}

customSelect();

function showMobileMenu() {
    $('.header__nav-btn').on('click', function() {
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('active');
        $('body').toggleClass('overflow');
    });

    $('.scroll-id').on('click', function() {
        $('.header__nav-btn').removeClass('active');
        $('.header__nav').removeClass('active');
        $('body').removeClass('overflow');
    })
};

showMobileMenu();

$('.range-slider').slider({
    range: "max",
    min: 1,
    max: 100,
    value: 50
});

$('.scroll-id').mPageScroll2id({
    offset: 80
});
