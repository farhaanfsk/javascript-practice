'use strict';

const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (var i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

function hide() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
closeModal.addEventListener('click', hide);
overlay.addEventListener('click', hide);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    hide();
  }
});
