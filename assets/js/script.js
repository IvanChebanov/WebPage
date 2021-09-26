'use strict'
//--------------------------------BGM BUTTON----------------------------------------
const musicBtn = document.querySelector('.header__bgm-btn');
const musicLine = document.querySelector('.line');
const audioPlayer = document.querySelector('.header__bgm-audio');

musicBtn.onclick = function () {
	if (musicLine.hidden) {
		musicLine.hidden = false;
		audioPlayer.pause();
	} else {
		musicLine.hidden = true;
		audioPlayer.play();
	}
};
//---------------------------------------------------------------------------------
const keys = document.querySelectorAll('.keys');
const noteAudio = document.querySelectorAll('.note-audio');
const startBtn = document.querySelector('.generate-note');
const repeatBtn = document.querySelector('.repeat-note');

const msg = document.querySelector('.message-note');

let tempNote = randomNote();

startBtn.addEventListener('click', () => generateNote());
repeatBtn.addEventListener('click', () => repeatNote());

keys.forEach(key => {
	key.addEventListener('mousedown', () => {
		key.classList.toggle('active');
	});
	key.addEventListener('mouseout', () => {
		key.classList.remove('active');
	});
	key.addEventListener('mouseup', () => {
		key.classList.remove('active');
	});
	key.addEventListener('click', () => checkNote(key));
});
function randomNote(){
	return Math.floor(Math.random()*12);
}
function generateNote(){
	msg.innerHTML = "";
	noteAudio.currentTime = 0;
	tempNote = randomNote();
	noteAudio[tempNote].play();

	console.log("gen ===");
	console.log(keys.item(tempNote));
}
function repeatNote(){
	noteAudio.currentTime = 0;
	noteAudio[tempNote].play();
}
function checkNote(key){
	if(key === keys.item(tempNote)){
		msg.innerHTML = "correct";
		msg.style.color = "green";
	}else{
		msg.innerHTML = "incorrect";
		msg.style.color = "red";
	}

	console.log("pressed key ===");
	console.log(key);
	//key.classList.remove('active');
}


	

