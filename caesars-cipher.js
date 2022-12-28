function rot13(str) {
  let moved = "";

  for (let i =0; i<str.length; i++){
let num = str[i].charCodeAt();

if (num >= 65 && num <= 77){
  moved += String.fromCharCode(num + 13);

} 
else if (num >= 78 && num <= 90){
  moved += String.fromCharCode(num - 13);
} 
else{
  moved += str[i];
}
  }
  return moved;
}

rot13("SERR PBQR PNZC");