const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = "";
  if (! Array.isArray(members)) return false;
    for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) == "string") {
            result += members[i].split(' ').join('').slice(0,1).toUpperCase();
        }
      }
    
    if (result === "") return false
    else return result.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
 
// assert.equal(createDreamTeam(3), false);
//       assert.equal(createDreamTeam(3.312312), false);
//       assert.equal(createDreamTeam(false), false);
//       assert.equal(createDreamTeam(null), false);
//       assert.equal(createDreamTeam(undefined), false);
//       assert.equal(createDreamTeam({ 'foo': 'bar' }), false);