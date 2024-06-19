const names = ["조교행님", "실비", "나나"];

function introduce(name) {
  console.log(`${name} 안녕`);
}

// 잘못된 사용
names.forEach(introduce());
// 올바른 사용
names.forEach(introduce);