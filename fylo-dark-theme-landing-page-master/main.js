let btn = document.querySelector('.hamburg');
let input = document.querySelector('input');
let form = document.querySelector('form');


//form error
form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value === '') {
    input.style.border = '1px solid red';
    input.placeholder = ' enter correct email'
  } else {
    input.style.border = 'none'
    input.value = ''
    input.placeholder = 'email sent'
  }
})
//nav animations
let open = false;
let tl = gsap.timeline()

//functions

let closeNav = () => {

  tl.to('.hamburg', {
    height: 16
  }).to(".main-nav-list", {
    height: 0,
    duration: .5
  })
  open = false;
}

let openNav = () => {


  tl.to('.hamburg', {
      height: 10,
      duration: .4
    })
    .to('.main-nav-list', {
      height: 'auto',
      duration: .5,
      ease: 'power'
    })
    .from('.main-nav-list li', {
      opacity: 0,
      duration: .8,
      y: 10,
      ease: 'power',
      skewY: 50,
      stagger: {
        amount: .5,
        each: .5,
        from: 2
      }
    })

  open = true;
}

btn.onclick = () => {

  if (open === false) {
    openNav()
  } else {

    closeNav()

  }
}
//scroll animations
//

let navli = document.querySelector('.main-nav-list')

navli.addEventListener('click', () => {
  if (window.innerWidth < 600) {

    closeNav()
  }
})