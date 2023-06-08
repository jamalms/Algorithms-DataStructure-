// function HousKeeper(yearsOfExperience, name, cleaningRepertoire) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.clean = function () {
//         alert("Cleaning in progress...");
//     }
// }

// var houskeeper1 = new HousKeeper(1, "Adam", ["bathroom", "lobby", "bedroom"]);

// houskeeper1.clean();

// calculator app
// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }

///////////////////////////////////////////

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked!");
// }

// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");
// });


//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      updateTextArea(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
  }
  

//Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  updateTextArea(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "d":
      var dO = new Audio("sounds/do.wav");
      dO.play();
      break;

    case "f":
      var re = new Audio("sounds/re.wav");
      re.play();
      break;

    case "g":
      var mi = new Audio("sounds/mi.wav");
      mi.play();
      break;

    case "h":
      var fa = new Audio("sounds/fa.wav");
      fa.play();
      break;

    case "j":
      var sol = new Audio("sounds/sol.wav");
      sol.play();
      break;

    case "k":
      var la = new Audio("sounds/la.wav");
      la.play();
      break;

    case "l":
      var si = new Audio("sounds/si.wav");
      si.play();
      break;

    default:
      // do nothing
      break;
  }
}


function record(audio) {
  audioChunks.push(audio);
}

function download() {
  const blob = new Blob(audioChunks.map(a => a.blob), { type: 'audio/ogg; codecs=opus' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = 'recording.ogg';
  a.href = url;
  a.click();
  audioChunks.length = 0;
}

document.getElementById('record-button').addEventListener('click', () => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        mediaRecorder.addEventListener("dataavailable", event => {
          audioChunks.push(event.data);
        });
        document.getElementById('download-button').addEventListener('click', download);
      });
  }
});

function updateTextArea(key) {
  var textArea = document.getElementById("textArea");
  var textAreaContent = textArea.value;
  textAreaContent += " " + key;
  textArea.value = textAreaContent.trim();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}


