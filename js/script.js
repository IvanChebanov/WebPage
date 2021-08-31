const musicBtn = document.querySelector('.music-btn');
const musicLine = document.querySelector('.bgm-line');
const audioPlayer = document.querySelector('audio');

musicBtn.onclick = function() {
	if(musicLine.hidden){
		musicLine.hidden = false;
		audioPlayer.pause();	
	}else{
		musicLine.hidden = true;
		audioPlayer.play();
	}
};
// console.log(musicBtn);
// console.log(musicLine);
// console.log(audioPlayer);