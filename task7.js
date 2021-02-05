// Написать функцию, которая принимает на вход предсказанный счет
//  и реальный счет (например, массив вида [“1 : 2”, “3 : 2”]) и возвращает
// 0 - не получает ничего
// 1 - маленький приз
// 2 - большой приз

// Примеры:
// [“1 : 2”, “3 : 2”] => 0
// [“2 : 1”, “1 : 2”] => 0
// [“5 : 4”, “1 : 1”] => 0
// [“1 : 2”, “2 : 3”] => 1
// [“3 : 2”, “5 : 2”] => 1
// [“2 : 2”, “3 : 3”] => 1
// [“2 : 2”, “2 : 2”] => 2
// [“3 : 2”, “3 : 2”] => 2
function betHandler(array) {
  let bet = array[0].toString();
  let finalCount = array[1].toString();

  if (bet == finalCount) {
    return 2;
  }
  bet = bet.split(`:`);
  finalCount = finalCount.split(`:`);

  let resultBet = Boolean;
  let resultCount = Boolean;
  resultBet = +bet[0] <= +bet[1];
  resultCount = +finalCount[0] <= +finalCount[1];

  if (resultCount == resultBet) {
    return 1;
  } else {
    return 0;
  }
}


  console.assert(
    betHandler([`11:2`, `11:2`]) == 2,
    "Actual result: %s",
    betHandler([`11:2`, `11:2`])
  );
  console.assert(
    betHandler(["1 : 2", "11 : 2"]) == 0,
    "Actual result: %s",
    betHandler(["1 : 2", "11 : 2"])
  );
  console.assert(
    betHandler([`3:2`, `11:2`]) == 1,
    "Actual result: %s",
    betHandler([`3:2`, `11:2`])
  );
  console.assert(
    betHandler([`1 : 2`, `3 : 2`]) == 0,
    "Actual result: %s",
    betHandler([`1 : 2`, `3 : 2`])
  );

  console.assert(
    betHandler([`2 : 1`, `1 : 2`]) == 0,
    "Actual result: %s",
    betHandler([`2 : 1`, `1 : 2`])
  );

  console.assert(
    betHandler([`5 : 4`, `1 : 1`]) == 0,
    "Actual result: %s",
    betHandler([`5 : 4`, `1 : 1`])
  );

  console.assert(
    betHandler([`1 : 2`, `2 : 3`]) == 1,
    "Actual result: %s",
    betHandler([`1 : 2`, `2 : 3`])
  );
  console.assert(
    betHandler([`3 : 2`, `5 : 2`]) == 1,
    "Actual result: %s",
    betHandler([`3 : 2`, `5 : 2`])
  );
  console.assert(
    betHandler([`2 : 2`, `3 : 3`]) == 1,
    "Actual result: %s",
    betHandler([`2 : 2`, `3 : 3`])
  );

  console.assert(
    betHandler([`3 : 2`, `3 : 2`]) == 2,
    "Actual result: %s",
    betHandler([`3 : 2`, `3 : 2`])
  );

  console.assert(
    betHandler([`2 : 2`, `2 : 2`]) == 2,
    "Actual result: %s",
    betHandler([`2 : 2`, `2 : 2`])
  );
