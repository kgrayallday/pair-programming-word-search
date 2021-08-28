const transpose = matrix => {
  const newArr = [];

  if (matrix.length === 1) {
    let tempArr = [];

    for (let y = 0; y < matrix[0].length; y++) {
      tempArr.push(matrix[0][y]);
      newArr.push(tempArr);
      tempArr = [];
    }

    return newArr;
  }

  for (let y = 0; y < matrix.length; y++) {
    let tempArr = [];

    for (let x = 0; x < matrix.length; x++) {
      tempArr.push(matrix[x][y]);
    }

    newArr.push(tempArr);
    tempArr = [];
    if (newArr.length === matrix[y].length) {
      break;
    }
  }

  return newArr;
};

module.exports = transpose;