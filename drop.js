function drop(num, arr) {
  // TODO: 여기에 코드를 작성합니다.
  if(num >= arr.length){
    return [];
  } if(num == 0){
    return arr
  }
  const tail = arr.slice(1)
  
  return drop(num-1, tail)
}
