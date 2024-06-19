const data = [
  {
    id: 3237,
    name: "rock",
    imgSrc: "./imgs/rock.png",
  },
  {
    id: 5426,
    name: "scissors",
    imgSrc: "./imgs/scissors.png",
  },
  {
    id: 9987,
    name: "paper",
    imgSrc: "./imgs/paper.png",
  },
];

const comSelImg = document.querySelector(".com-sel-img");
const usrSelImgs = document.querySelectorAll(".usr-sel-ul img");
const resultContainer = document.querySelector(".result-container");
const resultMessage = document.querySelector(".result-message");
const oneMoreBtn = document.querySelector(".one-more-btn");

oneMoreBtn.addEventListener("click", () => {
  location.reload();
});

let comSelIdx;

function checkWinner(userChoice, comChoice) {
  if (userChoice === comChoice) {
    // 비김
    return 0;
  } else if (
    // 이김
    (userChoice === "rock" && comChoice === "scissors") ||
    (userChoice === "scissors" && comChoice === "paper") ||
    (userChoice === "paper" && comChoice === "rock")
  ) {
    return 1;
  } else {
    // 짐
    return -1;
  }
}

function clickHandler(e) {
  const userChoice = e.target.className;
  const comChoice = data[comSelIdx].name;
  const ret = checkWinner(userChoice, comChoice);
  clearInterval(intervalId);
  if (ret === 1) {
    resultMessage.textContent = "이겼다!";
  } else if (ret === -1) {
    resultMessage.textContent = "졌다!";
  } else {
    resultMessage.textContent = "비겼다!";
  }
  usrSelImgs.forEach((img) => {
    img.removeEventListener("click", clickHandler);
  });
  resultContainer.style.display = "flex";
}

usrSelImgs.forEach((img, idx) => {
  img.src = data[idx].imgSrc;
  img.classList.add(data[idx].name);
  img.addEventListener("click", clickHandler);
});

comSelIdx = 0;
comSelImg.src = data[comSelIdx].imgSrc;

const intervalId = setInterval(() => {
  comSelIdx++;
  if (comSelIdx === 3) {
    comSelIdx = 0;
  }
  comSelImg.src = data[comSelIdx].imgSrc;
}, 100);
