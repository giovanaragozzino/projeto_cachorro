$("#campo").keypress(function () {
    
    //alert('pressionou alguma tecla')
})

var distancia = 100
var distancia2 = 400

$("#campo").keydown(function(evento) {

	if (evento.which == 37) {
		// Situação em que o usuário pressionou a seta da esquerda:
		alert("Tem que andar para trás!");

        $("#cachorro").css("margin-left", "90px");
	}

	if (evento.which == 38) {
		// Situação em que o usuário pressionou a seta de cima:
        alert("Tem que subir!");

  
        $("#cachorro").css("margin-top", distancia2);
	}

	if (evento.which == 39) {
        // Situação em que o usuário pressionou a seta da direita:
        alert("Tem que andar para frente!")

        $("#cachorro").css("margin-left", distancia);

	}

	if (evento.which == 40) {
		// Situação em que o usuário pressionou a seta de baixo:
        alert("Tem que descer!");
        
        $("#cachorro").css("margin-top", "400px");
    }
    
    distancia = distancia + 50
    distancia2 = distancia2 - 50

});

$("#campo").keyup(function() {
    
    //alert('liberou alguma tecla')
})
