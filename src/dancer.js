// var Dancer = class Dancer {
//   constructor(top, left, timeBetweenSteps) {
//     this.$node = $('<span class="dancer"></span>');
//  // this.$node = $('<img id="batman" src=src/batman.png /></img>');
//     this.step();
//     this.setPosition(top, left);
//   }
//   step() {
//     setTimeout(this.step.bind(this), this.timeBetweenSteps);
//   }
//   setPosition(top, left) {
//     let styleSettings = {
//       top: top,
//       left: left
//     };  
//     this.$node.css(styleSettings);  
//   }


var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  window.dancers.push([this, top, left]);
};

// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
Dancer.prototype.step = function() {
  setTimeout(() => this.step(), this.timeBetweenSteps);
}; 

Dancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };  
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {  
  window.dancers.forEach(function(dancer) {
    dancer[0].$node.toggleClass('line');
  });
};

Dancer.prototype.pairUp = function() {
  if (window.dancers[0][0].$node.css('filter') !== 'none') {
    for (var i = 0; i < window.dancers.length; i++) {
      var clean = {
        filter: '',
        'background-color': '' 
      };
      window.dancers[i][0].$node.css(clean);
    }  
  } else {
    for (var i = 0; i < window.dancers.length; i = i + 2) {
    //  debugger;
      var randomSaturation = ((Math.random() * 800));
      var randomColor = getRandomColor();
      var pairColor = {
        filter: 'saturate(' + randomSaturation + '%)',
        'background-color': randomColor
      };  
      if (window.dancers[i + 1]) { 
        window.dancers[i][0].$node.css(pairColor);
        console.log(window.dancers[i][0].$node);
        window.dancers[i + 1][0].$node.css(pairColor); 
      }
    }  
  }

};

Dancer.prototype.splitUp = function() {
  for (var i = 0; i < window.dancers.length; i++) {
    var clean = {
      filter: '',
      'background-color': '' 
    };
    window.dancers[i][0].$node.css(clean);
  }

};

var getRandomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};