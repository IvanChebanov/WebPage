
const musicBtn = document.querySelector('.music-btn');
const musicLine = document.querySelector('.bgm-line');
const audioPlayer = document.querySelector('audio');
musicBtn.onclick = function() {
	if(musicLine.style.visibility === "hidden"){
		musicLine.style.visibility = "visible";
		audioPlayer.pause();	
	}else{
		musicLine.style.visibility = "hidden";
		audioPlayer.play();
	}
};
console.log(musicBtn);
console.log(musicLine);
console.log(audioPlayer);


/* TEST SCRIPT */