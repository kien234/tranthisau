const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const addSongForm = document.getElementById('add-song-form');
const songUrlInput = document.getElementById('song-url');

const songs = [
    "https://cdn.filestackcontent.com/OVaqzfjQMKvLcDrkiDOi",
    "https://cdn.filestackcontent.com/EFnoZLjdQA6YX5vVeDfQ",
    "https://cdn.filestackcontent.com/Maam3voaR22ZRzm1Y3tN",
    "https://cdn.filestackcontent.com/xklNr9PTC28bhhKGuy2g",
    "https://cdn.filestackcontent.com/DLCjxByQAeJTGZiYuc6u",
    "https://cdn.filestackcontent.com/surqq0RB6W51JXEekzRw",
    "https://cdn.filestackcontent.com/58ScG3l4QhGKUoeg6YYs",
    "https://cdn.filestackcontent.com/ys4rKHouQYGL6KWXbDBL",
    "https://cdn.filestackcontent.com/iub0d6oSTOy1rxmBhOIB",
    "https://cdn.filestackcontent.com/q8U1XjCvTxeqnxk5wNbM",
    "https://cdn.filestackcontent.com/7MuuB6TaQluCfbG7hOvu",
    "https://cdn.filestackcontent.com/v6MeJx2WQQ6kFa20VCOI",
    "https://cdn.filestackcontent.com/vWx6XqyRRSR1cr9nAoTs",
    "https://cdn.filestackcontent.com/I3Krbmy3Q6mCo8xKQDi5",
    "https://cdn.filestackcontent.com/LTlOgz7xRvSCU3Mov3zM",
    "https://cdn.filestackcontent.com/0a2rWmxuQzy9xdBgVusP",
    "https://cdn.filestackcontent.com/ZIO6PYlPTAmQNLQlAeMq",
    "https://cdn.filestackcontent.com/9gjTNnFLTbSr2fThf6pO",
    "https://cdn.filestackcontent.com/sjTQJjQPS6HCOjAeOqjQ",
    "https://cdn.filestackcontent.com/fDd1yfAVTI6yxg7U7QM5",
    "https://cdn.filestackcontent.com/numOXWWKQYms4t2kduBJ",
    "https://cdn.filestackcontent.com/XVLJub4fRX8osZmYcmSs",
    "https://cdn.filestackcontent.com/pwTpFl3URuNVKJMwozCT",
    "https://cdn.filestackcontent.com/UinqCKVyStiAOD1pD8wK",
    "https://cdn.filestackcontent.com/p8elvM8dSbSfyScg3Eb0",
    "https://cdn.filestackcontent.com/rtJpALSN2FDMHOLYPxwl",
    "https://cdn.filestackcontent.com/cMeLjaMgTeWSalSWwsxt",
    "https://cdn.filestackcontent.com/0Bmfg9Q6RN2g4dCROJ9R",
    "https://cdn.filestackcontent.com/WDCJqvsTwmsvPHJ0wdQo",
    "https://cdn.filestackcontent.com/UNfyqYRDTUKVG55WZH5l",
    "https://cdn.filestackcontent.com/8SzPiROtSqSLYqoSXANW",
    "https://cdn.filestackcontent.com/5haNEvRpKJVUEoHqHN8A",
    "https://cdn.filestackcontent.com/lEnjD5YYQFmScFhzIroH",
    "https://cdn.filestackcontent.com/KWOhaAQSwOCHyA0c6En4",
    "https://cdn.filestackcontent.com/KclMDysHRyTkYXRImFzD",
    "https://cdn.filestackcontent.com/ubhp5XTxQ2yoEelmJIQF",
    "https://cdn.filestackcontent.com/b7zsBDHRoSRbnIGPROe7",
    "https://cdn.filestackcontent.com/mIRJbAKnRq6h28eTVyjs",
    "https://cdn.filestackcontent.com/3VLAv8hTPa9V7cLUIn3f",
    "https://cdn.filestackcontent.com/f3VTHvKuSBaFd2JsSaWQ",
    "https://cdn.filestackcontent.com/bCVaeh7TSsdLpMuSgK6S",
    "https://cdn.filestackcontent.com/aG5rJ3brSyTSiVksyLL5",
    "https://cdn.filestackcontent.com/9UAhicK2Qn6Z3JT4blO2",
    "https://cdn.filestackcontent.com/gfPn8KETEuo245hZdboC",
    "https://cdn.filestackcontent.com/bUjurIgzTi6x4ZPAICtL",
    "https://cdn.filestackcontent.com/jslGtLiKTuKiAQnCoUeS",
    "https://cdn.filestackcontent.com/6NvDZKfRla46zE2tnbsZ",
    "https://cdn.filestackcontent.com/VpkDnZZCQ7yO10TM529E",
    "https://cdn.filestackcontent.com/1sQXglYMTLSMG6y1h4Lq",
    "https://cdn.filestackcontent.com/791CPPi4RCy9lLqOvZry",
    "https://cdn.filestackcontent.com/lCLGfKsNQwWojZ9Lqm1b",
    "https://cdn.filestackcontent.com/ITbpZ0imTIKAl9Vtslgg",
    "https://cdn.filestackcontent.com/wElYd3qhSWie0aiBpBuI",
    "https://cdn.filestackcontent.com/GDL1ZTTGeQizNSkM4UXg",
    "https://cdn.filestackcontent.com/cBaMZ7nQ46cc1IIctZ9A",
    "https://cdn.filestackcontent.com/809X2gSSfqIouVS8eepA",
    "https://cdn.filestackcontent.com/ORTyDjPfTw6a43HiCV7A",
    "https://cdn.filestackcontent.com/gWPQS1uERPmCv8e0fFTa",
    "https://cdn.filestackcontent.com/TIwK1VB4SN2G8lfrJIng",
    "https://cdn.filestackcontent.com/9d3AibbESfCH1IBPrjsI",
    "https://cdn.filestackcontent.com/IddtW8TvTn62tR54DpD7",
    "https://cdn.filestackcontent.com/vdGzJkaZTVeM3QCS1eHD",
    "https://cdn.filestackcontent.com/ccn3wa1eRryY1HmUPCmg",
    "https://cdn.filestackcontent.com/OINGZEtNRWyTORgXf3BM",
    "https://cdn.filestackcontent.com/L4GcUou9RO2zk4L0see0",
    "https://cdn.filestackcontent.com/lvdvMi5SDmorYfDQTEAe",
    "https://cdn.filestackcontent.com/6fC9amzkQni2BEnG45b6",
    "https://cdn.filestackcontent.com/65IhdkDKSPWkFoDrRpKp"
];


// Hiển thị danh sách phát
function renderPlaylist() {
    playlist.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `Bài Nghe ${index + 1}`;
        li.onclick = () => playSong(song);
        playlist.appendChild(li);
    });
}

// Phát bài nghe
function playSong(url) {
    audioSource.src = url;
    audioPlayer.load();
    audioPlayer.play();
}

// Thêm bài nghe mới vào danh sách phát
addSongForm.onsubmit = (event) => {
    event.preventDefault();
    const songUrl = songUrlInput.value.trim();
    if (songUrl) {
        songs.push(songUrl);
        renderPlaylist();
        songUrlInput.value = ''; // Xóa input sau khi thêm
    }
};

// Ban đầu, render danh sách phát
renderPlaylist();
