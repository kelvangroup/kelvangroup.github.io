var playButton = document.getElementById("play_button");
var video;
var myText = document.getElementById("preVideoText");;
window.onload = function() {
	video = document.getElementById("videoPlayer");
};
let scriptURL = 'https://script.google.com/macros/s/AKfycbyR49mXTZzEEqmmwRviRk_eDKMDq1-Z1vk5cpFcT42pVxfsJBGmBxMqx3E0_rHD_oIsMQ/exec';
let form = document.getElementById("PizdaJigurda");
let questionnaire = document.getElementById("Questionnaire");
let commonBeOurWorker = document.getElementById("commonBeOurWorker");


commonBeOurWorker.addEventListener('submit', e => {
	e.preventDefault()
	$('#modal-thanks').modal('show');

	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message))
})


questionnaire.addEventListener('submit', e => {
	e.preventDefault()
	$('#modal-thanks').modal('show');
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message))
})

form.addEventListener('submit', e => {
	e.preventDefault()
	$('#exampleModal').modal('hide');
	$('#modal-thanks').modal('show');

	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message))
})


$(document).ready(function () {
            $('.collapse')
                .on('shown.bs.collapse', function() {
                    $(this)
                        .parent()
                        .find(".fa-chevron-down")
                        .removeClass("fa-chevron-down")
                        .addClass("fa-chevron-up");
                })
                .on('hidden.bs.collapse', function() {
                    $(this)
                        .parent()
                        .find(".fa-chevron-up")
                        .removeClass("fa-chevron-up")
                        .addClass("fa-chevron-down");
                });
        });



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
