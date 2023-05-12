const articleButtom = document.querySelector('.article-buttom');
const articleCards = document.querySelector('.article-cards');

articleButtom.addEventListener('click', () => {
  if (articleCards.style.height === 'auto') {
    articleCards.style.height = '240px';
    articleButtom.style.transform = 'rotate(0deg)';
  } else {
    articleCards.style.height = 'auto';
    articleButtom.style.transform = 'rotate(180deg)';
  }
});
