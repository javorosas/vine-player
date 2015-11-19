var video = document.getElementById("mainVideo");

var playButton = document.getElementById("playButton");
var loopButton = document.getElementById("loopButton");
var fullscreenButton = document.getElementById("fullscreenButton");

var isPlaying = false;
var isLooped = false;

video.requestFullscreen =
  video.requestFullscreen ||
  video.msRequestFullscreen ||
  video.mozRequestFullScreen ||
  video.webkitRequestFullscreen;

video.onended = function(e) {
  if (!isLooped) {
    pauseVideo();
  }
};

playButton.onclick = function () {
  if (isPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
};

function playVideo() {
  isPlaying = true;
  playButton.innerHTML = "Pause";
  video.play();
}

function pauseVideo () {
  isPlaying = false;
  playButton.innerHTML = "Play";
  video.pause();
}

loopButton.onclick = function () {
  isLooped = !isLooped;
  video.loop = isLooped;
  loopButton.innerHTML = isLooped ? "Loop: on" : "Loop: off";
};

fullscreenButton.onclick = function () {
  video.requestFullscreen();
};
