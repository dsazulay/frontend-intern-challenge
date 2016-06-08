function encurtar() {
    var link = document.getElementById('link');
    link.value = 'http://chr.dc/xyzxyz';

    var botaoEncurtar = document.getElementById('encurtar');
    botaoEncurtar.style.display = 'none';

    var botaoCancelar = document.getElementById('cancelar');
    botaoCancelar.style.display = 'inline';

    var botaoCopiar = document.getElementById('copiar');
    botaoCopiar.style.display = 'inline';
}

function cancelar() {
    var link = document.getElementById('link');
    link.value = '';

    var botaoEncurtar = document.getElementById('encurtar');
    botaoEncurtar.style.display = 'inline';

    var botaoCancelar = document.getElementById('cancelar');
    botaoCancelar.style.display = 'none';

    var botaoCopiar = document.getElementById('copiar');
    botaoCopiar.style.display = 'none';
}

function copiar() {
}
