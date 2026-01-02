const fs = require('fs').promises
const path = require('path'); 

const isiMusic = [
    {
        namaArtis: "Ariana Grande",
        judulLagu: ["7 rings.mp3", "Supernatural.mp3", "Side to Side.mp3", "One Last Time.mp3", "34+35.mp3"]
    },
    {
        namaArtis: "Bruno Mars",
        judulLagu: ["Grenade.mp3", "Talking to the Moon.mp3", "Locked out Heaven.mp3", "Die With a Smile.mp3", "Just the Way You are.mp3"]
    },
    {
        namaArtis: "Bring Me the Horizon",
        judulLagu: ["Drown.mp3", "Kingslayer.mp3", "Sleepwalking.mp3", "Follow You.mp3", "DArkSide.mp3"]
    },
    {
        namaArtis: "Linkin Park",
        judulLagu: ["Crawling.mp3", "Numb.mp3", "Heavy is a Crown.mp3", "Emptiness Machine.mp3", "In the End.mp3"]
    },
    {
        namaArtis: "Olivia Dean",
        judulLagu: ["Dive.mp3", "Man I Need.mp3", "Lady Lady.mp3", "So Easy (To Fall in Love).mp3", "A Couple Minutes.mp3"]
    }
]

fs.mkdir("Music", () =>{})
isiMusic.forEach(
    hasilArtis => {
        fs.mkdir(`./Music/${isiMusic.namaArtis}`, () => {})
        hasilArtis.judulLagu.forEach(
            hasilLagu => fs.writeFile(`./Music/${hasilArtis.namaArtis}/${hasilLagu}`,"",()=>{}) 
        )
    }
)