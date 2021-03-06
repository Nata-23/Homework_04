"use strict";

//1

//arrow!!!
// let searchString = (originalStr, str) => originalStr.includes(str);

//declaretion!!!
// function searchString(originalStr, str) {
//   let loweroriginalStr = originalStr.toLowerCase();
//   let lowerStr = str.toLowerCase();

//   return loweroriginalStr.includes(lowerStr);
// }
// console.log(searchString("Hello", "llo"));
// console.log(searchString("Hello", "www"));

//2
// const capitalizeFirstLetter = (str) => {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// };

// console.log(capitalizeFirstLetter("hello"));
// console.log(capitalizeFirstLetter("HELLO"));
// console.log(capitalizeFirstLetter("hElLo"));

//3

// const truncate = (str, maxlength) => {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "…";
//   } else {
//     return str;
//   }
// };

// const truncate = (str, maxlength) =>
//   str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;

// console.log(truncate("Hello world", 5)); // Hello...
// console.log(truncate("Hello world", 25)); // Hello world

//4
const students = [
  {
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7], //48, 8
  },
  {
    name: "John Doe",
    marks: [9, 8, 7, 6, 7], //37, 7.4
  },
  {
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8], //31, 7.75
  },
  {
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9], //36, 9
  },
];
//4.1
const newStudents = countAverageScore(students);
console.log(newStudents);

function countAverageScore(students) {
  // const newStudents = students.slice(0, students.length); //здесь исходный массив изменится
  const newStudents = students.map((student) => Object.assign({}, student)); //здесь исходный массив НЕ изменится
  newStudents.forEach(function (element) {
    element.avaregeMark =
      element.marks.reduce((sum, current) => sum + current, 0) /
      element.marks.length;
  });
  return newStudents;
}

//4.2
const averageMark = getAverageMark(newStudents);
console.log(`Cредний бал по всем студентам = ${averageMark}`);

function getAverageMark(newArray) {
  return (
    newArray.reduce((sum, current) => sum + current.avaregeMark, 0) /
    newArray.length
  );
}

//5
// const vehicles = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "SUV", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "SUV", price: 31660 },
// ];
// // Извлекаем структуры с нужным типом в массив
// const foundType = vehicles.filter((item) => item.type.toUpperCase() === "SUV");
// // Извлекаем цены в массив
// const arrayOfPrices = foundType.map((item) => item.price);
// // Находим сумму всех цен
// const priceTotal = arrayOfPrices.reduce((sum, current) => sum + current, 0);
// // Вычисляем и выводим в консоль среднее значение.
// const averagePrice = priceTotal / arrayOfPrices.length;
// console.log("Average price:", averagePrice);

//6
// let arr = [10, 20, 3, 4, 0, 99, 97];
// function copySorted(arr) {
//   return arr.slice().sort((a, b) => a - b);
// }
// let sorted = copySorted(arr);
// console.log(arr);
// console.log(sorted);

//7
// const getKeysCount = (obj) => Object.keys(obj).length;

// console.log(getKeysCount({ name: "John" }));
// console.log(getKeysCount({ name: "John", age: 22 }));
// console.log(getKeysCount({ name: "John", salary: null }));
