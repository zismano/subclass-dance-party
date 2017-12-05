var BatmanDancer = function(top, left, timeBetweenSteps) { 
//this.$node = $('<img id="batman" src=src/batman.png /></img>');
	this.name = "batman"; 
	this.$node = $('<img class="batman" src=src/batman.png /></img>'); 
  	Dancer.apply(this, arguments);


  this.step();
};

BatmanDancer.prototype = Object.create(Dancer.prototype);

BatmanDancer.prototype.constructor = BatmanDancer;

// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
BatmanDancer.prototype.step = function() { 
  var name = Dancer.prototype.step.bind(this);
  name();
  // call the old version of step at the beginning of any call to this new version of step
  this.$node.toggle();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};