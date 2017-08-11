const expect = require('expect');

describe('app', () => {
  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });
});