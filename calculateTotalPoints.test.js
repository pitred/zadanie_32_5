const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');
const hills = require('./hills');

describe('Total Points', () => {
   it('should allowed additional points to be positive', () => {
      const actual = calculateTotalPoints(182, hills.flying, 200, [17, 17.5, 17, 17.5, 17], 26.1, 6);

      const expected = 182;

      assert.equal(actual, expected);
   });

   it('should allowed additional points to be negative', () => {
      const actual = calculateTotalPoints(136, hills.large, 120, [20, 19.5, 19.5, 20, 20], -14, -6);

      const expected = 128.3;

      assert.equal(actual, expected);
   });

   it('should allowed additional points to be: one negative, one positive', () => {
      const actual = calculateTotalPoints(111, hills.normal, 98, [19, 19.5, 19, 19, 19], -14.4, 3.2);

      const expected = 131.8;

      assert.equal(actual, expected);
   });
});
