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
          // deleted the class to make the slider again
        }
    });
}


$(function() {
    $("#typed").typed({
        strings: [" Hi, I'm Donn. <br> <span style='font-size:30px;'> I'm a full-stack web developer living in Sydney.<span> " ],
        typeSpeed: -5,
        showCursor: false
    });

    // fadeIntext
 setTimeout(function(){
        $(".fadeIntext").css('visibility','visible').hide().fadeIn(1500)
  },1000);

// smooth scroll
  $('.page-scroll').click(function(){
    //Toggle Class
    $(".active1").removeClass("active1");
    $(this).closest('li').addClass("active1");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active1');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 500);
    return false;
  });
  //scroll to top (not set yet)
  $('.scrollTop a').scrollTop();

// slider picture
  $('.my-slider').unslider({
    // autoplay: true,
     keys: false
});
//wow animation
new WOW().init();



});
