import './scss/main.scss';

window.onload = () => {
  document.getElementById('app').style.display = `block`;
}

const closePortfolio = document.getElementById('close-portfolio');
const openPortfolio = document.querySelectorAll(".open-portfolio");
const portfolio = document.getElementById('portfolio');

portfolio.addEventListener('click', function(e) {
  if (e.target.id === 'portfolio') {
    this.style.display = 'none';
  }
})

openPortfolio.forEach(item => {
  item.addEventListener('click', function () {
    portfolio.style.display = 'grid';
  })
})

closePortfolio.addEventListener('click', function() {
  portfolio.style.display = 'none';
})