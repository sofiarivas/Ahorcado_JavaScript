// Configurar palabras y abecedario. 



var lista_palabras = ["hola","adios","mañana","loco","devf","mundo","television","compu"];
var palabra_jugar = "";
var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
 "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Escoger palabra al azar, se generá al cargar la página.

function random_palabra(){

	var maxi = lista_palabras.length;
	var num = Math.random()*(maxi-0);
	var sinDecimales = Math.floor((num)+0);

	console.log("La palabra a jugar es " + lista_palabras[sinDecimales]);

	// Acá asigno la palabra que se jugará
	palabra_jugar = lista_palabras[sinDecimales];

return palabra_jugar;
}

// Funcion para dibujar. Al click en boton, se pueden visualizar las casillas.

function ready(){
	var boton = document.querySelector("#aventar_palabra");
	boton.addEventListener('click', function(event){

// LLamo mi función de random

			random_palabra();

// For loop para dibujar casillas según la palabra
		
		for (var i = 0; i <= palabra_jugar.length-1; i++) {
			// Creando casillas
			var palabra = document.createElement('span');
			// Asignas un Id o estilo
			palabra.setAttribute('id', 'espacio_letra' + i);
			// Poniendo texto a esos elementos que cree.
			palabra.innerText = "_";
			//Le digo donde agregar el elemento
			var area = document.querySelector('#palabra');
			//lo agrego
			area.appendChild(palabra);

		};


// Enseñar boton para adivinar. 

	document.getElementById("comenzar").style.display="inline-block"
	document.getElementById("aventar_palabra").style.display="none"
	var texto_inicial = document.createElement('h3');
	texto_inicial.innerText = "Tu palabra es: ";
	area = document.querySelector('#palabra_display');
	area.appendChild(texto_inicial);

	} );

//Funcionalidad del botón adivinar

	var boton_2 = document.querySelector("#comenzar");

	boton_2.addEventListener('click', function(event){
	
	// Variables contadores de aciertos y errores

	var contador_intentos = 0;
	var contador_acierto = 0;
	var letras_jugadas = [""];


	// Ciclo que comprueba palabras, hasta que agota aciertos.

		do{
		
		var acierto = false;


		var letra = prompt("¿Qué letra quieres jugar?");
			for (var i = 0; i <= palabra_jugar.length; i++) {

					// if (contador_intentos === 2 || contador_acierto === 2){
					// 	if(letra === letras_jugadas[i]){
					// 		alert("Esta palabra ya se jugo, escoge otra");
					// 	}
					// };




				if (letra === palabra_jugar[i]){
					acierto = true;
					contador_acierto = contador_acierto + 1;
					console.log("acierto");

					//Acá se dibuja cada letra al adivinar.

					var espacio_de_letra = document.getElementById('espacio_letra' + i)
					console.log(espacio_de_letra)
					espacio_de_letra.innerText = letra

					// agrega esa palabra a palabras jugadas

					letras_jugadas.push(letra);
					console.log(letras_jugadas);

					// compruebo para avisar si ya fue usada

				} else if (i === palabra_jugar.length-1 && acierto === false){

					// cambio mi imagen de calveras y de ahorcado

					console.log("incorrecto");

					contador_intentos = contador_intentos + 1 ;
					//Aumentar: calavertias[contador_intento];


					// Creando casillas
					var cruces = document.createElement('span');
					// Asignas un Id o estilo
					// Poniendo texto a esos elementos que cree.
					cruces.innerText = "X";
					//Le digo donde agregar el elemento
					var lugar = document.querySelector('#errores');
					//lo agrego
					lugar.appendChild(cruces);

					console.log(contador_intentos);


				}

			};


		} while(contador_intentos < 5 && contador_acierto <= palabra_jugar.length-1);

		// Acá se comprueba si perdio el jugador por agotar sus aciertos

			if (contador_intentos === 5){
			
			document.getElementById("aventar_palabra").style.display="inline-block"
			document.getElementById("comenzar").style.display="none"
			document.getElementById("gameover").style.display="inline-block"

			for (var i = 0; i < palabra_jugar.length; i++) {
					var espacio_de_letra = document.getElementById('espacio_letra' + i)
					document.getElementById('espacio_letra' + i).style.background = "black";
					espacio_de_letra.innerText = palabra_jugar[i];
			};
			
		// o gano al completar la palabra. 

		} else {

			var ganaste = document.createElement('h3');
			//perdiste.setAttribute('class', 'espacio_letra');
			ganaste.innerText = "Ganaste";
			//Le digo donde agregar el elemento
			var area = document.querySelector('#ganar_juego');
			//lo agrego
			area.appendChild(ganaste);
			document.getElementById("aventar_palabra").style.display="inline-block"
			document.getElementById("comenzar").style.display="none"
		}



	});
	
}

document.addEventListener('DOMContentLoaded', ready);
