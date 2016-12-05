// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //this is for the video scrolling part
    $('a.page-scrolling').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


//This section is for the image sliding show
    var slideImages = new Array();
    var whichimage = 0;

    slideImages[0] = new Image();
    slideImages[0].src = "img/pizza1.jpg";
    slideImages[1] = new Image();
    slideImages[1].src = "img/pizza2.jpg";
    slideImages[2] = new Image();
    slideImages[2].src = "img/pizza4.jpg";

    //variable that will increment through the images
    var step = 0;
    var x;
    var v;

    // this function continuously iterates through the array of image objects
    function slideit() {
        x = document.getElementsByTagName("img").item(0);
        v = x.getAttribute("src");

        if(!document.images)
            return;

        v = slideImages[step].src;

        // gets the current image object from html file
        document.getElementById('slide').src = slideImages[step].src;

        whichimage = step;

        if (step<2) {
            step++;
        }
        else {
            step = 0;
        }

        // sets the slideit functions current image object in html file
        x.setAttribute("src", v);

        // timing delay for 2.5 seconds before transition to new image
        setTimeout("slideit()",2500);
    }

    slideit();

