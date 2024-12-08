numeroLivros = 0
livros = document.getElementById("livros")

$.get("https://apilivraria.onrender.com/livros", function (data) {
    numeroLivros = data["numberOfElements"]
    for(i = 0; i < numeroLivros; i++) {
        card = document.createElement("div")
        body = document.createElement("div")
        titulo = document.createElement("h5")
        p = document.createElement("p")
        $(card).attr("class", "card")
        $(body).attr("class", "card-body")
        $(titulo).attr("class", "card-title")
        $(p).attr("class", "card-text")
        $(titulo).html(data["content"][i]["nome"])
        $(p).html("Id: " + data["content"][i]["id"] + "\nAutor: " + data["content"][i]["autor"] + "\nTema: " + data["content"][i]["tema"])
        body.append(titulo)
        body.append(p)
        card.append(body)
        livros.append(card)
    }
});
