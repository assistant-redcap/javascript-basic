// number array
const arr = [1, 2, 3];

console.log(arr);  // [1, 2, 3]
console.log(arr.length)  // 3

// 인덱스로 값에 접근
// 인덱스는 반드시 0부터 시작!
console.log(arr[0]);  // 1
console.log(arr[1]);  // 2
console.log(arr[2]);  // 3
console.log(arr[3]);  // undefined

// const 임에도 변경 가능
arr[1] = 999;
console.log(arr);  // [1, 999, 3]
// 그러나, 재선언은 안됨
arr = [9, 9, 9]  // error
