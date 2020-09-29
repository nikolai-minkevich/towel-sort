
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length == 0) return []
  let arr = []
  let i=0
  matrix.forEach(element => {
    if (i%2!==0) element=element.reverse()
    arr = arr.concat(element)
    i++
  });
  return arr
}
