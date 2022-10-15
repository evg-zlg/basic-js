const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];
  if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
          switch (arr[i]) {
              case "--double-next":
                  if ((arr.length - 1) >= (i+1)) {
                      result.push(arr[i+1]);
                  } else return result //если это последний элемент
                  break;
              case "--discard-next":
                  i ++;
                  i ++;
                  break;
              case "--double-prev":
                  if (i > 0) {
                      result.push(arr[i-1]);
                  }
                  break;
              case "--discard-prev":
                  if (i > 0) {
                      result.pop();
                  }
                  break;
              default:
                  result.push(arr[i]); 
          }

      }
      return result;
  } else {
      throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
