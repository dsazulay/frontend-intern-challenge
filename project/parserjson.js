function carregaJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', 'https://raw.githubusercontent.com/chaordic/frontend-intern-challenge/master/Assets/urls.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

carregaJSON(function(data) {
    var jsonObj = JSON.parse(data);
    for (var i = 0; i < 5; i++) {
        var aNode = document.createElement('a');
        aNode.appendChild(document.createTextNode(jsonObj[i].shortUrl));
        aNode.href = jsonObj[i].shortUrl;

        var spanNode = document.createElement('span');
        spanNode.appendChild(document.createTextNode(jsonObj[i].hits));

        var liNode = document.createElement('li');
        liNode.appendChild(aNode);
        liNode.appendChild(spanNode);

        document.getElementById('top5-list').appendChild(liNode);
    }
});
