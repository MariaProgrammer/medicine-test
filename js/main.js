// Burger
// const burger = document.getElementById('burger');

// const nav = document.querySelector('.nav-burger');

// burger.addEventListener("click", () => {
//     nav.classList.toggle('nav--active');
//     burger.classList.toggle('burger--active');
//     document.body.classList.toggle("stop-scroll");    
// });

//Swiper
const swiper = new Swiper('.mySwiper1', {
	slidesPerView: 3,
	spaceBetween: 30,	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination:	{
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewhell: true,
	keyboard: true,
	});


