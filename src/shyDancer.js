var ShyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="batman" src=src/batman.png /></img>'); 
  // this.$node.append($('<img class="batman" src=src/batman.png /></img>'));
  Dancer.apply(this, arguments);
  this.$node.addClass('shy');
};

ShyDancer.prototype = Object.create(Dancer.prototype);

ShyDancer.prototype.constructor = ShyDancer;