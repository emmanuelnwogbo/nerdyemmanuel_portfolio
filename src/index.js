import './scss/main.scss';
import validator from 'validator';

window.onload = () => {
  document.getElementById('app').style.display = `block`;
  document.getElementById('loadingscreen').style.opacity = '0';
  document.getElementById('loadingscreen').style.zIndex = '-1';
}

const portfolio = document.getElementById('portfolio');
const form = document.getElementById('form');
const open_form = document.getElementById('open_form');
const close_form = document.getElementById('close-form');
const formBody = document.getElementById('form--body');
const sendBtn = document.getElementById('send-message');
const sendingFeedback = document.getElementById('sending-feedback');

const inputs = Array.from(formBody.elements);

inputs.forEach(element => {
  element.addEventListener('click', function () {
    if (element.name === 'submit') {
      return;
    }

    element.previousElementSibling.style.display = 'none';
    element.style.borderBottom = '3px solid #fff';
  })
})

sendBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const inputs = Array.from(formBody.elements);
  
  const invalid = inputs.filter(element => validator.isEmpty(element.value));
  const invalidEmail = inputs.filter(element => element.name === 'email' && !validator.isEmail(element.value))
  console.log(invalid, invalidEmail);
  invalid.forEach(item => {
    item.previousElementSibling.style.display = 'block';
    item.style.borderBottom = '3px solid red';
  });

  invalidEmail.forEach(item => {
    item.previousElementSibling.style.display = 'block';
    item.style.borderBottom = '3px solid red';
  });

  if (invalid.length !== 0 || invalidEmail.length !== 0) {
    return;
  }

  sendingFeedback.style.display = `flex`;

  (function(){
    emailjs.init("user_kgcHGCFVpaUvP17ygNO6E");

    const templateParams = {
      to_name: 'Emmanuel',
      from_name: inputs.filter(element => element.name === 'name')[0].value,
      reply_to: inputs.filter(element => element.name === 'email')[0].value,
      message_html: `${inputs.filter(element => element.name === 'message')[0].value}. ${inputs.filter(element => element.name === 'email')[0].value}`
    }
    //console.log(emailjs);
    emailjs.send('default_service', 'template_r729KTtR', templateParams)
    .then(function(response) {
       //console.log('SUCCESS!', response.status, response.text);
       alert('message sent');
       inputs.forEach(input => {
         if (input.name === 'email' 
         || input.name === 'name' 
         || input.name === 'subject' 
         || input.name === 'message') {
           input.value = '';
         }
       })
       form.style.transform = 'scale(0) translateY(-100%)';
    }, function(error) {
        alert('there was an error sending the message, pls try again')
        sendingFeedback.style.display = `none`;
       //console.log('FAILED...', error);
    });
 })();
})

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
  form.style.transform = 'scale(1) translateY(0)';
  sendingFeedback.style.display = `none`;
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
    link: 'https://emmanuelnwogbo.github.io/linear-gradiar/',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/q_54/v1562883199/screenshot__1678__fmin1a.jpg'`,
    github_link: 'https://github.com/emmanuelnwogbo/linear-gradiar'
  },
  {
    link: 'https://emmanuelnwogbo.github.io/soundstr/',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/q_68/v1562883205/screenshot__1679__fl4qrh.jpg'`,
    github_link: 'https://github.com/emmanuelnwogbo/soundstr'
  },
  {
    link: 'https://blooming-hamlet-55601.herokuapp.com/',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/q_53/v1562883160/cook_prg5nd.jpg'`,
    github_link: 'https://github.com/emmanuelnwogbo/tourism-finder'
  },
  {
    link: 'https://emmanuelnwogbo.github.io/quotstr-frontend/',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/q_56/v1562883163/quoststr_yluex7.jpg'`,
    github_link: 'https://github.com/emmanuelnwogbo/quotstr-frontend'
  },
  {
    link: 'https://emmanuelnwogbo.github.io/soundreact2/',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/q_58/v1562883189/soundstr_kgwtg0.jpg'`,
    github_link: 'https://github.com/emmanuelnwogbo/soundreact2'
  },
  {
    link: 'https://emmanuelnwogbo.github.io/foodie/',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/q_55/v1562883167/foodstr_s1xjjz_afrgqt.jpg'`,
    github_link: 'https://github.com/emmanuelnwogbo/foodie'
  },
  {
    link: 'https://codepen.io/nerdyemmanuel/full/zePZjB',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/q_62/v1562883161/phone_interface_dxhx3z.jpg'`,
    github_link: 'https://codepen.io/nerdyemmanuel/pen/zePZjB'
  },
  {
    link: 'https://codepen.io/nerdyemmanuel/full/bZMgYW',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/v1562883185/music_player_hilszm.jpg'`,
    github_link: 'https://codepen.io/nerdyemmanuel/pen/bZMgYW'
  },
  {
    link: 'https://codepen.io/nerdyemmanuel/full/eXXGgR',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/q_62/v1562883159/guessinggame_dqkgqb.jpg'`,
    github_link: 'https://codepen.io/nerdyemmanuel/pen/eXXGgR'
  },
  {
    link: 'https://codepen.io/nerdyemmanuel/full/EGajyR',
    image_link: `'https://res.cloudinary.com/drah490l8/image/upload/v1562883198/ui_demo_xxvgs5.jpg'`,
    github_link: 'https://codepen.io/nerdyemmanuel/pen/EGajyR'
  },
];


const projectCardMarkUp = (project) => {
  return (
    `
      <div class='portfolio__card'>
        <figure>
          <img src=${project.image_link}/>
        </figure>
        <span id=${project.link} class='card-btns-open'>open</span>
        <span id=${project.github_link} class='card-btns-code'>code</span>
      </div>
    `
  )
}

projects.forEach(project => {
  portfolio.insertAdjacentHTML('beforeend', projectCardMarkUp(project));
});

Array.from(document.getElementsByClassName('card-btns-open')).forEach(btn => {
  btn.addEventListener('click', function() {
    const win = window.open(`${btn.id}`, '_blank');
    win.focus();
  })
})

Array.from(document.getElementsByClassName('card-btns-code')).forEach(btn => {
  btn.addEventListener('click', function() {
    const win = window.open(`${btn.id}`, '_blank');
    win.focus();
  })
})
