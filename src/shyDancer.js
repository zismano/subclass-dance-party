var ShyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>'); 
  this.$node.append($('<img class="batman" src=src/batman.png /></img>'));
  Dancer.apply(this, arguments);
 // this.$node.addClass('move');
  this.$node.addClass('colorDance');

};

ShyDancer.prototype = Object.create(Dancer.prototype);

ShyDancer.prototype.constructor = ShyDancer;

// ShyDancer.prototype.move = function() {


// }

//     debugger;
//     $(this).animate({
//       top: Math.random() < 0.5 ? -10 : 10
//     }, 100);
//     $(this).animate({
//       left: Math.random() < 0.5 ? -10 : 10
//     }, 100);
//   });