Arrow Function

- ES5 & ES6 Function 문법 비교

````javascript
// ES5
function myName(name) {
  return name;
}

console.log(myName('hodol'));
````
````javascript
// ES6
const myName1 = (name) => { // 첫번째 ArrowFunction 표현
  return name;
}
console.log(myName1('momo'));

const myName2 = (name) => name; // 두번째 ArrowFunction 표현
console.log(myName2('dodo'));
````

기존 es5에서 `function`을 선언 하지만 es6부터 variable을 선언하고 `=>` 화살표 문법을 사용하여
코드를 직관적이고 읽기 쉽게 바뀌었다.

---

- `map`, `filter`, `reduce` 등의 내장 함수에도 **화살표 함수**를 표현할 수 있다.

####Map표현
````javascript
// ES5
const listName = ['민희', '영수', '철이'];

let arrName = listName.map(function(item) {
  return item;
});

console.log(arrName);
````

````javascript
// ES6
let arrName2 = listName.map((item) => item);
console.log(arrName2);
````
더욱 간결하고 깔끔하게 코드를 표현할 수 있다.