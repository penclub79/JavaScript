# JavaScript 변수선언
- ES5문법

var, let, const
---
####var

변수 선언마다 각각 다른 변수의 출력문을 볼 수 있다.
ex)
```javascript
var name = 'a'
console.log(name); // a 출력

var name = 'b'
console.log(name); // b 출력
```

- 단점으로 코드량이 많아지면 어디서 사용되는지 혼동된다.
---
####let

재할당 가능한 변수선언 방식이다.
````javascript
let fruit = 'apple';
console.log(fruit)

//error
let fruit = 'banana';
console.log(fruit)
// SyntaxError: Identifier 'fruit' has already been declared

//solution
fruit = 'banana';
console.log(fruit)
````
---
####const

immutable(불변)하는 변수선언 방식이다.
````javascript
const zoo = 'lion';
console.log(zoo);

// error(1)
const zoo = 'rabbit';
console.log(zoo);
// SyntaxError: Identifier 'zoo' has already been declared

// error(2)
zoo = 'rabbit';
console.log(zoo)
// TypeError: Assignment to constant variable.
````

**let, const는 immutable 차이!!**