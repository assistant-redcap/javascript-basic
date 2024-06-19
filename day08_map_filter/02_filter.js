const users = [
  {
    id: 1,
    name: "조교행님",
    isJob: true,
  },
  {
    id: 2,
    name: "실비",
    isJob: true,
  },
  {
    id: 3,
    name: "나나",
    isJob: false,
  },
];

// filter : 리턴이 참이라면 새로운 배열에 추가
const jobUsers = users.filter((user) => user.isJob);
console.log(jobUsers);
