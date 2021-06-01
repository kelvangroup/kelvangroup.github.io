var playButton = document.getElementById("play_button");
var video;
var myText = document.getElementById("preVideoText");;

window.onload = function() {
	video = document.getElementById("videoPlayer");
};
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();
    playButton.style.top = "70%";
    playButton.style.left = "44%";
    playButton.style.backgroundImage = "url(\"Images/pause.png\")";
    playButton.style.height = "50px";
    playButton.style.width = "50px";
		myText.style.visibility = "hidden";
  } else {
    // Pause the video
    video.pause();
    playButton.style.top = "40%";
    playButton.style.backgroundImage = "url(\"Images/Play_button.svg\")";
    playButton.style.height = "100px";
    playButton.style.width = "100px";
    playButton.style.left = "40%";

  }
});
