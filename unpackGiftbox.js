function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.
  for(let el of giftBox){
    if(Array.isArray(el)){
      return unpackGiftbox(el, wish)
    }
    if(el === wish){
      return true
    }
  }
  return false
}