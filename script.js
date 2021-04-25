function setText(event) {
  const e = event.target.value;
  const memeText = document.querySelector('#meme-text');

  memeText.innerText = e;
}

function getInput() {
  const input = document.querySelector('#text-input');

  input.addEventListener('input', setText);
}

function setFile(event) {
  // source: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
  const file = event.target.files[0];
  const image = document.querySelector('#meme-image');

  image.file = file;

  const reader = new FileReader();
  reader.onload = ((aImg) => (e) => {
    const asyncImg = aImg;
    asyncImg.src = e.target.result;
  })(image);
  reader.readAsDataURL(file);
}

function getFiles() {
  const fileInput = document.querySelector('#meme-insert');

  fileInput.addEventListener('change', setFile);
}

window.onload = () => {
  getInput();
  getFiles();
};
