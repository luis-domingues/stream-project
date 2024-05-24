//CSS Responsivo para a section_1 - Feito pelo aluno: Luís Paulo Domingues
const imgContainer = document.querySelector('.img-container');
let startX = 0;
let currentX = 0;

imgContainer.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

imgContainer.addEventListener('touchmove', (event) => {
  event.preventDefault();
  currentX = event.touches[0].clientX;
  const deltaX = currentX - startX;
  const maxScroll = imgContainer.scrollWidth - imgContainer.clientWidth;
  const newScrollLeft = Math.max(0, Math.min(maxScroll, imgContainer.scrollLeft + deltaX));
  imgContainer.scrollLeft = newScrollLeft;
  startX = currentX;
});
