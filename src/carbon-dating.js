const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sample) {
  let result = Number(sample);
  if (isNaN(result) || (typeof(sample) === "number") || (typeof(sample) == "boolean") 
  || (sample == null) || (typeof(sample) == "object") || (result == 0) || (result > 15)
  || (sample < 0)) return false;
  result = Math.ceil((Math.log(MODERN_ACTIVITY / result)) / (0.693 / HALF_LIFE_PERIOD));
  return result;
}

module.exports = {
  dateSample
};
