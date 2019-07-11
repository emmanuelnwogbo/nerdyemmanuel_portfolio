import './scss/main.scss';

window.onload = () => {
  document.getElementById('app').style.display = `block`;
}

const closePortfolio = document.getElementById('close-portfolio');
const openPortfolio = document.querySelectorAll(".open-portfolio");
const portfolio = document.getElementById('portfolio');

const projects = [
  {
    name: 'soundstr'
  },
  {
    name: 'cookBook'
  },
  {
    name: 'project3'
  },
  {
    name: 'project4'
  },
  {
    name: 'project4'
  },
];

const projectCardMarkUp = (project) => {
  return (
    `
      <div class='portfolio__card'>
        <figure>
          <img src='./imgs/test.jpg'/>
        </figure>
        <span>view</span>
      </div>
    `
  )
}

projects.forEach(project => {
  portfolio.insertAdjacentHTML('beforeend', projectCardMarkUp(project));
})



/*portfolio.addEventListener('click', function(e) {
  if (e.target.id === 'portfolio') {
    //this.style.display = 'none';
  }
})

openPortfolio.forEach(item => {
  item.addEventListener('click', function () {
    //portfolio.style.display = 'grid';
  })
})

closePortfolio.addEventListener('click', function() {
  //portfolio.style.display = 'none';
})*/