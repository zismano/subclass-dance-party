describe('rotateDancer', function() {

  var rotateDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotateDancer = new RotateDancer(10, 20, timeBetweenSteps);
  });
  it('should have a jQuery $node object', function() {
    expect(rotateDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a RotateDancer constructor', function() {
    expect(rotateDancer).to.be.an.instanceof(RotateDancer);
  });
});