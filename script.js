const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight/ 5 * 4

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
// Fungsi untuk membuka popup
function openPopup(popupId) {
    // Tampilkan popup
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';

    // Tambahkan efek blur pada body
    document.body.classList.add('blur');
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';

    // Hentikan semua audio dan reset ke awal
    for (let i = 0; i < audioPlayers.length; i++) {
        audioPlayers[i].pause();            // Hentikan audio
        audioPlayers[i].currentTime = 0;    // Reset audio ke awal
        soundButtons[i].classList.remove('playing'); // Reset status tombol
    }
}

const audioPlayers = [
    document.getElementById('audioPlayer1'),
    document.getElementById('audioPlayer2'),
    document.getElementById('audioPlayer3'),
    document.getElementById('audioPlayer4'),
    document.getElementById('audioPlayer5'),
    document.getElementById('audioPlayer6'),
    document.getElementById('audioPlayer7')
];

const soundButtons = [
    document.getElementById('soundButton1'),
    document.getElementById('soundButton2'),
    document.getElementById('soundButton3'),
    document.getElementById('soundButton4'),
    document.getElementById('soundButton5'),
    document.getElementById('soundButton6'),
    document.getElementById('soundButton7')
];

// Fungsi untuk memutar/menghentikan audio berdasarkan tombol yang diklik
function toggleSound(buttonNumber) {
    // Pause semua audio yang lain
    for (let i = 0; i < audioPlayers.length; i++) {
        if (i !== buttonNumber - 1) {
            audioPlayers[i].pause();
            soundButtons[i].classList.remove('playing');
        }
    }

    // Toggle play/pause untuk audio yang dipilih
    const currentAudio = audioPlayers[buttonNumber - 1];
    const currentButton = soundButtons[buttonNumber - 1];

    if (currentAudio.paused) {
        currentAudio.play();
        currentButton.classList.add('playing');
    } else {
        currentAudio.pause();
        currentButton.classList.remove('playing');
    }
}

// Reset tombol ketika audio selesai
audioPlayers.forEach((audio, index) => {
    audio.addEventListener('ended', () => {
        soundButtons[index].classList.remove('playing');
    });
});