var smallBreakPoint = 640;
var mediumBreakPoint = 768;

/* ==========================================================================
    WFH Excuses -- Version: 0.1.1- Updated: 11/26/2014
   ========================================================================== */

(function($) {

  $.fn.getExcuse = function() {

    var excuses = [];

    // The List of excuses!
    excuses[0] = "I'm washing my dogs car.";
    excuses[1] = "I'm the keynote speaker at the Peanut Brittle Symposium downtown.";
    excuses[2] = "I'll be giving my landscaper a tour of the museum";
    excuses[3] = "I have to pickup a football from my mechanic (long story!)";
    excuses[4] = "I need to work on my personal novella based on the life and times of my gerbil, Mr. Pickles III";

    var quote = excuses[Math.floor(Math.random() * excuses.length)];

    $('#preloader').text(quote);
  }

}(jQuery));

$('.excuse-me').click(function() {
  $('.excuse-generator').getExcuse();
});


/* ==========================================================================
    Main -- Version: 0.4.0 - Updated: 2/20/2014
    ========================================================================== */

// Add classes to first and last li's for every instance
$(function() {
  // Add classes to first and last of each list
  $('li:first-child').addClass('js-first');
  $('li:last-child').addClass('js-last');
});

// Set year
(function($) {

  $.fn.getYear = function() {
    var d = new Date();
    var x = document.getElementById("year");
    x.innerHTML=d.getFullYear();
  }

}(jQuery));
$('.getYear').getYear();


// Open all external links in a new window
$('a[href^="http://"], a[href^="https://"]').attr('target','_blank');
