//button more

const articleButton = document.querySelector('.article__button')
const articleCardMore = document.querySelectorAll('.article__card--more')

articleButton.addEventListener('click', ()=> {
	articleCardMore.forEach((item)=> {
		item.classList.toggle('active');
	});
		
});