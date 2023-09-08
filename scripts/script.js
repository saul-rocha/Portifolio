document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});


// JavaScript para mostrar/ocultar o botão de "Voltar ao Topo"
document.addEventListener('DOMContentLoaded', function () {
   const btnTop = document.getElementById('btn-top');

   window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
         btnTop.style.display = 'block';
      } else {
         btnTop.style.display = 'none';
      }
   });

   btnTop.addEventListener('click', function () {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave até o topo
   });
});


// JavaScript para mostrar a barra de navegação no topo da tela quando o mouse passar por cima
document.addEventListener('DOMContentLoaded', function () {
   const header = document.querySelector('header');
   const navbar = document.querySelector('nav');
   const siteContent = document.getElementById('site-content');

   siteContent.addEventListener('mousemove', function (e) {
      const mouseY = e.clientY;
      if (mouseY < 60) {
         header.style.top = '0';
         navbar.style.top = '0';
      } else {
         navbar.style.top = '-60px';
         header.style.top = '-60px';
      }
   });
});
