// Menu Mobile

const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li a');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('menu-ativo');
  menu.classList.toggle('menu-ativo');
});

links.forEach(item => item.addEventListener('click', () => {
  hamburguer.classList.remove('menu-ativo');
  menu.classList.remove('menu-ativo');
}));

// Scrollreveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
});

scrollReveal.reveal(`.textos-intro h1, .textos-intro p, .textos-intro a button, .introducao .scroll, .servicos h2, .boxs .box, .sobre h2, .sobre > p, .boxs-sobre .box-sobre, .placas img, .lista-placas h2, .modelos, .btn-lista-placas`, { interval: 100 })

