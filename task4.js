//- Написать функцию, которая определяла бы является ли входящая строка палиндромом или нет

// Примеры:
// isPalindrome(“racecar”); //true
// isPalindrome(“table”); //false
//isPalindrome(“А роза упала на лапу Азора”’); //true
function checkStrForPal(str) {
  let str1 = str;
  let str2 = "";

  for (i = str.length; i >= 0; i--) {
    str2 += str.charAt(i);

  }
  str1 = str.toLowerCase();
  str1 = str1.replace(/\s/g, '');
  str2 = str2.toLowerCase();
  str2 = str2.replace(/\s/g, '');
  
  if (str1 == str2) {
    return true;
  } else {
    return false;
  }
}
console.assert(
  checkStrForPal("racecar") == true,
  "Actual result: %s",
  checkStrForPal("racecar")
);
console.assert(
  checkStrForPal("table") == false,
  "Actual result: %s",
  checkStrForPal("table")
);

console.assert(
  checkStrForPal(" saippuakivikauppias ") == true,
  "Actual result: %s",
  checkStrForPal(" saippuakivikauppias ")
);
console.assert(
  checkStrForPal(" А роза упала на лапу Азора ") == true,
  "Actual result: %s",
  checkStrForPal(" А роза упала на лапу Азора ")
);
