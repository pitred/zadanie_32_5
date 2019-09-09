const removeMinMaxAndSum = notes => {
   const scopeBeginningIndex = 1;
   const scopeCeilIndex = 4;

   const result = notes
      .sort((a, b) => {
         return a - b;
      })
      .slice(scopeBeginningIndex, scopeCeilIndex)
      .reduce((acc, cur) => {
         return acc + cur;
      });
   return result;
};
const calculateStylePoints = styleNotes => {
   if (!Array.isArray(styleNotes)) {
      throw TypeError('styleNotes has to be an array');
   }
   if (styleNotes.length !== 5) {
      throw Error('5 style Notes are needed');
   }
   const stylePoints = removeMinMaxAndSum(styleNotes);
   return stylePoints;
};

module.exports = calculateStylePoints;
