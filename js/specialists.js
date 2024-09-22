const specialistWindow = document.querySelector('.specialist-window');
const specialistWindow2 = document.querySelector('.specialist-window2');
const specialistWindow3 = document.querySelector('.specialist-window3');
const specialistWindowCross = document.querySelector('.specialist-window__cross');
const specialistWindowCross2 = document.querySelector('.specialist-window__cross2');
const specialistWindowCross3 = document.querySelector('.specialist-window__cross3');


const specialistButtons = document.querySelectorAll('.krainov-btn');
const specialistButtons2 = document.querySelectorAll('.karacheva-btn');
const specialistButtons3 = document.querySelectorAll('.nikolaeva-btn');


const openModal = (triggerSelector, modalDataSelector) => {
  // const trigger = document.querySelectorAll(triggerSelector)
  // console.log(trigger);
  
  // const modal = document.querySelector(modalDataSelector)
  if (!triggerSelector || !modalDataSelector) return
  triggerSelector.forEach(b => b.addEventListener('click', closeParentBlock));
  
  
  function closeParentBlock(e) {
    e.preventDefault()
    modalDataSelector.classList.add('active')
  }
}
openModal(specialistButtons, specialistWindow);
openModal(specialistButtons2, specialistWindow2);
openModal(specialistButtons3, specialistWindow3);

specialistWindowCross.addEventListener('click', () => {
	specialistWindow.classList.remove('active');
});
specialistWindowCross2.addEventListener('click', () => {
	specialistWindow2.classList.remove('active');
});
specialistWindowCross3.addEventListener('click', () => {
	specialistWindow3.classList.remove('active');
});


const swiper5 = new Swiper('.swiper5', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,	
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // pagination:	{
  // 	el: '.swiper-pagination',
  // 	clickable: true,
  // },
  mousewhell: true,
  keyboard: true,
  });
const swiper6 = new Swiper('.swiper6', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,	
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // pagination:	{
  // 	el: '.swiper-pagination',
  // 	clickable: true,
  // },
  mousewhell: true,
  keyboard: true,
  });
const swiper7 = new Swiper('.swiper7', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,	
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // pagination:	{
  // 	el: '.swiper-pagination',
  // 	clickable: true,
  // },
  mousewhell: true,
  keyboard: true,
  });
