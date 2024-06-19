const pet = "고양이";

// 고양이나 강아지라면
if (pet === "고양이" || pet === "강아지") {
  console.log("환영합니다");
} else {
  console.log("죄송합니다");
}

const id = "jony123";
const pw = "qwer1234";

// 아이디, 패스워드 둘 다 빈 값이 아니라면
if (id && pw) {
  console.log("good");
} else {
  console.log("bad");
}
