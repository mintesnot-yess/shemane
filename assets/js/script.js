let Aside = document.querySelector('aside');
let Main = document.querySelector('main');
let AlbemArt = document.querySelector('.albem-art');
let MusicTitle = document.querySelector('.music-title');
let MusicPlayDev = document.querySelector('.MusicPlayDiv');
let DocumentTitle = document.querySelector('title');

// musics and albem art file arrey list
let musicFiles = [
    {
        title: "Song 1",
        file: "assets/music/music1.mp3",
        albumArt: "assets/images/two.png"
    },
    {
        title: "Song 2",
        file: "assets/music/music2.mp3",
        albumArt: "assets/images/tworappers.png"
    }, {
        title: "Song 3",
        file: "assets/music/music3.mp3",
        albumArt: "assets/images/twowide.png"
    }
];

Aside.style.width = "0%"

function toggleSideNav() {
    if (Aside.style.width == "0%") {
        Aside.style.width = '100%';
        Aside.style.opacity = 1;
        Main.style.scale = 0.9;
    } else {
        Aside.style.width = "0%";
        Aside.style.opacity = 0;
        Main.style.scale = 1;
    }
}


let currentSongIndex = 0;
let audio = new Audio();
AlbemArt.style.background = `url(${musicFiles[0].albumArt}) center/cover`;
MusicTitle.innerHTML = musicFiles[0].title;
audio.src = musicFiles[currentSongIndex].file;



function playMusic() {
    if (audio.paused) {
        audio.play();
        DocumentTitle.innerHTML = 'Shemane ⏺ ' + musicFiles[0].title;

    }
    else {
        audio.pause();
        DocumentTitle.innerHTML = 'Shemane';

    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % musicFiles.length;
    MusicTitle.innerHTML = musicFiles[currentSongIndex].title;
    audio.src = musicFiles[currentSongIndex].file;
    AlbemArt.style.background = `url(${musicFiles[currentSongIndex].albumArt})center/cover `;
    DocumentTitle.innerHTML = 'Shemane ⏺ ' + musicFiles[currentSongIndex].title;

    audio.play();
}
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + musicFiles.length) % musicFiles.length;
    playMusic();
}
audio.addEventListener('play', function () {
    MusicPlayDev.innerHTML = '<i class="fa-solid fa-pause"></i>';
})
audio.addEventListener('pause', function () {
    MusicPlayDev.innerHTML = '<i class="fa-solid fa-play"></i>';
})
