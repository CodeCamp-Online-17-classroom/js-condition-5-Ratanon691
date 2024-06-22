let value = prompt(`give me a number`)
if(value < 0) {
  alert(`Negative`)
}
else if(value == 0) {
  alert(`Zero`)
}
else if(value > 0) {
  alert(`Positive`)
}
else if(typeof value !== `number`){
  alert(`Invalid number`)
}
