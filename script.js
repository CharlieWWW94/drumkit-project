//File paths for audio files
const soundPaths = {
  2: "ride",
  3: "floor-tom",
  4: "high-tom",
  5: "crash",
  6: "hi-hat",
  8: "medium-tom",
  10: "bass-drum",
  11: "snare",
  15: "bass-drum",
  16: "bass-drum",
};

const padSwitch = document.querySelector(".switch");
let naut = false;
const drumParent = document.querySelector(".drum-div");
const heading = document.querySelector("#title");

//Populate page with drumpad grid elements
for (let i = 1; i <= 18; i++) {
  const newDiv = document.createElement("div");
  newDiv.className = "pad";
  newDiv.id = `${i}`;
  drumParent.appendChild(newDiv);
}

//Reproduces sound on click
const playSound = (sound) => {
  const sounds = Object.keys(soundPaths);
  if (sounds.includes(sound)) {
    let drum = new Audio();
    drum.src = naut ? `./static/audio/nautilus/${soundPaths[sound]}.wav` : `./static/audio/${soundPaths[sound]}.wav`
    drum.play();
  }
};

//Cycles through each pad, adding event listener by id
const drumZones = document.querySelectorAll(".pad");
drumZones.forEach((drumZone) => {
  drumZone.addEventListener("click", () => {
    playSound(drumZone.id);
  });
});

//use a selected class to do this.

padSwitch.addEventListener("click", () => {
    if (naut === false) {
    naut = true;
    heading.innerHTML = "Nautilus";
    heading.style.color = "violet";
    drumParent.style.boxShadow = "0px 5px 40px -4px  blueviolet"
    drumParent.style.backgroundImage = "url('./static/images/etherscape.jpg')";
    padSwitch.innerHTML = "KraterPad"
    padSwitch.style.boxShadow = "none";
    padSwitch.style.backgroundColor = "orangered";
    } else {
        naut = false;
        heading.innerHTML = "KraterPad";
        heading.style.color = "orangered";
        drumParent.style.boxShadow = "0px 5px 40px -4px  green"
        drumParent.style.backgroundImage = "url('./static/images/drumkit.png')";
        padSwitch.innerHTML = "Nautilus";
        padSwitch.style.boxShadow = "0px 5px 40px -4px  blueviolet";
        padSwitch.style.backgroundColor = "rgb(24, 24, 24)";
    }
});
