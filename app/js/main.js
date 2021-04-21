// fixed header
const headerTop = document.querySelector('.header__top');
const headerBottom = document.querySelector('.header__bottom');
const headerTopHeight = headerTop.offsetHeight;
const headerBottomHeight = headerBottom.offsetHeight;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= headerBottomHeight + headerTopHeight) {
    headerTop.classList.add('header__top--fixed');
    headerBottom.style.marginTop = `${headerTopHeight}`;
  } else {
    headerTop.classList.remove('header__top--fixed');
    headerBottom.style.marginTop = null;
  }
});



// select

const defaultSelect = () => {
  const element = document.querySelector('.level');
  const choices = new Choices(element);
}

defaultSelect();

// calc form price



//# sourceMappingURL=main.js.map
