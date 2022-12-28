function palindrome(str) {
var regex = /[\W_]/g;
var remRegex = str.replace(regex, "");
var lowStr = remRegex.toLowerCase();

var reverseStr = lowStr.split("").reverse().join("");
  if (reverseStr === lowStr){
return true;
  } else {
    return false;
  }
}

palindrome("eye");
palindrome("racecar");
palindrome("race CAR");
palindrome("2A3*3a2");
palindrome("2A3 3a2");
palindrome("2_A3*3#A2");