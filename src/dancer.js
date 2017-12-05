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


// var Dancer = function(top, left, timeBetweenSteps) {
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.$node = $('<span class="dancer"></span>');
//   this.setPosition(top, left);
//   window.dancers.push([this, top, left]);
// };

// // the basic dancer doesn't do anything interesting at all on each step,
// // it just schedules the next step
// Dancer.prototype.step = function() {
//   setTimeout(() => this.step(), this.timeBetweenSteps);
// }; 

// Dancer.prototype.setPosition = function(top, left) {
// // Use css top and left properties to position our <span> tag
// // where it belongs on the page. See http://api.jquery.com/css/
//   var styleSettings = {
//     top: top,
//     left: left
//   };  
//   this.$node.css(styleSettings);
// };

// Dancer.prototype.lineUp = function() {
//   window.dancers.forEach(function(dancer) {
//  //   debugger;
//   //  dancer.css(top, 100);
//   dancer.prototype.setPosition(100, dancer[2]);
//   });
// };