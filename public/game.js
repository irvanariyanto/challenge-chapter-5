document
  .getElementById("player-batu")
  .addEventListener("click", function handleClick(event) {
    setPointerEvent("none");
    var playerChoice = "batu";
    running(playerChoice, event);
  });

document
  .getElementById("player-gunting")
  .addEventListener("click", function handleClick(event) {
    setPointerEvent("none");
    var playerChoice = "gunting";
    running(playerChoice, event);
  });

document
  .getElementById("player-kertas")
  .addEventListener("click", function handleClick(event) {
    setPointerEvent("none");
    var playerChoice = "kertas";
    running(playerChoice, event);
  });

document
  .getElementById("refresh-button")
  .addEventListener("click", function handleClick(event) {
    removeImgShadow();
    setPointerEvent("auto");
    setDefaultResult();
  });

function running(playerChoice, event) {
  event.target.classList.add("img-shadow");
  console.log(event);
  var comChoice = randomComChoice();
  logging("Player", playerChoice);
  logging("Com", comChoice);
  setComShadow(comChoice);
  var result = checkResult(playerChoice, comChoice);
  setResult(result);
}

function setDefaultResult() {
  document.getElementById("versus-text").style.display = "block";
  document.getElementById("result-box").style.display = "none";
}

function setResult(result) {
  document.getElementById("versus-text").style.display = "none";
  var resultBox = document.getElementById("result-box");
  resultBox.style.display = "block";
  resultBox.classList.add(
    result === "Draw" ? "result-box-draw" : "result-box-win"
  );
  var resultBox = (document.getElementById("result-text").textContent = result);
}

function removeImgShadow() {
  document.getElementById("player-batu").classList.remove("img-shadow");
  document.getElementById("player-gunting").classList.remove("img-shadow");
  document.getElementById("player-kertas").classList.remove("img-shadow");
  document.getElementById("com-batu").classList.remove("img-shadow");
  document.getElementById("com-gunting").classList.remove("img-shadow");
  document.getElementById("com-kertas").classList.remove("img-shadow");
}

function setPointerEvent(value) {
  document.getElementById("player-batu").style.pointerEvents = value;
  document.getElementById("player-gunting").style.pointerEvents = value;
  document.getElementById("player-kertas").style.pointerEvents = value;
}

function setComShadow(choice) {
  var element = document.getElementById("com-" + choice);
  element.classList.add("img-shadow");
}

function logging(player, choice) {
  console.log(player, " memilih : ", choice);
}

function randomComChoice() {
  var choice = ["batu", "gunting", "kertas"];
  var random = Math.floor(Math.random() * 3);
  return choice[random];
}

function checkResult(playerChoice, comChoice) {
  if (playerChoice === comChoice) {
    return "Draw";
  }
  if (playerChoice === "batu" && comChoice === "gunting") {
    return "Player 1 Win";
  } else if (playerChoice === "batu" && comChoice === "kertas") {
    return "Com Win";
  } else if (playerChoice === "gunting" && comChoice === "batu") {
    return "Com Win";
  } else if (playerChoice === "gunting" && comChoice === "kertas") {
    return "Player 1 Win";
  } else if (playerChoice === "kertas" && comChoice === "batu") {
    return "Player 1 Win";
  } else if (playerChoice === "kertas" && comChoice === "gunting") {
    return "Com Win";
  }
}
