// Change header class on scroll
$(window).scroll(function() {
      if ($(this).scrollTop() > 1){
      $('.header').addClass('stickyheader');
      }
      else{
      $('.header').removeClass('stickyheader');
      }
});
