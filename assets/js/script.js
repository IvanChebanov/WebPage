//BGM BUTTON
const musicBtn = document.querySelector('.header__bgm-btn');
const musicLine = document.querySelector('.line');
const audioPlayer = document.querySelector('.header__bgm-audio');
//
const keys = document.querySelectorAll('.keys');

//BGM BUTTON
musicBtn.onclick = function () {
	if (musicLine.hidden) {
		musicLine.hidden = false;
		audioPlayer.pause();
	} else {
		musicLine.hidden = true;
		audioPlayer.play();
	}
};
//

keys.forEach(key => {
	key.addEventListener('click', () => playNote(key))
});

function playNote(key){
	const noteAudio = document.getElementById(key.dataset.note);
	noteAudio.play();
}