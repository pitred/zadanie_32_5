const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');
const hills = require('./hills');

describe('Distance Points', () => {
   describe('Normal hill', () => {
      it('should allowed distance strictEqual to kPoint', () => {
         const actual = calculateDistancePoints(98, hills.normal, 98);

         const expected = 60;

         assert.strictEqual(actual, expected);
      });
      it('should allowed distance smaller than kPoint', () => {
         const actual = calculateDistancePoints(88, hills.normal, 98);

         const expected = 40;

         assert.strictEqual(actual, expected);
      });
      it('should allowed distance greater than kPoint', () => {
         const actual = calculateDistancePoints(106.5, hills.normal, 98);

         const expected = 77;

         assert.strictEqual(actual, expected);
      });
   });

   describe('Large hill', () => {
      it('should allowed distance strictEqual to kPoint', () => {
         const actual = calculateDistancePoints(120, hills.large, 120);

         const expected = 60;

         assert.strictEqual(actual, expected);
      });
      it('should allowed distance smaller than kPoint', () => {
         const actual = calculateDistancePoints(114.5, hills.large, 120);

         const expected = 50.1;

         assert.strictEqual(actual, expected);
      });
      it('should allowed distance greater than kPoint', () => {
         const actual = calculateDistancePoints(134, hills.large, 120);

         const expected = 85.2;

         assert.strictEqual(actual, expected);
      });
   });

   describe('Flying hill', () => {
      it('should allowed distance strictEqual to kPoint', () => {
         const actual = calculateDistancePoints(200, hills.flying, 200);

         const expected = 120;

         assert.strictEqual(actual, expected);
      });
      it('should allowed distance smaller than kPoint', () => {
         const actual = calculateDistancePoints(187, hills.flying, 200);

         const expected = 104.4;

         assert.strictEqual(actual, expected);
      });
      it('should allowed distance greater than kPoint', () => {
         const actual = calculateDistancePoints(208.5, hills.flying, 200);

         const expected = 130.2;

         assert.strictEqual(actual, expected);
      });
   });

   describe('Hill name', () => {
      it('should allowed capital letter in hill name', () => {
         const actual = calculateDistancePoints(208.5, 'FlyinG', 200);

         const expected = 130.2;

         assert.strictEqual(actual, expected);
      });
      it('should allowed spaces before and after a hill name', () => {
         const actual = calculateDistancePoints(134, ' large ', 120);

         const expected = 85.2;

         assert.strictEqual(actual, expected);
      });
   });
});
