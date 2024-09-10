// Burger
const burger = document.querySelector('.burger');

const burgerMenu = document.querySelector('.burger-menu');

const burgerCross = document.querySelector('.burger-menu__cross'); 

const services = document.getElementById('services');

const hoverMenu = document.querySelector('.hover-menu');

const hoverMenuCross = document.querySelector('.hover-menu__cross');

burger.addEventListener("click", () => {
	burgerMenu.classList.toggle('active');    
  // document.body.classList.toggle("stop-scroll");    
});
burgerCross.addEventListener("click", () => {
	burgerMenu.classList.remove('active'); 
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
hoverMenu.addEventListener("mouseout", () => {
	hoverMenu.classList.remove('active');    
  // document.body.classList.toggle("stop-scroll");    
});

//Popup

const btns = document.querySelectorAll('.btn');


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
		1279: {
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


