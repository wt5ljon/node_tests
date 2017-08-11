const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('app', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Jon', 53);
    expect(spy).toHaveBeenCalledWith('Jon', 53);
  });

  it('should call saveUser with user object', () => {
    var email = 'jonolson@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});