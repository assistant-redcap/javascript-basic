function introduce1(name, age) {
  return `${name} 안녕, 나이는 ${age}세`;
}

const introduce2 = (name, age) => {
  return `${name} 안녕, 나이는 ${age}세`;
};

// 축약 버전
const introduce3 = (name, age) => `${name} 안녕, 나이는 ${age}세`;