$(function(){
    $('.mobile i').click(function(){
        listaMenu = $('.mobile nav');
        listaMenu.slideToggle();
        
    });

    $('header a').add('#serv a').add('.copyright a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeignt = 0;
        $('html, body').animate({
            scrollTop: targetOffset - menuHeignt
        }, 500);
    });

    $('#acao').click(function(){
        alert('ATENÇÃO! O formulario de contato não será enviado por limitação da github, entre em contato pelo o meu E-mail abaixo ou nas redes sociais.')
    });

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