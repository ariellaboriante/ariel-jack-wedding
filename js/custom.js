var isMobileWindow = window.matchMedia("(max-width: 991px)");
var isDesktopWindow = window.matchMedia("(min-width: 992px)");

// Progress Bar animation ---------------------------------------------------------------
$(document).ready(function() {
    $('html, body').css({'overflow': 'hidden','height': '100%'});           // disable scrolling
    $(".progress-bar").animate({width: "100%"}, 250 );                      // start in under a sec
    $("#home").animate({opacity: "1"}, 250 );                               // start in under a sec
    setTimeout(function(){$("#progressive").css("display", "none");}, 3000);// progress bar disappears in 3s
    setTimeout(function(){$('html, body').css({'overflow':'auto','height':'auto'});}, 3000);//enable scrolling

    // on startup, set the sidebar links to black
    if (isMobileWindow.matches) {
        $('.navbar').removeClass('affix');
        //$('.navbar').removeClass('add-shadow');
        //$('.navtext').removeClass('nav-text-white');
        //$('.navtext').removeClass('hover-grow2');
        //$('.navtext').addClass('nav-text-black');
        //$('.navtext').addClass('hover-change-color');
        //$(".nav-icons a").css("color", "black");
        //console.log("OK");
    }
     else if (isDesktopWindow.matches) {
            $('.navbar').removeClass('affix');
            $('.navbar').removeClass('add-shadow');
            $('.navtext').addClass('nav-text-white');
            $('.navtext').removeClass('nav-text-black');
            $('.navtext').addClass('hover-grow2');
            $('.navtext').removeClass('hover-change-color');
            $('.navbar-brand').addClass('nav-text-white');
            $('.navbar-brand').removeClass('nav-text-black');
            $(".nav-icons a").css("color", "white");
            console.log("OK");

        }
var nav = document.getElementById('access_nav'),
    body = document.body;

nav.addEventListener('click', function(e) {
    body.className = body.className? '' : 'with_nav';
    e.preventDefault();
});
});

// Hide shadow when not scrolling (Desktop view only) ----------------------------------
var didScroll;  

$(window).scroll(function(event) {
    didScroll = true;
    if (isDesktopWindow.matches) {   
        $('.navbar').addClass('add-shadow');
    }
});

setInterval(function() {  
        if (didScroll && isDesktopWindow.matches) {
            $('.navbar').removeClass('add-shadow');
            didScroll = false;
        }
}, 250);

// Change navbar depending on window size-----------------------------------------------
function setNavbar(x) {
    if (x.matches) {
        $('.navbar').removeClass('affix');
        $('.navbar').removeClass('add-shadow');
        $('.navtext').removeClass('nav-text-white');
        $('.navtext').addClass('nav-text-black');
        $('.navtext').removeClass('hover-grow2');
        $('.navtext').addClass('hover-change-color');
        $(".nav-icons a").css("color", "black");
        console.log("OK");
    }
    else
    {
        $('.navbar').addClass('affix');
        $('.navbar').addClass('add-shadow');
        $('.navtext').addClass('nav-text-black');
        $('.navtext').removeClass('nav-text-white');
        $('.navtext').addClass('hover-grow2');
        $('.navtext').removeClass('hover-change-color');
        $('.navbar-brand').addClass('nav-text-black');
        $('.navbar-brand').removeClass('nav-text-white');
        $(".nav-icons a").css("color", "black");
        console.log("OK");
    }
}

setNavbar(isMobileWindow)   // Call listener function at run time
isMobileWindow.addListener(setNavbar)  // Attach listener function on state changes

// Change navbar depending on scroll (Desktop view only)--------------
$(window).scroll(function() {
        if ($(window).scrollTop() > 500 && isDesktopWindow.matches) {
            $('.navbar').addClass('affix');
            $('.navbar').addClass('add-shadow');
            $('.navtext').addClass('nav-text-black');
            $('.navtext').removeClass('nav-text-white');
            $('.navtext').addClass('hover-grow2');
            $('.navtext').removeClass('hover-change-color');
            $('.navbar-brand').addClass('nav-text-black');
            $('.navbar-brand').removeClass('nav-text-white');
            $(".nav-icons a").css("color", "black");
            console.log("OK");
        }
        else if (isDesktopWindow.matches) {
            $('.navbar').removeClass('affix');
            $('.navbar').removeClass('add-shadow');
            $('.navtext').addClass('nav-text-white');
            $('.navtext').removeClass('nav-text-black');
            $('.navtext').addClass('hover-grow2');
            $('.navtext').removeClass('hover-change-color');
            $('.navbar-brand').addClass('nav-text-white');
            $('.navbar-brand').removeClass('nav-text-black');
            $(".nav-icons a").css("color", "white");
            console.log("OK");
        }
});
