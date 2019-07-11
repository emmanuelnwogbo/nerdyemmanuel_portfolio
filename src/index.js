import './scss/main.scss';

window.onload = () => {
  document.getElementById('app').style.display = `block`;
}

const portfolio = document.getElementById('portfolio');
const form = document.getElementById('form');
const open_form = document.getElementById('open_form');
const close_form = document.getElementById('close-form');

Array.from(document.getElementsByClassName('social-btns')).forEach(btn => {
  btn.addEventListener('click', function() {
    if (this.id === 'codepen-link') {
      const win = window.open('https://codepen.io/nerdyemmanuel/', '_blank');
      win.focus();
    }

    if (this.id === 'github-link') {
      const win = window.open('https://github.com/emmanuelnwogbo/', '_blank');
      win.focus();
    }

    if (this.id === 'instagram-link') {
      const win = window.open('https://www.instagram.com/nerdyemmanuel/', '_blank');
      win.focus();
    }

    if (this.id === 'twitter-link') {
      const win = window.open('https://twitter.com/nerdyemmanuel', '_blank');
      win.focus();
    }
  })
})

open_form.addEventListener('click', () => {
  form.style.display = `block`;
});

close_form.addEventListener('click', () => {
  form.style.display = `none`;
});

form.addEventListener('click', function(e) {
  if (e.target.id === 'form') {
    this.style.display = 'none';
  }
})

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