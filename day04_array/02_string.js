// string 도 넓게 보면 배열이다.

const name1 = "jony";

console.log(name1); // jony
console.log(name1.length); // 4

console.log(name1[0]); // j
console.log(name1[1]); // o
console.log(name1[2]); // n
console.log(name1[3]); // y

// 그러나, 변하진 않음
name1[1] = "p";
console.log(name1);  // 여전히 jony
