  let clicked = false;

  function handleResponse(answer) {
  if (clicked) return;
  clicked = true;

  const question = document.querySelector('p');
  const buttonsDiv = document.querySelector('div div'); // selects the inner button container

  // Clear old buttons
  buttonsDiv.innerHTML = '';

  // Change text + show new options
  if (answer === 'Yes') {
    question.innerText = "Yay,get ready for a date soon!";
  } else {
    question.innerText = "Oof. No worries.";
  }

  fetch('https://your-backend-api.com/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ response: answer })
  })
  .then(res => console.log('Initial response sent!'))
  .catch(err => console.error('Error:', err));
}

