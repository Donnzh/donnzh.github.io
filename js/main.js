var $animation_elements = $('.animation-element');
// var $animation_navbar = $('')
var $window = $(window);
$window.on('scroll', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            // console.log('inview')
            $element.addClass('in-view');
        } else {
            // $element.removeClass('in-view');
        }
    });
}
jQuery(document).ready(function($) {
    $('#slider1').unslider({
      // autoplay: true,
       keys: false
});
    $('#slider2').unslider({
      // autoplay: true,
       keys: false


});
    $('#slider3').unslider({
      // autoplay: true,
       keys: false
});
$('#slider4').unslider({
  // autoplay: true,
   keys: false
});


});

$(function() {
    $("#typed").typed({
        strings: [" Hi, I'm Donn. <br> <span style='font-size:30px;'> I'm a full-stack web developer living in Sydney.<span> " ],
        typeSpeed: -5,
        showCursor: false
    });

 setTimeout(function(){
    // $(".fadeIntext").css({
    //   display:"inline"
    // })

    $(".fadeIntext").css('visibility','visible').hide().fadeIn(1500)
  },1000);

});
new WOW().init();

// $(function(){
//
//   setInterval(function(){
//     $('#slider .sliders').animate({'margin-left':'-=720px'},1000)
//   })
//setInterval
//animate margin-left
//if its last slide, go position1

// })






// $(function(){
//        $("#typed").typed({
//            stringsElement: $('#typeElement')
//        });
//    });
