const hills = require('./hills');

const calculateDistancePoints = (distance, hillSize, kPoint) => {
   if (!distance || !hillSize || !kPoint) {
      throw Error('Somethings wrong, missing one ore more argument !');
   }

   let pointsDiffNormal = (distance - kPoint) * 2;
   let pointsDiffLarge = (distance - kPoint) * 1.8;
   let pointsDiffFlying = (distance - kPoint) * 1.2;

   switch (
      hillSize
         .toString()
         .trim()
         .toLowerCase()
   ) {
      case hills.normal:
         return 60 + pointsDiffNormal;
      case hills.large:
         return 60 + pointsDiffLarge;
      case hills.flying:
         return 120 + pointsDiffFlying;
      default:
         throw Error(`${hillSize} is wrong hill size`);
   }
};

module.exports = calculateDistancePoints;
