var BlinkyDancer = class BlinkyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    super.step(); // uses Dancer.prototype.step / uses superclass step function, not own step
    this.$node.toggle();
  }
};