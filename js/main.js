// Burger
// const burger = document.getElementById('burger');

// const nav = document.querySelector('.nav-burger');

// burger.addEventListener("click", () => {
//     nav.classList.toggle('nav--active');
//     burger.classList.toggle('burger--active');
//     document.body.classList.toggle("stop-scroll");    
// });

//Swiper
const swiper = new Swiper('.swiper1', {
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

	const swiper1 = new Swiper('.swiper2', {
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


