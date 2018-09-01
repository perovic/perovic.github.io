// Navbar fade-in/out animation
$(window).scroll(function(){
  if($(window).scrollTop() > 400) {
    $('.navbar-default').fadeIn(300);
  } else {
    $('.navbar-default').fadeOut(300);
  }
});

// Parallax scrolling of the jumbotron background
// var jumboHeight = $('.jumbotron').outerHeight();
function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  // $('.bg').css('top', (-0.8*scrolled) + 'px');
  if ($('.parallax').css('background-attachment')=='fixed') {
    $('.parallax').css('background-position-y', -427-(0.8*scrolled) + 'px');
  }
}
$(window).scroll(function(e){
  parallaxScroll();
});

// Init after document load
$(document).ready(function() {

  // // Init the grid for side-projects.
  // Grid.init();

  // Init WOW for awesome scroll animations.
  new WOW().init();

  /* This click listener allows the user to scroll to different parts of the page
   * using the navbar by attaching ids to anchors throughout the page.
   */
  $("a.scroll[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
  });

  // Hide the navbar dropdown menu which shows on small screens, after clicking a menu item
  // Doing it through JS, as using CSS makes it collapse even on larger screens
  $('.nav a').on('click', function(){
    if($('.navbar-toggle').css('display')!='none'){
      $('.navbar-toggle').click(); //bootstrap 3.x by Richard
    }
});
});