window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');

    if(window.scrollY > 50){ //Se o usuário rolar mais de 50 pixel mudar a cor de fundo do nav
        header.classList.add('scrolled')
    }
    else{ //Se for menos que 50 pixels remover o fundo novamente 
        header.classList.remove('scrolled');
    }
});
