(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.carousel').carousel();
  });

var instance = M.Carousel.init({
    fullWidth: true
  });