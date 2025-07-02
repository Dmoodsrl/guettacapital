// number counter js
function visible(partial) {
          var $t = partial,
              $w = jQuery(window),
              viewTop = $w.scrollTop(),
              viewBottom = viewTop + $w.height(),
              _top = $t.offset().top,
              _bottom = _top + $t.height(),
              compareTop = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;

          return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

      }

      $(window).scroll(function(){

        if(visible($('.count')))
          {
            if($('.count').hasClass('counter-loaded')) return;
            $('.count').addClass('counter-loaded');
            
      $('.count').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 1300,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
    }
})



// on scroll header background change
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $("header").addClass("darkHeader");
    } else {
        $("header").removeClass("darkHeader");
    }
});




// page scroll add active nav link
 // Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 90;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}



  $("#home-lnk").click(function (){
    $('html, body').animate({
      scrollTop: $("#home").offset().top-0
    }, 800);
  });
  $("#investimenti-lnk").click(function (){
    $('html, body').animate({
      scrollTop: $("#investimenti").offset().top-70
    }, 800);
  });
  $("#portafoglio-lnk").click(function (){
    $('html, body').animate({
      scrollTop: $("#portafoglio").offset().top-70
    }, 800);
  });
  $("#contatti-lnk").click(function (){
    $('html, body').animate({
      scrollTop: $("#contatti").offset().top-70
    }, 800);
  });