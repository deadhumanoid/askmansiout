let clicked = false;

function handleResponse(answer) {
  if (clicked) return;
  clicked = true;

  const question = document.querySelector('p');
  const buttonsDiv = question.nextElementSibling;

  // Clear the buttons
  buttonsDiv.innerHTML = '';

  // Update question text
  if (answer === 'Yes') {
    question.innerText = "Yay, get ready for a date soon!";
  } else {
    question.innerText = "Oof. No worries.";
  }

  // Submit answer to FormSubmit
  document.getElementById('answer-input').value = answer;
  document.getElementById('response-form').submit();
}
