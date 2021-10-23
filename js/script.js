(function () {
    var menu = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
})();

$(function(){
    $('.mobile').click(function(){
        var listaMenu = $('.mobile ul');
        listaMenu.slideToggle();
    });

    $('header a').add('#serv a').add('.copyright a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeignt = $('header').innerHeight();
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