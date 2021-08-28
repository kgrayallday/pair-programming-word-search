const transpose = require('./transpose');

const wordSearch = (letters, word) => { 
    
  const horizontalJoin = letters.map(ls => ls.join(''))
  // console.log(horizontalJoin);
  const verticleLetters = transpose(letters);
  const verticleJoin = verticleLetters.map(lts => lts.join(''))
  // console.log("TRANSPOSED: \n", verticleJoin);
  const newList = horizontalJoin.concat(verticleJoin);

  for (let l of newList) {
    console.log(`if ${l} includes ${word} return true`)
    if (l.includes(word)) return true
  }

  return false;

}

module.exports = wordSearch