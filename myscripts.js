
let scriptURL = 'https://script.google.com/macros/s/AKfycbyR49mXTZzEEqmmwRviRk_eDKMDq1-Z1vk5cpFcT42pVxfsJBGmBxMqx3E0_rHD_oIsMQ/exec';
let form = document.getElementById("PizdaJigurda");
let questionnaire = document.getElementById("Questionnaire");
let commonBeOurWorker = document.getElementById("commonBeOurWorker");


commonBeOurWorker.addEventListener('submit', e => {
	e.preventDefault()
	$('#modal-thanks').modal('show');

	fetch(scriptURL, { method: 'POST', body: new FormData(commonBeOurWorker)})
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message))
})


questionnaire.addEventListener('submit', e => {
	e.preventDefault()
	$('#modal-thanks').modal('show');
	fetch(scriptURL, { method: 'POST', body: new FormData(questionnaire)})
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
