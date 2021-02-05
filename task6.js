// - В футбол играет 2 команды. Некто ставит ставку на счет в матче, например 1:2.
// Если человек угадывает точный счет, то получает большой приз. Если угадывает исход матча (выигрыш той или иной команды или ничью),
//  то получает маленький приз. Если не угадывает, то не получает ничего.
function betHandler(bet, finalCount) {
  if (bet == finalCount) {
    return "BIG PRIZE";
  }
  bet = bet.split(`:`);
  finalCount = finalCount.split(`:`);
  let resultBet = Boolean;
  let resultCount = Boolean;
  resultBet = +bet[0] <= +bet[1];
  resultCount = +finalCount[0] <= +finalCount[1];

  if (resultCount == resultBet) {
    return "SMALL PRIZE";
  } else {
    return "u loose";
  }
}

console.assert(
  betHandler(`11:2`, `11:2`) == "BIG PRIZE",
  "Actual result: %s",
  betHandler(`11:2`, `11:2`)
);
console.assert(
  betHandler(`1:2`, `11:2`) == "u loose",
  "Actual result: %s",
  betHandler(`1:2`, `11:2`)
);
console.assert(
  betHandler(`3:2`, `11:2`) == "SMALL PRIZE",
  "Actual result: %s",
  betHandler(`3:2`, `11:2`)
);
