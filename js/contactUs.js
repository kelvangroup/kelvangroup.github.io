const URL = 'https://fimt33nnv5.execute-api.us-east-2.amazonaws.com';

const inputFields = ['name', 'email', 'subject', 'body'];
const makeDirtyElement = (HTMLElement) => HTMLElement.setAttribute('dirty', true);

inputFields.forEach((id) => {
  document.getElementById(id).addEventListener('blur', (e) => makeDirtyElement(e.target));
});

document.querySelector('#submit').addEventListener('click', () => {
  inputFields.forEach((id) => makeDirtyElement(document.getElementById(id)));
});

const form = document.getElementsByTagName('form')[0];
const submitButton = form.querySelector('button');
const spinner = submitButton.querySelector('span[role="status"]');

const sendMail = (fields) => fetch(URL, { body: JSON.stringify(fields), method: 'POST' });
// const sendMail = () => Promise.reject();

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = event.target.elements['name'].value;
  const email = event.target.elements['email'].value;
  const subject = event.target.elements['subject'].value;
  const body = event.target.elements['body'].value;

  setLoading(true);

  await sleep(2000);

  sendMail({
    name,
    email,
    subject,
    body,
  }).then(() => {
    alert('Thank you for reaching out! Someone from the Black Tower Group will be in touch shortly.');
    clearForm();
    setLoading(false);
  }).catch(() => {
    alert('Send Message Error.');
    setLoading(false);
  });
});

const clearForm = () => {
  inputFields.forEach((id) => document.getElementById(id).setAttribute('dirty', false));
  form.reset();
};

const setLoading = flag => {
  submitButton.disabled = flag;
  spinner.style.display = flag ? 'inherit' : 'none';
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   
