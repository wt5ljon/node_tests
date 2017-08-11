const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(11, 7, (sum) => {
        expect(sum).toBe(18).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      var res = utils.square(15);

      expect(res).toBe(225).toBeA('number');
    });

    it('should async square a number', (done) => {
      utils.asyncSquare(7, (square) => {
        expect(square).toBe(49).toBeA('number');
        done();
      });
    });
  });
});

it('should expect some values', () => {
  // expect(12).toNotBe(11);
  // expect({name: 'jon'}).toNotEqual({name: 'Jon'});
  // expect([2, 3, 4]).toExclude(5);
  expect({name: 'Jon', age: 53, location: 'Florida'}).toExclude({age: 23});
});

it('should verify first and last names are set', () => {
  var user = {
    age: 53,
    location: 'Florida'
  };
  var res = utils.setName(user, 'Jon Olson');
  expect(res).toInclude({
    firstName: 'Jon',
    lastName: 'Olson'
  }).toBeA('object');
});