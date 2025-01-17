let Aside = document.querySelector('aside');
let Main = document.querySelector('main');
let AlbemArt = document.querySelector('.albem-art');
let MusicTitle = document.querySelector('.music-title');
let MusicPlayDev = document.querySelector('.MusicPlayDiv');
let DocumentTitle = document.querySelector('title');
let SongList = document.querySelector('.song-list');
let PlayList = document.querySelector('.play-list');



// musics and albem art file arrey list
let musicFiles = [
    {
        title: "Hotline Bling",
        file: "assets/music/music1.mp3",
        albumArt: "assets/images/two.png"
    },
    {
        title: "Toosie Slide",
        file: "assets/music/music2.mp3",
        albumArt: "assets/images/tworappers.png"
    }, {
        title: "Wake up ",
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



// music 


musicFiles.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="song-info">
        <div class="img">
          <div class="play-button" data-index="${index}">
            <span><i class="fa fa-play"></i></span>
          </div>
          <img src="${song.albumArt}" alt="" class="album-art">
        </div>
        <p class="title">${song.title}</p>
      </div>
    `;
    SongList.appendChild(li);
});

const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const index = parseInt(button.getAttribute('data-index'));
        const song = musicFiles[index];

        if (audio.src === song.file && audio.paused) {
            audio.play();
            button.querySelector('i').classList.remove('fa-play');
            button.querySelector('i').classList.add('fa-pause');
        } else {
            audio.src = song.file;
            audio.play();
            playButtons.forEach((btn) => {
                btn.querySelector('i').classList.remove('fa-pause');
                btn.querySelector('i').classList.add('fa-play');
            });
            button.querySelector('i').classList.remove('fa-play');
            button.querySelector('i').classList.add('fa-pause');
        }

        MusicTitle.innerHTML = song.title;
        AlbemArt.style.background = `url(${song.albumArt})center/cover `;
        DocumentTitle.innerHTML = 'Shemane ⏺ ' + song.title;
    });
});

audio.addEventListener('pause', () => {
    playButtons.forEach((button) => {
        if (button.querySelector('i').classList.contains('fa-pause')) {
            button.querySelector('i').classList.remove('fa-pause');
            button.querySelector('i').classList.add('fa-play');
        }
    });
});

PlayList.style.display = "none";
function PlayListToggle() {
    if (PlayList.style.display == "none") {
        PlayList.style.opacity = '0';
        PlayList.style.display = 'flex';

        setInterval(() => {
            PlayList.style.opacity = '1';

        })



    } else {
        PlayList.style.display = "none";



    }

}

PlayList.addEventListener('blur', () => {
    PlayList.style.display = 'none';
});