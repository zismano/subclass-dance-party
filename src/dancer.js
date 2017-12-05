var Dancer = class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.step();
    this.setPosition(top, left);
  }
  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition(top, left) {
    let styleSettings = {
      top: top,
      left: left
    };  
    this.$node.css(styleSettings);  
  }
};