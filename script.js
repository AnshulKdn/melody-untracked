const songName = document.getElementById("songName");
const artistName = document.getElementById("artistName");

const songLyrics = document.getElementById("songLyrics");
const songCover = document.getElementById("songCover");
const favoriteSongs = document.getElementById("favoriteSongs");
const songAudio = document.getElementById("songAudio");

const songs = [
    {
        name: "Finding Her",
        artist: "Kushagra",
        song: "Tu aata nahin<br>Sapno se jaata nahin<br>Mil jaaye, kya hi baat thi<br>Qaamil ho jaata wahin<br>Jo bhi ho raaz tera<br>Mujhko bataata nahin<br>Mil jaaye, kya hi baat thi<br>Qaamil ho jaata wahin",
        cover: "https://pagalnew.com/coverimages/Finding-Her-Kushagra-500-500.jpg",
        audio: "Finding Her Kushagra 320 Kbps.mp3",
    },
    {
        name: "Winning Speech",
        artist: "Karan Aujla",
        song: "Do-do ghode Magna ni, chaar G-Wagon'an ni<br>Utte nu main chhe-chhe inch chakkiyan<br>Time laggu mitne nu, saanu thalle sittne nu<br>21 vaari jor laa laye chhattiyan",
        cover: "https://i.pinimg.com/736x/c8/4f/f8/c84ff8133bccb6e67e560a6cee612460.jpg",
        audio: "Winning Speech Karan Aujla 320 Kbps.mp3",
    },
    {
        name: "Khayaal",
        artist: "Talwiinder",
        song: "Main Tera Hoya, Sambhal Le Tu Mainu Mainu<br>Main Tera Hoya, Sambhal Le Tu Mainu<br>Meri Na Hoyi, Khayal Aune Tenu Tenu<br>Main Tera Hoya, <br>Sambhal Le Tu Mainu MainuMain Tera Hoya, <br>Sambhal Le Tu Mainu Mainu",

        cover: "https://i.pinimg.com/736x/ef/f1/19/eff1199e04fbf42fd06b23d5825284d9.jpg",
        audio: "Khayaal Talwiinder 320 Kbps.mp3",
    },
    {
        name: "I Guess",
        artist: "KR$NA",
        song: "Yeh bol rahe kya? Sunai nahi de raha<br>Bro mat bol, main koi bhai nahi tera<br>Bola aayega time nahi mera<br>Ab top pe baitha main dikhai nahi de raha<br>Main bhai nahi tera, I caught a wave<br>Main Hi nahi keh raha<br>Bola aayega time nahi mera<br>Ab maang rahe time, main reply nahi de raha<br>Jab poochein, Yahan kaun hai best? It's me I guess",
        cover: "https://i.pinimg.com/736x/37/24/ea/3724eac51a17a2219013ff97985a499c.jpg",
        audio: "I Guess Krsna 320 Kbps.mp3",
    },
    {
        name: "Khairiyat",
        artist: "Pritam, Arijit Singh",
        song: "Khairiyat pucho, kabhi to kaifiyat pucho<br>Tumhare bin deewane ka kya haal hai<br>Dil mera dekho, na meri haisiyat pucho<br>Tere bin ek din jaise sau saal hai",
        cover: "https://cdn-images.dzcdn.net/images/cover/0e29ab4be2c461201d47a1853c933336/0x1900-000000-80-0-0.jpg",
        audio: "Khairiyat Chhichhore 320 Kbps.mp3",
    },
    {
        name: "Zaroor",
        artist: "Aparshakti Khurana",
        song: "Baithi kithe baddlan ton door honi ae,<br>Mere wangu oh vi majboor honi ae,<br>Sundi taan gall vi zaroor honi ae,<br>Sundi taan gall vi zaroor honi ae",
        cover: "https://c.saavncdn.com/522/Zaroor-Punjabi-2024-20240528201611-500x500.jpg",
        audio: "Zaroor Aparshakti Khurana 320 Kbps.mp3",
    },
    {
        name: "Ram Ram",
        artist: "MC Square",
        song: "Main hoon seedha sa chhora,<br> Karu gaam te belong<br>Shehar ki chori meri le le Ram Ram<br>Teri khatar main kar doon<br> subah shaam tere naam<br>Shehar ki chhori meri le le<br>Le le Ram Ram<br>Meri le le Ram Ram<br>Le le Ram Ram",
        cover: "https://preview.redd.it/mc-square-appreciation-post-resonate-wild-with-him-as-a-v0-eqqnsxhaslja1.jpg?auto=webp&s=88b215257e49f3cd7442754ba3dee04dbd11ace2",
        audio: "Ram ram (Hindi) - MC Square 320 Kbps.mp3",
    },

    {
        name: "Into Your Arms",
        artist: "Witt Lowry, Ava Max",
        song: "Flashbacks to backroads drivin' back <br>to my side of state<br>I know I need to tell you, <br>I care before it's too late<br>Before someone steps to the plate, <br>before you decide not to wait<br>Before you decide not to chase, <br>then you call me up",
        cover: "https://c.saavncdn.com/710/Into-Your-Arms-Unknown-2022-20220601004823-500x500.jpg",
        audio: "Into-Your-Arms-Slowed-Reverb.mp3",
    },
    {
        name: "Haseen",
        artist: "Talwiinder",
        song: "Tere ishq da jaam haseen ae<br>Subha haseen meri shaam haseen ae<br>Eh be-matlabi zindagi<br>Jado di tere naam haseen ae",
        cover: "https://cdn-images.dzcdn.net/images/cover/383c04b57972a0f53f591fba807853ed/0x1900-000000-80-0-0.jpg",
        audio: "Haseen Talwiinder 320 Kbps.mp3",
    },
    {
        name: "Blue Eyes",
        artist: "Honey Singh",
        song: "Blue Eyes Hypnotize Teri<br>Kardi Ae Mainu",
        cover: "https://c.saavncdn.com/279/Blue-Eyes-2013-500x500.jpg",
        audio: "Blue Eyes Yo Yo Honey Singh 320 Kbps.mp3",
    },
    {
        name: "Hothon Mein Aisi Baat",
        artist: "Lata Mangeshka",
        song: "Honthon me aisi baat,<br>mai dabaake chali aayi,<br>khul jaaye wohi baat toh,<br>duhaayi hai duhaayi.",
        cover: "https://s.saregama.tech/image/c/fw_485/8/39/c2/jewel-thief_1440x1440_1632901339.jpg",
        audio: "Hothon Mein Aisi Baat Remix Hip Hop Trap Mix(KoshalWorld.Com).mp3",
    },
    {
        name: "Jaadugar",
        artist: "Paradox",
        song: "Jaadugar<br>Aisa jaadu kar<br>Mujhe karle vash mein<br>Mujh pe tu kaabu kar<br>Uhmmm, jaadugar<br>Aisa jaadu kar<br>Mujhe karle vash mein<br>Mujh pe tu kaabu kar",
        cover: "https://c.saavncdn.com/231/Paradox-Hindi-2022-20220503042657-500x500.jpg",
        audio: "Jaadugar Hustle 2.0 320 Kbps.mp3",
    },
];

let currentSong = songs[0]; // initial state
let unusedSongs = [...songs];

function getSong() {
    if (unusedSongs.length === 0) {
        unusedSongs = [...songs];
    }
    const index = Math.floor(Math.random() * unusedSongs.length);
    const random = unusedSongs.splice(index, 1)[0];
    currentSong = random;
    songName.innerHTML = `${random.name}`;
    songLyrics.innerHTML = `"${random.song}"`;
    artistName.innerText = `${random.artist}`;
    songCover.src = random.cover;
    songAudio.src = random.audio;
}

function addToFavorites() {
    if (!currentSong) return;
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    
    const alreadyAdded = favorites.some(song =>
        song.name === currentSong.name && song.artist === currentSong.artist
    );

    if (alreadyAdded) {
        alert("This song is already in your favorites!");
        return;
    }
    
    
    favorites.push(currentSong);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    showFavorites();
}

function showFavorites() {
    favoriteSongs.innerHTML = "";
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
        const msg = document.createElement("p");
        msg.id = "noFavoritesMessage";
        msg.innerText = "No songs added yet 🎵";
        favoriteSongs.appendChild(msg);
        return;
    }

    favorites.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerText = `${item.name} - (${item.artist})`;

        const btn = document.createElement("button");
        btn.id = "cross-button";
        btn.innerText = `×`;
        btn.style.border = "none";
        btn.style.background = "transparent";
        btn.style.color = "white";
        btn.style.fontSize = "18px";
        btn.style.cursor = "pointer";


        btn.onclick = () => {
            // Remove song at index
            favorites.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            showFavorites(); // re-render
        };

        div.appendChild(btn);
        favoriteSongs.appendChild(div);
    });
}

function clearFavorites() {
    localStorage.removeItem("favorites");
    showFavorites();

}

window.onload = showFavorites;

const audioElement = document.getElementById("songAudio");
const coverImage = document.getElementById("songCover");

audioElement.addEventListener("play", () => {
    coverImage.classList.add("vibrate");
});

audioElement.addEventListener("pause", () => {
    coverImage.classList.remove("vibrate");
});

audioElement.addEventListener("ended", () => {
    coverImage.classList.remove("vibrate");
});
