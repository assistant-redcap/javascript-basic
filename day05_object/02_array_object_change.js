const userInfo1 = [
  "조교행님",
  40,
  true,
  "서울시",
  "1q2w3e4r!",
  ["아빠", "엄마", "고양이"],
];

// 변경 가능
userInfo1[0] = "실비";
// 추가 가능
userInfo1.push("남자");

console.log(userInfo1);

const userInfo2 = {
  name: "조교행님",
  age: 40,
  // boolean 은 앞에 is 를 붙여줄때가 많다.
  isJob: true,
  address: "서울시",
  password: "1q2w3e4r!",
  family: ["아빠", "엄마", "고양이"],
};

// 변경 가능
userInfo2.age = 20;
// 추가 가능
userInfo2.gender = "남자";

console.log(userInfo2);