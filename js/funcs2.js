function solIngenieria() {
	console.clear();
	cantidadMovimientos = 0;
	//desactivar los botones
	btnMezclar.disabled = true;
	btnPorCapas.disabled = true;
	solucionEscrita.innerHTML = ""; //Vacia la lista de movimientos en notacion rubik
	//se eliminan movimientos sin sentido
	eliminarInecesarios();
	var i = moves.length-1;
	var solu, ayuda;
	//se comienza una animacion
	inter = setInterval(function(){
		solu = compSolucion();//se comprueba si se soluciono
		if(i >= 0 && solu === false) {//si no es así
			ayuda = parseInt(moves[i].name.match(/\d+/));
			switch(ayuda){//obtienes que movimiento se hizo
				case 1: ayuda = "L'";     break;
				case 2: ayuda = "R";     break;
				case 3: ayuda = "F'";     break;
				case 4: ayuda = "B";     break;
				case 5: ayuda = "U";     break;
				case 6: ayuda = "D'";     break;
				case 7: ayuda = "L";     break;
				case 8: ayuda = "R'";     break;
				case 9: ayuda = "F";     break;
				case 10: ayuda = "B'";    break;
				case 11: ayuda = "U'";    break;
				case 12: ayuda = "D";    break;
			}
			cantidadMovimientos++;
			escribeSolucion(moves[i](), ayuda);//escribes el movimiento realizado
			console.log(escribeConsola());
			i--;
			//redibujas
			draw();
		}
		else {//cuando ya se soluciono
			//habilitas los botones
			btnMezclar.disabled = false;			
			//habilitaciones extras
			pIrA.innerHTML = "Ir a movimiento: ";
			inputMov.style.display = "block";
			btnIr.style.display = "block";
			pMovTotales.innerHTML = "Movimientos realizados: " + cantidadMovimientos;
			//quitas la animacion
			clearInterval(inter);
			inter = null;
			//acortas la solucion en notacion rubik
			solucionEscrita.innerHTML = acortarSolucion(solucionEscrita.innerHTML);
		}
		},1000 / selector.value);	
}

function acortarSolucion(cadena){
	//Reemplazos para simular la mejor notacion rubik y mas corta
	//se utilizan expresiones regulares para facilitar reemplazos
	cadena = cadena.replace(/(F', ){3}/g, "F, ");
	cadena = cadena.replace(/(F, ){3}/g, "F', ");
	cadena = cadena.replace(/(F, ){2}/g, "2F, ");
	cadena = cadena.replace(/(F', ){2}/g, "2F, ");
	cadena = cadena.replace(/(B', ){3}/g, "B, ");
	cadena = cadena.replace(/(B, ){3}/g, "B', ");
	cadena = cadena.replace(/(B, ){2}/g, "2B, ");
	cadena = cadena.replace(/(B', ){2}/g, "2B, ");
	cadena = cadena.replace(/(U', ){3}/g, "U, ");
	cadena = cadena.replace(/(U, ){3}/g, "U', ");
	cadena = cadena.replace(/(U, ){2}/g, "2U, ");
	cadena = cadena.replace(/(U', ){2}/g, "2U, ");
	cadena = cadena.replace(/(D', ){3}/g, "D, ");
	cadena = cadena.replace(/(D, ){3}/g, "D', ");
	cadena = cadena.replace(/(D, ){2}/g, "2D, ");
	cadena = cadena.replace(/(D', ){2}/g, "2D, ");
	cadena = cadena.replace(/(L', ){3}/g, "L, ");
	cadena = cadena.replace(/(L, ){3}/g, "L', ");
	cadena = cadena.replace(/(L, ){2}/g, "2L, ");
	cadena = cadena.replace(/(L', ){2}/g, "2L, ");
	cadena = cadena.replace(/(R', ){3}/g, "R, ");
	cadena = cadena.replace(/(R, ){3}/g, "R', ");
	cadena = cadena.replace(/(R, ){2}/g, "2R, ");
	cadena = cadena.replace(/(R', ){2}/g, "2R, ");
	
	return cadena;
}

function eliminarInecesarios(){
	var i, aux, aux2, aux3, aux4;
	for(i=0;i<moves.length-1;i++) {
		aux = parseInt(moves[i].name.match(/\d+/));
		aux2 = parseInt(moves[i+1].name.match(/\d+/));
		if(i < moves.length-3){
			aux3 = parseInt(moves[i+2].name.match(/\d+/));
			aux4 = parseInt(moves[i+3].name.match(/\d+/));
		}
		if(aux === aux2 && aux === aux3 && aux === aux4 && moves[i+2] !== undefined){
			moves.splice(i,4);//Se eliminan vueltas completas
			i--;
		}
		else if(aux === aux2+6 || aux === aux2-6) {
			moves.splice(i,2);//Se eliminan movimientos contrarios seguidos
			if(i < moves.length-1)
				i--;
			else
				break;
		}
	}
}

function compSolucion(){ //regresa verdadero si el rubik esta solucionado
	var i, j, k,color;
	for(i = 0; i < 6; i++) {
		for(j = 0; j < 3; j++) {
			for(k = 0; k < 3; k++) {
				if(cubo[i][j][k] !== i) 
					return false;
			}
		}
	}
	return true;
}

function escribeSolucion(func, escrito){
	//agrega el movimeinto a la lista de movimeitnos realizados
	solucionEscrita.innerHTML += escrito + ", ";
}

function solHumana() {
	var i, aux, aux2;
	moves.length = 0;
	guardarColores();
	//se resulve la cruz superior
	piezasLaterales(paso1,ROJO,BLANCO);
	piezasLaterales(paso1,ROJO,VERDE);
	piezasLaterales(paso1,ROJO,AMARILLO);
	piezasLaterales(paso1,ROJO,AZUL);
	//se resulven las esquinas superiores
	piezasEsquinas(paso2, ROJO, BLANCO, VERDE);
	piezasEsquinas(paso2, ROJO, VERDE, AMARILLO);
	piezasEsquinas(paso2, ROJO, AMARILLO, AZUL);
	piezasEsquinas(paso2, ROJO, AZUL, BLANCO);
	//se resulve la parte de el medio
	piezasLaterales2(paso3, BLANCO, VERDE, 0);
	piezasLaterales2(paso3, VERDE, AMARILLO, 1);
	piezasLaterales2(paso3, AMARILLO, AZUL, 2);
	piezasLaterales2(paso3, AZUL, BLANCO, 3);
	//se resuelve la cruz inferior
	cruzInferior();
	
	do{
	aux2 = Math.floor(getRandom()*2+1);
	//se hacen movimeitnos seudo-aleatorios hasta arreglar las esquinas inferiores
	switch(aux2){
		case 1://R R F F R B R' F F R B' R
				movimiento[2](true);
				movimiento[2](true);
				movimiento[9](true);
				movimiento[9](true);
				movimiento[2](true);
				movimiento[4](true);
				movimiento[8](true);
				movimiento[9](true);
				movimiento[9](true);
				movimiento[2](true);
				movimiento[10](true);
				movimiento[2](true);
				break;
		case 2://L L B B L F L' B B L F' L
				movimiento[7](true);
				movimiento[7](true);
				movimiento[4](true);
				movimiento[4](true);
				movimiento[7](true);
				movimiento[9](true);
				movimiento[1](true);
				movimiento[4](true);
				movimiento[4](true);
				movimiento[7](true);
				movimiento[3](true);
				movimiento[7](true);
				break;
	}
	aux = 0;
	//saber cuantas esquinas estan solucionadas
	checarEsquinasInferiores(BLANCO,VERDE,ANARANJADO) ? aux++ : false;
	checarEsquinasInferiores(VERDE,AMARILLO,ANARANJADO) ? aux++ : false;
	checarEsquinasInferiores(AMARILLO,AZUL,ANARANJADO) ? aux++ : false;
	checarEsquinasInferiores(AZUL,BLANCO,ANARANJADO) ? aux++ : false;
	}while(aux !== 4);
	
	//Fin
	//se rotan las esquinas y por teoria de grupos el cubo llega al estado de completado
	rotarEsquinasInferiores(ANARANJADO,BLANCO,AZUL);
	rotarEsquinasInferiores(ANARANJADO,AZUL,AMARILLO);
	rotarEsquinasInferiores(ANARANJADO,AMARILLO,VERDE);
	rotarEsquinasInferiores(ANARANJADO,VERDE,BLANCO);
	//se cargan los colores guardados 
	cargarColores();
	//se soluciona por ingenieria inversa para una animacion
	solIngenieria();
	draw();
}

function guardarColores(){
	//guarda el estado actual del cubo en arreglos
	var i, j , k, m;
	for(i = 0; i < 6; i++) {
		colores[i] = [];
		for(j = 0; j < 3; j++) {
			colores[i][j] = [];
			for(k = 0; k < 3; k++) {
				//se guardan los colores actuales del cubo en otro arreglo
				colores[i][j][k] = cubo[i][j][k];
			}
		}
	}
}

function cargarColores(){//Regresa al estado guardado por guardarColores
	var i, j , k, m;
	for(i = 0; i < 6; i++) {
		for(j = 0; j < 3; j++) {
			for(k = 0; k < 3; k++) {
				//se cargan los colores guardados por guardarColores()
				cubo[i][j][k] = colores[i][j][k];
			}
		}
	}
}

function escribeConsola(){
	var i, j , k, m;
	return "      " + filita(0,0) + "|\n" +
			"      " + filita(0,1) + "|\n" +
			"      " + filita(0,2) + "|\n" +
			filita(1,0) + filita(2,0) + filita(3,0) + filita(4,0) + "|\n" +
			filita(1,1) + filita(2,1) + filita(3,1) + filita(4,1) + "|\n" +
			filita(1,2) + filita(2,2) + filita(3,2) + filita(4,2) + "|\n" +
			"      " + filita(5,0) + "|\n" +
			"      " + filita(5,1) + "|\n" +
			"      " + filita(5,2) + "|\n" +
			"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@";
}

function filita(numCubo, fila){
	var cadena = "";
	var i;
	for(i = 0; i < 3; i++){
		cadena += "|";
		switch(cubo[numCubo][fila][i]){
			case 0: cadena += "R"; break;
			case 1: cadena += "B"; break;
			case 2: cadena += "W"; break;
			case 3: cadena += "G"; break;
			case 4: cadena += "Y"; break;
			case 5: cadena += "O"; break;
		}
	}
	return cadena;
}








