var clipboard
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var cliquesTotais = 35713517

function encurtar() {
    cliquesTotais += 1;
    var hits = document.getElementById('numero-hits');
    hits.innerHTML = cliquesTotais.toFixed().replace(/(\d)(?=(\d{3})+$)/g, '$1.');

    var link = document.getElementById('link');
    link.value = 'http://chr.dc/xyzxyz';
    link.style.color = 'white';

    var botaoEncurtar = document.getElementById('encurtar');
    botaoEncurtar.style.display = 'none';

    var botaoCancelar = document.getElementById('cancelar');
    botaoCancelar.style.display = 'inline';

    var botaoCopiar = document.getElementById('copiar');
    botaoCopiar.style.display = 'inline';
    if (isSafari) {
        botaoCopiar.value = 'SELECIONAR';
    }

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
