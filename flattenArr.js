function flattenArr(arr) {
  if (arr.length === 0) {
    return [];
  }

  let head = arr[0];
  let tail = arr.slice(1);
  if (Array.isArray(head)) {
    return [...head].concat(flattenArr(tail))
  } else {
    return [head].concat(flattenArr(tail));
  }
}