const namesFor = ["조교행님", "실비", "나나"];
for (let i = 0; i < namesFor.length; i++) {
  namesFor[i] = `${namesFor[i]} 안녕`;
}
// 원래 배열이 변경됨. immutable 아님
console.log(namesFor);

const names = ["조교행님", "실비", "나나"];
const newNames = names.map((name) => `${name} 안녕`);
// 원래 배열 변경 안됨. immutable
console.log(names);
console.log(newNames);
