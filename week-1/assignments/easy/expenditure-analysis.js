/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let spendEsitmates = {};
  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    if (spendEsitmates[t.category]) {
      spendEsitmates[t.category] += t.price;
    } else {
      spendEsitmates[t.category] = t.price;
    }
  }
  let keys = Object.keys(spendEsitmates);

  let answer = [];
  for (let i = 0; i < keys.length; i++) {
    let category = keys[i];
    let obj = {
      category: category,
      amountSpent: spendEsitmates[category],
    };
    answer.push(obj);
  }
  return answer;
}

const transactions = [
  {
    itemName: "Pepsi",
    category: "Drink",
    price: 20,
    timestamp: 123123123,
  },
  {
    itemName: "Mirinda",
    category: "Drink",
    price: 25,
    timestamp: 123123123,
  },
  {
    itemName: "Samosa",
    category: "Food",
    price: 15,
    timestamp: 123123123,
  },
  {
    itemName: "Ladoo",
    category: "Food",
    price: 10,
    timestamp: 123123123,
  },
  {
    itemName: "Thumsup",
    category: "Drink",
    price: 30,
    timestamp: 123123123,
  },
];

const answer = calculateTotalSpentByCategory(transactions);
console.log(answer);
