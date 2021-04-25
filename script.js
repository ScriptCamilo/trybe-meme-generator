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

function buttonEvent(event) {
  const e = event.target;
  const memeContainer = document.querySelector('#meme-image-container');

  if (e.id === 'fire') {
    memeContainer.style.border = '3px dashed red';
  } else if (e.id === 'water') {
    memeContainer.style.border = '5px double blue';
  } else if (e.id === 'earth') {
    memeContainer.style.border = '6px groove green';
  }
}

function setMeme(event) {
  const e = event.target;
  const image = document.querySelector('#meme-image');

  image.src = e.attributes[1].textContent;
}

function getEvents() {
  const buttons = document.querySelectorAll('.avatar-button');
  const memes = document.querySelectorAll('.memes');

  buttons.forEach((button) => {
    button.addEventListener('click', buttonEvent);
  });
  memes.forEach((meme) => {
    meme.addEventListener('click', setMeme);
  });
}

window.onload = () => {
  getInput();
  getFiles();
  getEvents();
};
