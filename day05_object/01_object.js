const userInfo1 = [
  "조교행님",
  40,
  true,
  "서울시",
  "1q2w3e4r!",
  ["아빠", "엄마", "고양이"],
];

// 전체출력
console.log(userInfo1);
// 이름
console.log(userInfo1[0]);
// 나이
console.log(userInfo1[1]);
// 직업 (안 적어두면 모름)
console.log(userInfo1[2]);
// 엄마
console.log(userInfo1[5][1]);

const userInfo2 = {
  name: "조교행님",
  age: 40,
  // boolean 은 앞에 is 를 붙여줄때가 많다.
  isJob: true,
  address: "서울시",
  password: "1q2w3e4r!",
  family: ["아빠", "엄마", "고양이"],
};

// 전체출력
// 객체는 순서가 존재하지 않으므로, 출력시엔 아무렇게나 찍힌다.
console.log(userInfo2);
// 이름 (인덱스가 아니라, 점 . 으로 접근)
console.log(userInfo2.name);
// 나이
console.log(userInfo2.age);
// 직업 (훨씬 명확해짐)
console.log(userInfo2.isJob);
// 엄마
console.log(userInfo2.family[1]);
