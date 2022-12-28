

function telephoneCheck(str) {
  var regexTrue = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm

return regexTrue.test(str);




}

 telephoneCheck("555-555-5555")