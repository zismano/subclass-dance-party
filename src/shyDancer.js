var ShyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>'); 
  this.$node.append($('<img class="batman" src=src/batman.png /></img>'));
  Dancer.apply(this, arguments);
  this.$node.addClass('shyDance');

};

ShyDancer.prototype = Object.create(Dancer.prototype);

ShyDancer.prototype.constructor = ShyDancer;