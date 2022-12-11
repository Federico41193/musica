$(document).ready(function() {
     $('.zoom').click(function() {

        var imageUrl = $(this).attr('src');
        var imageHeight = $(this).prop('naturalHeight');
        var windowHeight = $(window).height();

        if (imageHeight > windowHeight) {
          var optionalProperty = '; background-size: contain';
        } else {
          var optionalProperty = '';
        }

        $('body').prepend('<div class="zoomOpen"><div style="background-image: url(' + imageUrl + ')' + optionalProperty + '"></div></div>');
        $('html').css('overflow', 'hidden');

        $('.zoomOpen').animate({
             opacity: 1,
             zoom: 1
        }, 100, function() {
        $(this).click(function() {
            $(this).animate({
               opacity: 0,
               zoom: .85
            }, 250, function() {
            $(this).remove();
            $('html').css('overflow', 'auto');
          })
     })
   })
});

// $('.hide-media').mouseover(function(event) {
//      $('.portfolio_section').fadeIn(1000);
// });

$('#menu-item-dropdown-55').append(' <i class="fa-solid fa-caret-down"></i>');


// $(window).scroll(function(){
//      $('.portfolio_section').fadeOut('slow') });

});
