let clicked = false;

function handleResponse(answer) {
  if (clicked) return;
  clicked = true;

  const question = document.querySelector('p');
  const buttonsDiv = question.nextElementSibling; // grabs the buttons div right after <p>

  // Clear old buttons
  buttonsDiv.innerHTML = '';

  // Change text based on answer
  if (answer === 'Yes') {
    question.innerText = "Yay, get ready for a date soon!";
  } else {
    question.innerText = "Oof. No worries.";
  }

  // Send to backend
  fetch('<form action="https://formsubmit.co/thenividjoshi@gmail.com" method="POST" />', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ response: answer })
})

  .then(res => console.log('Initial response sent!'))
  .catch(err => console.error('Error:', err));
}
