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


$('#menu-item-dropdown-55').append(' <i class="fa-solid fa-caret-down"></i>');


/* owl carousel */


$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left fa-2xl'></i>",
    "<i class='fa fa-caret-right fa-2xl'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5,
    }
  }
})

/* script sezione galleria */

$('#no-cat').on('click' , function() {
  $('h4.scelta').empty();
  $('h4.scelta').append($(this).val());
  $('#no-category').fadeIn('slow');
  $('#category3').css('display' , 'none');
  $('#category4').css('display' , 'none');
})

$('#cat3').on('click' , function() {
  $('h4.scelta').empty();
  $('h4.scelta').append($(this).val());
  $('#category3').fadeIn('slow');
  $('#no-category').css('display' , 'none');
  $('#category4').css('display' , 'none');
})

$('#cat4').on('click' , function() {
  $('h4.scelta').empty();
  $('h4.scelta').append($(this).val());
  $('#category4').fadeIn('slow');
  $('#no-category').css('display' , 'none');
  $('#category3').css('display' , 'none');
})

});
