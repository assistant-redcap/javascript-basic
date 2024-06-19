const title = document.querySelector(".title");
const colorBtn = document.querySelector(".color-btn");

// 잘 가져왔는지 확인
console.dir(title);
console.dir(colorBtn);

colorBtn.addEventListener("click", () => {
  console.log("버튼동작");
  title.style.color = "blue";
});

// 이벤트 객체를 정확히 보고 싶은 경우
// colorBtn.addEventListener("click", (event) => {
//   console.log(event);
// });
