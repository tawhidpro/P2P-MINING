$(document).ready(function() {

  $('.counter').each(function () {
$(this).prop('Counter',0).animate({
  Counter: $(this).text()
}, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
      $(this).text(Math.ceil(now));
  }
});
});

});  



// scroll to top butotn 

window.onscroll = function() {
  var scrollButton = document.getElementById("scroll-to-top");
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

// Scroll to top when the button is clicked
document.getElementById("scroll-to-top").onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};