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
    excuses[5] = "my fish is sick.";
    excuses[6] = "I can't find my shoes.";
    excuses[7] = "YOLO!";
    excuses[8] = "I'm renting my Llama out for a birthday party.";
    excuses[9] = "I accidentally got on a plane.";
    excuses[10] = "I’m stuck in the blood pressure machine at the grocery store.";
    excuses[11] = "A tree fell on my car.";
    excuses[12] = "YOLO!";
    excuses[13] = "I'm renting my Llama out for a birthday party.";
    excuses[14] = "My cat seems lonely.";

    var quote = excuses[Math.floor(Math.random() * excuses.length)];

    $('#preloader').text(quote);
  }

}(jQuery));

$('.excuse-me').click(function() {
  $('.excuse-generator').getExcuse();
});
