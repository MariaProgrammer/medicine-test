// Burger
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerCross = document.querySelector('.burger-menu__cross');
const services = document.getElementById('services');
const hoverMenu = document.querySelector('.hover-menu');
const hoverMenuCross = document.querySelector('.hover-menu__cross');
const burgerButton = document.querySelector('.burger__button');

const footerPopup = document.querySelector('.footer__popup');
const footerPopupButton = document.querySelector('.footer__popup-button');
const aboutClinica = document.querySelector('.about__clinica');

const footerMenuCross = document.querySelector('.footer-menu__cross');
const footerBurgerMenu = document.querySelector('.footer__burger-menu');
const footerBurger = document.querySelector('.footer-burger__button');







burger.addEventListener("click", () => {
	burgerMenu.classList.toggle('active');
	burgerButton.classList.toggle('active');    
	burger.classList.toggle('active');    
  // document.body.classList.toggle("stop-scroll");    
});

footerBurger.addEventListener("click", () => {
	console.log('done');
	
	footerBurgerMenu.classList.toggle('active');
	footerBurger.classList.toggle('active');
	footerBurger.classList.toggle('hover');
	    
	// burger.classList.toggle('active');    
  // document.body.classList.toggle("stop-scroll");    
});
footerMenuCross.addEventListener("click", () => {
	footerBurgerMenu.classList.remove('active');
	footerBurger.classList.remove('active');
	footerBurger.classList.remove('hover'); 
});

burgerCross.addEventListener("click", () => {
	burgerMenu.classList.remove('active');
	burger.classList.remove('active');  
	burgerButton.classList.remove('active');  
});
hoverMenuCross.addEventListener("click", () => {
	hoverMenu.classList.remove('active'); 
});
services.addEventListener("mouseover", () => {
	hoverMenu.classList.add('active');    
  // document.body.classList.toggle("stop-scroll");    
});


hoverMenu.addEventListener("mouseover", () => {
	hoverMenu.classList.add('active');    
  // document.body.classList.toggle("stop-scroll");    
});
hoverMenuCross.addEventListener("click", () => {	
	hoverMenu.classList.remove('active');
	    
  // document.body.classList.toggle("stop-scroll");    
});



//Popup
footerPopupButton.addEventListener('click', () => {
	footerPopup.remove('active');
	location.reload()
})

	footerPopup.addEventListener("mouseover", () => {	
		footerPopup.classList.add('active');		
	});	

	aboutClinica.addEventListener("mouseover", () => {	
		footerPopup.classList.add('active');
		
});



//кнопка отправки

// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');
// const thanksButton = document.querySelector('.thanks__popup-button');
// const thanksPopup = document.querySelector('.thanks__popup');
// // console.log(heroButton);
// // console.log(btn1, btn2);

// thanksPopup.addEventListener('click', () => {
// 	thanksPopup.classList.remove('active');
// });
// function addClass(event) {
// 	event.preventDefault();	
// 	thanksPopup.classList.add('active');
// }
// btn1.addEventListener('click', addClass, false);
// btn2.addEventListener('click', addClass, false);

// const question = document.querySelector('.question');
// console.log(question);

// const scroll = question.scrollTop;
// console.log(scroll);







//Swiper
const swiper1 = new Swiper('.swiper1', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 12
    },
    // when window width is >= 640px
    960: {
      slidesPerView: 3,
      spaceBetween: 12
    },
		1280: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
	// pagination:	{
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
	mousewhell: true,
	keyboard: true,
	});

	const swiper2 = new Swiper('.swiper2', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,	
		navigation: {
			nextEl: '.swiper-button-next2',
			prevEl: '.swiper-button-prev2',
		},
		
		mousewhell: true,
		keyboard: true,
		});

		const swiper3 = new Swiper('.swiper3', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 4,
			spaceBetween: 30,	
			navigation: {	
				nextEl: '.swiper-button-next3',			
				prevEl: '.swiper-button-prev3',
				
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				// when window width is >= 480px
				768: {
					slidesPerView: 2,
					spaceBetween: 32
				},
				// when window width is >= 640px
				960: {
					slidesPerView: 3,
					spaceBetween: 32
				},
				1279: {
					slidesPerView: 4,
					spaceBetween: 30
				}
			},
			// pagination:	{
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			mousewhell: true,
			keyboard: true,
			});
		const swiper4 = new Swiper('.swiper4', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 3,
			spaceBetween: 54,	
			// navigation: {	
			// 	nextEl: '.swiper-button-next3',			
			// 	prevEl: '.swiper-button-prev3',
				
			// },
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				// when window width is >= 480px
				768: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				// when window width is >= 640px
				960: {
					slidesPerView: 3,
					spaceBetween: 30
				},
				
			},
			// pagination:	{
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
			mousewhell: true,
			keyboard: true,
			});

			