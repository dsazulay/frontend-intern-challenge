function carregaJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', '../Assets/urls.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

carregaJSON(function(data) {
    var json = JSON.parse(data);
    json = json.sort(function(a, b) {
        return b.hits - a.hits;
    });
    for (var i = 0; i < 5; i++) {
        var aNode = document.createElement('a');
        aNode.appendChild(document.createTextNode(json[i].shortUrl));
        aNode.href = json[i].shortUrl;

        var spanNode = document.createElement('span');
        spanNode.className = 'texto-apoio';
        spanNode.appendChild(document.createTextNode(json[i].hits));

        var divNode = document.createElement('div');
        divNode.appendChild(aNode);
        divNode.appendChild(spanNode);
        divNode.className = 'top5-linha'

        document.getElementById('top5-lista').appendChild(divNode);
    }
});
