// handler for form submission
const handleSubmit = (event) => {
  event.preventDefault(); // prevent refresh and default form behavior

  const email = document.getElementsByName('email')[0];
  const fullName = document.getElementsByName('full-name')[0];
  const message = document.getElementsByName('message')[0];

  // reset form field error state
  email.style.borderColor = '#000000';
  email.addEventListener('focus', () => {
    email.style.outlineColor = '-webkit-focus-ring-color'
  })

  fullName.style.borderColor = '#000000';
  fullName.addEventListener('focus', () => {
    fullName.style.outlineColor = '-webkit-focus-ring-color'
  })

  // validate required fields
  const emailIsValid = email.value.length > 0;
  const fullNameIsValid = fullName.value.length > 0;

  if (!emailIsValid) {
    email.style.borderColor = '#FF0000';
    email.addEventListener('focus', () => {
      email.style.outlineColor = '#FF0000'
    })
  }

  if (!fullNameIsValid) {
    fullName.style.borderColor = '#FF0000';
    fullName.addEventListener('focus', () => {
      fullName.style.outlineColor = '#FF0000'
    })
  }

  if (!emailIsValid || !fullNameIsValid) {
    return;
  }

  // do something with with form data...

  // reset form field values
  email.value = '';
  fullName.value = '';
  message.value = '';

  // display submission confirmatiom
  const dialog = document.querySelector('dialog');
  dialog.style.display = 'flex';
}

// handler to close submission confirmation
const handleDialogClose = () => {
  const dialog = document.querySelector('dialog');
  dialog.style.display = 'none';
}

// add event listeners for buttons when document is ready
document.addEventListener('DOMContentLoaded', async () => {
  const submitButton = document.querySelector('#submit-form');
  submitButton.addEventListener('click', handleSubmit);

  const dialogClose = document.querySelector('#dialog-close');
  dialogClose.addEventListener('click', handleDialogClose);
});
