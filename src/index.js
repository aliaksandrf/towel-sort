
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrTemp = [];
  if (matrix == null || matrix.length == 0) return [];
  for (let i = 0; i < matrix.length; i++) {
    if ( i % 2 == 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        arrTemp.push(matrix[i][j]);
      }
    } else {
      for (let j = 0; j < matrix[i].length; j++) {
        arrTemp.push(matrix[i][matrix[i].length - 1 - j]);
      }

    }


  }


  return arrTemp;
}
