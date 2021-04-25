function setText(event) {
  const e = event.target.value;
  const memeText = document.querySelector('#meme-text');

  memeText.innerText = e;
}

function getInput() {
  const input = document.querySelector('#text-input');

  input.addEventListener('input', setText);
}

window.onload = () => {
  getInput();
};
