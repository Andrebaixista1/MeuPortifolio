const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    // document.querySelectorAll('.container').forEach(container => container.classList.toggle('dark'));
    // document.querySelectorAll('.left-data').forEach(container => container.classList.toggle('dark'));
    // document.querySelectorAll('.right-data').forEach(container => container.classList.toggle('dark'));
}   )

function leiaMais(){
    var pontos = document.getElementById('pontos');
    var maisTexto = document.getElementById('more');
    var btnleiamais = document.getElementById('more-details');

    if(pontos.style.display == 'none'){
        pontos.style.display = 'inline';
        maisTexto.style.display = 'none';
        btnleiamais.innerHTML = 'Ver mais';
    }else{
        pontos.style.display = 'none';
        maisTexto.style.display = 'block';
        btnleiamais.innerHTML = 'Ver menos';
    }

}