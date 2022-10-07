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

const keyMap = {
    "q": 2,
    "w": 3,
    "e": 4,
    "r": 5,
    "t": 6,
    "y": 8,
    "a": 10,
    "s": 11,
    "d": 15,
    "f": 16,
};

const padSwitch = document.querySelector(".switch");
const drumParent = document.querySelector(".drum-div");
const heading = document.querySelector("#title");
let naut = false;

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
    console.log('playing')
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


document.addEventListener("keypress", (event) => {
    const keySound = keyMap[event.key].toString();
    playSound(keySound);
});

/* 
#naut-head {
    color: violet;
}

#krater-head {
    color: orangered;
}

#krater-parent {
    background-image: url('./static/images/drumkit.png');
    -webkit-box-shadow: 0px 2px 15px 6px rgba(28, 185, 28, 0.71);
    box-shadow: 0px 2px 15px 6px rgba(37, 222, 37, 0.71);
}

#naut-parent {
    background-image: url('./static/images/etherscape.jpg')
    -webkit-box-shadow: 0px 2px 15px 6px blueviolet;
    box-shadow: 0px 2px 15px 6px blueviolet;
}

#naut-btn {
    background-color: rgb(24, 24, 24);
    background-color: 
      -webkit-box-shadow: 0px 5px 40px -4px blueviolet; 
        box-shadow: 0px 5px 40px -4px  blueviolet;

}

#krater-btn {
    background-color: orangered;
}




*/