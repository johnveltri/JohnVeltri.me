//OVERALL---------------------------------------------------------------
$(window).unload(function() {
  $('body').scrollTop(0);
});

//SCROLL ---------------------------------------------------------------
$(document).ready(function() {
  $(".jumper").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 600);

  });
});


// Testimonial Scroll
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 6000,
  });
});




//EXPERIENCE BOXES -----------------------------------------------------

var originalColor;

var showDetails = function() {
  $(this).children(".skill-title").hide();
  originalColor = $(this).css("background-color");
  $(this).css("background-color", "transparent");
  $(this).children(".skill-details").show();
};

var hideDetails = function() {
  $(this).children(".skill-title").show();
  $(this).css("background-color", originalColor);
  $(this).children(".skill-details").hide();
};

$("#skill-1.skill").mouseover(function(f) {
  showDetails.call(this, f);
});
$("#skill-1.skill").mouseleave(function(f) {
  hideDetails.call(this, f);
});
$("#skill-2.skill").mouseover(function(f) {
  showDetails.call(this, f);
});
$("#skill-2.skill").mouseleave(function(f) {
  hideDetails.call(this, f);
});
$("#skill-3.skill").mouseover(function(f) {
  showDetails.call(this, f);
});
$("#skill-3.skill").mouseleave(function(f) {
  hideDetails.call(this, f);
});
$("#skill-4.skill").mouseover(function(f) {
  showDetails.call(this, f);
});
$("#skill-4.skill").mouseleave(function(f) {
  hideDetails.call(this, f);
});
$("#skill-5.skill").mouseover(function(f) {
  showDetails.call(this, f);
});
$("#skill-5.skill").mouseleave(function(f) {
  hideDetails.call(this, f);
});
$("#skill-6.skill").mouseover(function(f) {
  showDetails.call(this, f);
});
$("#skill-6.skill").mouseleave(function(f) {
  hideDetails.call(this, f);
});
$("#skill-7.skill").mouseover(function(f) {
  showDetails.call(this, f);
});
$("#skill-7.skill").mouseleave(function(f) {
  hideDetails.call(this, f);
});
$("#skill-8.skill").mouseover(function(f) {
  showDetails.call(this, f);
});
$("#skill-8.skill").mouseleave(function(f) {
  hideDetails.call(this, f);
});
$("#skill-9.skill").mouseover(function(f) {
  showDetails.call(this, f);
});
$("#skill-9.skill").mouseleave(function(f) {
  hideDetails.call(this, f);
});
