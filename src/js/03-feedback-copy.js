const formEls = document.querySelectorAll('form');

formEls.forEach(form => {
  form.addEventListener('input', onInputType);
});

formEls.addEventListener('submit', onFormSubmit);

const FEEDBACK_FORM = 'forms_data';
const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM)) || {};

function onInputType(evt) {
  evt.preventDefault();

  const inputName = evt.target.name;
  const inputValue = evt.target.value;

  formData[inputName] = inputValue;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function updateForm() {
  const savedForm = localStorage.getItem(FEEDBACK_FORM);
  const parsedForm = JSON.parse(savedForm);

  for (const [key, value] of Object.entries(formData)) {
    console.log(key);
    document.querySelector(`[name=${key}]`).value = value;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);

  updateForm();
}
