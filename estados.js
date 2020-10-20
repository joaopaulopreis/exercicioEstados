
var comboEstados = document.getElementById('comboEstados');
var mensagem = document.getElementById('mensagem');

    function mostrarFoto(a) {
        var element = document.getElementById("imagem");
        var element2 = document.getElementById("descricao");

        if (a == "pr") {
            element.innerHTML = "<br><img src='Parana.png'</img>";
            element2.innerHTML = "<h2>Paraná<h2>";
        }
    
        else if (a == "sc") {
            element.innerHTML = "<br><img src='SantaCatarina.png' width='245'</img>";
            element2.innerHTML = "<h2>Santa Catarina<h2>";
        }
        
        else if (a == "rs") {
            element.innerHTML = "<br><img src='RioGrandeDoSul.jpg' width='245'</img>";
            element2.innerHTML = "<h2>Rio Grande do Sul<h2>";
        }

        else if (a == "") {
            element.innerHTML = "";
            element2.innerHTML = "<h2>Nenhum estado selecionado<h2>";
        }
        
    }