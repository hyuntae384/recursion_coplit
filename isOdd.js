function isOdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  if(num === 1 || num == -1){
    return true
  } if(num === 0){
    return false;
  }
  
  if (num > 0){
    return isOdd(num - 2)
  } if (num < 0) {
    return isOdd(num + 2)
  }
  
  
  
}
