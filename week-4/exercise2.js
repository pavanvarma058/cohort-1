let array = [
  {
    name: "Pavan",
    age: 29,
  },
  {
    name: "Sai",
    age: 20,
  },
  {
    name: "Yeswanth",
    age: 22,
  },
];

// let newArr = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i].age < 25) {
//     newArr.push({
//       name: array[i].name,
//       age: array[i].age,
//       isAllowed: false,
//     });
//   } else {
//     newArr.push({
//       name: array[i].name,
//       age: array[i].age,
//       isAllowed: true,
//     });
//   }
// }

let newArr = array.map((value) => {
  if (value.age < 25) {
    return {
      name: value.name,
      age: value.age,
      isAllowed: false,
    };
  } else {
    return {
      name: value.name,
      age: value.age,
      isAllowed: true,
    };
  }
});
console.log(newArr);
