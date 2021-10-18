let temp = ''
const letters = 'abcdefghijklmnopqrstuvwxyz'
for(var i=0; i < original.length; ++i){
  let c = original[i]
  if('0123456789'.indexOf(c) != -1){
    temp += original[i]
  } else {
    let x = c, d = 0, idx = letters.indexOf(c)
    if(i % 15 == 0){
      d = 3
    } else if(i % 3 == 0){
      d = 5
    } else if(i % 5 == 0){
      d = 9
    } else {
      d = 2
    }
    let n =  idx - d % letters.length
    if(n < 0){ n = letters.length + n }
    x = letters[n]
    temp += x
  }
}
computed = temp
