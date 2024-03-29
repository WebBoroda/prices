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

function toggle(which,group){
  let counter=1;
  let checkbox = document.getElementById(group + counter);

  while(checkbox){
    if (counter == which) {

      }else{
        checkbox.checked=false;
      }
        counter++;
        checkbox=document.getElementById(group+counter);
  }
};

function total() {
	let sum = 0;
	let checboxServices = document.getElementsByClassName('tabl-row__input');

	for( let i=0; i < checboxServices.length; i++) {
  if(checboxServices[i].checked) sum += parseFloat (checboxServices[i].value);
  }
	document.form2.totalInput.value = sum.toFixed(2);
};


