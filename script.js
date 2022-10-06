const soundPaths = {
    2: "./static/audio/ride.wav",
    3: "./static/audio/floor-tom.wav",
    4: "./static/audio/high-tom.wav",
    5: "./static/audio/crash.wav",
    6: "./static/audio/hi-hat.wav",
    8: "./static/audio/medium-tom.wav",
    10: "./static/audio/bass-drum.wav",
    11: "./static/audio/snare.wav",
    15: "./static/audio/bass-drum.wav",
    16: "./static/audio/bass-drum.wav",
};

const drumParent = document.querySelector(".drum-div")

for (let i = 1; i <= 18; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "pad";
    newDiv.id = `${i}`;
    drumParent.appendChild(newDiv);
}

const playSound = (sound) => {
    const sounds = Object.keys(soundPaths);
    if (sounds.includes(sound)) {
        let drum = new Audio();
        drum.src = soundPaths[sound];
        drum.play();
    };
};

const drumZones = document.querySelectorAll(".pad")

drumZones.forEach((drumZone) => {
    drumZone.addEventListener("click", () => {
        playSound(drumZone.id)
    })
}
)