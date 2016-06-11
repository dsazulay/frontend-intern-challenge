var clipboard

function encurtar() {
    var link = document.getElementById('link');
    link.value = 'http://chr.dc/xyzxyz';
    link.style.color = 'white';

    var botaoEncurtar = document.getElementById('encurtar');
    botaoEncurtar.style.display = 'none';

    var botaoCancelar = document.getElementById('cancelar');
    botaoCancelar.style.display = 'inline';

    var botaoCopiar = document.getElementById('copiar');
    botaoCopiar.style.display = 'inline';

    clipboard = new Clipboard('#copiar');
}

function cancelar() {
    var link = document.getElementById('link');
    link.value = '';
    link.style.color = '#FD6F29';

    var botaoEncurtar = document.getElementById('encurtar');
    botaoEncurtar.style.display = 'inline';

    var botaoCancelar = document.getElementById('cancelar');
    botaoCancelar.style.display = 'none';

    clipboard.destroy();
    var botaoCopiar = document.getElementById('copiar');
    botaoCopiar.style.display = 'none';
}
