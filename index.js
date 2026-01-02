const fs = require("fs");
const path = require("path");

const mainFolder = path.join(__dirname, "music");

const musicData = {
  "Ariana Grande": [
    "7 rings.mp3", "Supernatural.mp3", "Side to Side.mp3", "One Last Time.mp3", "34+35.mp3"
  ],
  "Bruno Mars": [
    "Grenade.mp3", "Talking to the Moon.mp3", "Locked out Heaven.mp3", "Die With a Smile.mp3", "Just the Way You are.mp3"
  ],
  "Bring Me the Horizon": [
    "Drown.mp3", "Kingslayer.mp3", "Sleepwalking.mp3", "Follow You.mp3", "DArkSide.mp3"
  ],
  "Linkin Park": [
    "Crawling.mp3", "Numb.mp3", "Heavy is a Crown.mp3", "Emptiness Machine.mp3", "In the End.mp3"
  ],
  "Olivia Dean": [
    "Dive.mp3", "Man I Need.mp3", "Lady Lady.mp3", "So Easy (To Fall in Love).mp3", "A Couple Minutes.mp3"
  ]
};

if (!fs.existsSync(mainFolder)) {
  fs.mkdirSync(mainFolder);
}

for (const artist in musicData) {
  const artistPath = path.join(mainFolder, artist);

  if (!fs.existsSync(artistPath)) {
    fs.mkdirSync(artistPath);
  }

  musicData[artist].forEach((song) => {
    const songPath = path.join(artistPath, `${song}`);

    if (!fs.existsSync(songPath)) {
      fs.writeFileSync(songPath, "");
    }
  });
}
