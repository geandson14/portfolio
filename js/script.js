$(function(){
    $('.mobile i').click(function(){
        listaMenu = $('.mobile nav');
        listaMenu.slideToggle();
        
    });

    $('header a').add('#serv a').add('.copyright a').add('.texto a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeignt = 0;
        $('html, body').animate({
            scrollTop: targetOffset - menuHeignt
        }, 500);
    });

    // $('#acao').click(function(){
    //     alert('ATENÇÃO! O formulario de contato não será enviado por limitação da github, entre em contato pelo o meu E-mail abaixo ou nas redes sociais.')
    // });

    var typed = new Typed(".typed", {
        strings: ["Sou desenvolvedor","Front-end", "Full stack"],
        smartBackspace: true,
        loopCount: Infinity,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        startDelay: 1000
    });
})

// const skills = document.querySelectorAll('.hab ul li');
// const descricao = document.querySelector('.desc');
// const sobreSkill = [
//     '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
//     '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
//     '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
//     '<p>Styled Components</p> <br> <p>É uma biblioteca (lib) que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.</p> <br>',
//     '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
//     '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
// ]

// skills.forEach((elemento, index)=>{
//     elemento.addEventListener('mouseout', (evento, elemento,) => {
//         descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
//     })
// });