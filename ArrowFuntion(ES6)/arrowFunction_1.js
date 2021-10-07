// [Function]
// ES5
function myName(name) {
  return name;
}

console.log(myName('hodol'));

// ES6
const myName1 = (name) => { // 첫번째 ArrowFunction 표현
  return name;
}
console.log(myName1('momo'));

const myName2 = (name) => name; // 두번째 ArrowFunction 표현
console.log(myName2('dodo'));

// Map
// ES5
const listName = ['민희', '영수', '철이'];

let arrName = listName.map(function(item) {
  return item;
});

console.log(arrName);

// ES6
let arrName2 = listName.map((item) => item);
console.log(arrName2);


