function draw(){
	/*$("td").html(function(){
		return $(this).attr("id");
	});*/
	var i, j, k;
	for(i = 0; i < 6; i++){
		for(j = 0; j < 3; j++){
			for(k = 0; k < 3; k++){
				//colorea cada td segun un arreglo de numeros
				document.getElementById("c" + i + j + k).style.background = defineColor(cubo[i][j][k]);
			}
		}
	}
}

function defineColor(num){
	//saber que color representa cada numero, para poder colorearlo
	switch(num){
		case 0: return "red"; break;
		case 1: return "blue"; break;
		case 2: return "white"; break;
		case 3: return "green"; break;
		case 4: return "yellow"; break;
		case 5: return "orange"; break;
		default: console.log("Ha sucedido un error en la definicion de colores");
	}
}

function init(){
	//poner borde a los td que tengan id que son los que representan el cubo
	var celdas = document.getElementsByTagName("td");
	for(var i = 0; i < celdas.length; i++){
		if(celdas[i].id !== undefined){
			celdas[i].style.border = "2px solid gray";
		}
	}
	
	
	var i, j, k;
	cubo = [];
	//inicializar a los colores correctos
	for(i = 0; i < 6; i++){
		cubo[i] = [];
		for(j = 0; j < 3; j++){
			cubo[i][j]= [];
			for(k = 0; k < 3; k++){
				cubo[i][j][k] = i;
			}
		}
	}
	//cuadros negros para cada cara para que se vea mas chido
	var cara1 = document.createElement("div");
	cara1.style.top = "74px";
	var cara2 = document.createElement("div");
	cara2.style.top = "170px";
	var cara3 = document.createElement("div");
	cara3.style.top = "170px";
	var cara4 = document.createElement("div");
	cara4.style.top = "170px";	
	var cara5 = document.createElement("div");
	cara5.style.top = "170px";	
	var cara6 = document.createElement("div");
	cara6.style.top = "266px";	
	//se agregarn los cuadros al html	
	document.getElementById("c000").appendChild(cara1);
	document.getElementById("c100").appendChild(cara2);
	document.getElementById("c200").appendChild(cara3);
	document.getElementById("c300").appendChild(cara4);
	document.getElementById("c400").appendChild(cara5);
	document.getElementById("c500").appendChild(cara6);
}

function cambiarCuadritos() { //Acepta cualquier cantidad de parametros mientras sean cantidades par
	//primer letra = cuadro
	//segunda letra = fila
	//tercer letra = columna
	var aux;
	aux = cubo[arguments[0][0]][arguments[0][1]][arguments[0][2]];
	for(i = 0; i < arguments.length; i++) {
		//intercambio(arguments[i], arguments[i+1]);
		if(i !== arguments.length -1){ //casos normales
			cubo[arguments[i][0]][arguments[i][1]][arguments[i][2]] =
			cubo[arguments[i+1][0]][arguments[i+1][1]][arguments[i+1][2]];
		}
		else{//caso especial que evita el paso de propiedades por referencia
			cubo[arguments[i][0]][arguments[i][1]][arguments[i][2]] = aux;
		}
	}
}

function mezcla() {//mezcla el rubik
	init();//primero lo acomoda
	//modificar elementos de DOM
	cantidadMovimientos = 0;
	pMovTotales.innerHTML = "";
	solucionEscrita.innerHTML = "";
	pIrA.innerHTML = "";
	inputMov.style.display = "none";
	btnIr.style.display = "none";
	btnPorCapas.disabled = false;
	
	var i, num;
	moves.length = 0;//borra el log de movimientos realizados
	var maximo = Math.floor(getRandom()*30+50);//se genera un numero entre 50 y 80
	for(i = 0; i < maximo; i++) {//se realizan movimeintos aleatorios
		num = Math.floor(getRandom()*12 + 1);
		movimiento[num]();
		if (num < 7) {//se guardan los movimientos contrarios en el arreglo
			moves.push(movimiento[num+6]);
		}
		else {
			moves.push(movimiento[num-6]);
		}
	}
	draw();//redibujar
}

function irA(){
	var entrada = document.getElementById("input").value;
	
	if(/^\d+$/.test(entrada)  && entrada <= cantidadMovimientos){
		entrada = Math.abs(cantidadMovimientos-entrada);
		entrada--;
		cargarColores();
		var i = moves.length-1;
		for(; i > entrada;i--){
			moves[i]();
		}
		console.log("Mostrando ultimo movimiento solicitado");
		console.log(escribeConsola());
		draw();
	}else{
		alert("Datos invalidos");
	}
}

function getRandom() {
	num = (a*num + c ) % m;
	var ram = num / m;
	return ram;
}