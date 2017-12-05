var RotateDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>'); 
  this.$node.append($('<img class="batman" src=src/batman.png /></img>'));
  Dancer.apply(this, arguments);
  this.$node.addClass('rotate');
  this.step();
};

RotateDancer.prototype = Object.create(Dancer.prototype);

RotateDancer.prototype.constructor = RotateDancer;

BatmanDancer.prototype.step = function() { 
  var name = Dancer.prototype.step.bind(this);
  name();
};