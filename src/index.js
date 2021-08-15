
exports.min = function min (array) {
  if ((array === undefined) || (array == [])) {
    return 0;
  }
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

exports.max = function max(array) {
  if ((array === undefined) || (array == [])) {
    return 0;
  }
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if ((array === undefined) || array == []) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }
  return sum / array.length;
}
