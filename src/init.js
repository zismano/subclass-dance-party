$(document).ready(function() {
  window.dancers = [];
  $('body').css('background', 'src/the-real-gotham-city.jpg');

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var top = $('body').height() * Math.random();
    var left = $('body').width() * Math.random();
    while (top < 50 || top > $('body').height() - 100) {
      top = $('body').height() * Math.random();
    }
    while (left < 50 || left > $('body').width() - 100) {
      left = $('body').width() * Math.random();
    }

    var dancer = new dancerMakerFunction(
      top, left, Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.lineup').on('click', function(event) {
    Dancer.prototype.lineUp(); 
  });

  $('.pairup').on('click', function(event) {
    Dancer.prototype.pairUp();
  });
});




