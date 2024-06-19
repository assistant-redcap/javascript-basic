const names = ["조교행님", "실비", "나나"];

// forEach : 리턴 없음
names.forEach((name) => console.log(`${name} 안녕`));

// map : 리턴 있음
const newNames = names.map((name) => `${name} 안녕`);
console.log(newNames);