//- Написать функцию, которая определяла бы является ли входящая строка палиндромом или нет

// Примеры:
// isPalindrome(“racecar”); //true
// isPalindrome(“table”); //false
function checkStrForPal(str) {
  let str1 = str;
  let str2 = "";

  for (i = str.length; i >= 0; i--) {
    str2 += str.charAt(i);
  }
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
