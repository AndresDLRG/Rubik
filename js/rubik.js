window.onload = function() { //Cuando carge toda la ventana ahora si ejecutas el codigo
	
	//Funciones
	function main() {
		init();
		draw();
		
		//crear los elementos en el DOM
		btnMezclar = document.createElement("button");
		btnPorCapas = document.createElement("button");
		parrafo = document.createElement("p");
		selector = document.createElement("select");
		solucionEscrita = document.createElement("textarea");
		pMovTotales = document.createElement("p");
		pIrA = document.createElement("p");
		inputMov = document.createElement("input");
		btnIr = document.createElement("button");
		//arrelo para los elementos option
		var opt = [];
		for (var i = 1; i < 61; i++) {
			opt[i] = document.createElement("option");
		}
		//agregar los elementos al DOM
		document.body.appendChild(btnMezclar);
		document.body.appendChild(btnPorCapas);
		document.body.appendChild(parrafo);
		document.body.appendChild(selector);
		document.body.appendChild(solucionEscrita);
		document.body.appendChild(pMovTotales);
		document.body.appendChild(pIrA);
		document.body.appendChild(inputMov);
		document.body.appendChild(btnIr);
		for (var i = 1; i < 61; i++) {
			selector.appendChild(opt[i]);
			opt[i].innerHTML = i;
		}
		//modificar el boton mezclar
		btnMezclar.innerHTML = "Mezclar";
		btnMezclar.addEventListener("click",mezcla);
		btnMezclar.style.top = "40px";
		btnMezclar.style.left = "530px";
		//modificar el boton de sol por capas
		btnPorCapas.innerHTML = "Solución por Capas";
		btnPorCapas.addEventListener("click",solHumana);
		btnPorCapas.style.left = "530px";
		btnPorCapas.style.top = "88px";
		btnPorCapas.disabled = true;
		//modificar el combo box
		selector.style.left = "580px";
		selector.style.top = "200px";
		selector.value = "20";
		//modificar el parrafo 
		parrafo.innerHTML = "Movimientos por segundo";
		parrafo.style.top = "140px";
		parrafo.style.left = "530px";
		//modificar el movTotales
		pMovTotales.innerHTML = "";
		pMovTotales.style.top = "10px";
		pMovTotales.style.left = "710px";
		//modificar el pIrA
		pIrA.innerHTML = "";
		pIrA.style.top = "40px";
		pIrA.style.left = "710px";
		//modificar el inputMov
		inputMov.type = "number";
		inputMov.id = "input";
		inputMov.style.top = "54px";
		inputMov.style.left = "825px";
		inputMov.style.width = "50px";
		inputMov.style.display = "none";
		//modificar el btnIr
		btnIr.innerHTML = "Ir";
		btnIr.addEventListener("click",irA);
		btnIr.style.top = "85px";
		btnIr.style.left = "780px";
		btnIr.style.width = "60px";
		btnIr.style.height = "20px";
		btnIr.style.display = "none";
		//modificar el area de la solucion escrita
		solucionEscrita.style.width = "400px";
		solucionEscrita.style.height = "150px";
		solucionEscrita.style.textAlign = "left";
		solucionEscrita.disabled = true;
		solucionEscrita.placeholder = "Aquí se escribirán las soluciones en notación rubik";
		solucionEscrita.style.top = "240px";
		solucionEscrita.style.left = "530px";
		solucionEscrita.style.maxWidth = "400px";
	}	
	
	main(); //Funcion principal de aqui empieza el programa
};