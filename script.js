$(document).ready(function() {
    
    var bar = $(".navbar_contain");
    var list = $(".modal_content");
    var close = $(".close");

        bar.click(function(){
            list.slideDown();
        });

        close.click(function(){
            list.slideUp();
        })
        list.click(function(){
            list.slideUp();
    });
    

//    var div = $('.navbar');
//    var start = $(div).offset().top;
//        
//    $.event.add(window, "scroll", function() {
//         var p = $(window).scrollTop();
//         $(div).css('position',((p)>start) ? 'fixed' : 'static');
//         $(div).css('top',((p)>start) ? '0px' : '');
//    });

});