let Aside = document.querySelector('aside');
let Main = document.querySelector('main');
let AlbemArt = document.querySelector('.albem-art');
let ArtistTitle = document.querySelector('.music-artist');
let MusicTitle = document.querySelector('.music-title');

let MusicPlayDev = document.querySelector('.MusicPlayDiv');
let DocumentTitle = document.querySelector('title');
let SongList = document.querySelector('.song-list');
let PlayList = document.querySelector('.play-list');
let AboutContainer = document.querySelector('.about-container')
let BlogContainer = document.querySelector('.blog-container')
let ContactContainer = document.querySelector('.contact-container')



// musics and albem art file arrey list
let musicFiles = [
    {
        artist: "drak",
        title: "Hotline Bling",
        file: "assets/music/music1.mp3",
        albumArt: "assets/images/two.png"
    },
    {
        artist: "drak",
        title: "Toosie Slide",
        file: "assets/music/music2.mp3",
        albumArt: "assets/images/tworappers.png"
    }, {
        artist: "overseas",
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
ArtistTitle.innerHTML = musicFiles[0].artist;



audio.src = musicFiles[currentSongIndex].file;



function playMusic() {
    if (audio.paused) {
        audio.play();
        DocumentTitle.innerHTML = 'Shemane ⏺ ' + musicFiles[0].title;
        playButtons[0].querySelector('i').classList.remove('fa-play');
        playButtons[0].querySelector('i').classList.add('fa-pause');

    }
    else {
        audio.pause();
        DocumentTitle.innerHTML = 'Shemane';

    }
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

let playButtons = document.querySelectorAll('.play-button');

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
        ArtistTitle.innerHTML = song.artist;

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

function nextSong() {
    playButtons[(currentSongIndex + musicFiles.length) % musicFiles.length].querySelector('i').classList.remove('fa-pause');
    playButtons[(currentSongIndex + musicFiles.length) % musicFiles.length].querySelector('i').classList.add('fa-play');
    currentSongIndex = (currentSongIndex + 1) % musicFiles.length;
    MusicTitle.innerHTML = musicFiles[currentSongIndex].title;
    ArtistTitle.innerHTML = musicFiles[currentSongIndex].artist;

    audio.src = musicFiles[currentSongIndex].file;
    AlbemArt.style.background = `url(${musicFiles[currentSongIndex].albumArt})center/cover `;
    DocumentTitle.innerHTML = 'Shemane ⏺ ' + musicFiles[currentSongIndex].title;
    playButtons[currentSongIndex].querySelector('i').classList.remove('fa-play');
    playButtons[currentSongIndex].querySelector('i').classList.add('fa-pause');
    audio.play();

}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + musicFiles.length) % musicFiles.length;
    playMusic();
}



let Container = document.querySelector('.container')
Container.style.scale = 1;

AboutContainer.style.display = "none";
function AboutToggle() {
    if (AboutContainer.style.display == "none") {
        AboutContainer.style.display = 'flex';
        toggleSideNav();

    }
    else {
        AboutContainer.style.display = "none";
        toggleSideNav();

    }
}

// if url is index.html#about-section run AboutToggle()
if (window.location.hash === '#about') {
    AboutToggle();
} else {
    AboutContainer.style.display = "none";
}



BlogContainer.style.display = "none";
function BlogToggle() {
    if (BlogContainer.style.display == "none") {
        BlogContainer.style.display = 'flex';
        toggleSideNav();

    }
    else {
        BlogContainer.style.display = "none";
        toggleSideNav();

    }
}

// if url is index.html#about-section run AboutToggle()
if (window.location.hash === '#blog') {
    BlogToggle();
} else {
    BlogContainer.style.display = "none";
}



ContactContainer.style.display = "none";
function ContactToggle() {
    if (ContactContainer.style.display == "none") {
        ContactContainer.style.display = 'flex';
        toggleSideNav();

    }
    else {
        ContactContainer.style.display = "none";
        toggleSideNav();

    }
}

// if url is index.html#about-section run AboutToggle()
if (window.location.hash === '#contact') {
    ContactToggle();
} else {
    ContactContainer.style.display = "none";
}


function sendEmail(e) {
    e.preventDefault();

    const subjectElement = document.getElementById("subject");
    const bodyElement = document.getElementById("body");
    const SubmitBtn = document.getElementById("submit");


    // Trim and validate input fields
    const subject = subjectElement.value.trim();
    const body = bodyElement.value.trim();

    if (!subject) {
        subjectElement.focus();
        return;
    }
    if (!body) {
        bodyElement.focus();
        return;
    }

    else { // Construct the mailto link
        SubmitBtn.innerHTML = 'Sending...';
        const email = "shemane@gmail.com";
        setTimeout(() => {
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            // window.location.href = mailtoLink; target black
            window.open(mailtoLink, '_blank');

        }, 10)

    }
}