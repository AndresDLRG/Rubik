/*
24 posibilidades
primerCuadro.segundoCuadro@movimientos# 
L'=1, R=2, F'=3, B=4, U=5, D'=6, L=7, R'=8, F=9, B'=10, U'=11, D=12, BIEN=0
*/
paso1 = "201.021@3,5,1,11#" +  		//F' U L' U'
		"021.201@0#" +	 			//BIEN
		
		"210.112@5,1,11#" +   		//U L' U'
		"112.210@9#" +				//F
		
		"212.310@11,2,5#" +			//U' R U
		"310.212@3#" +				//F'
		
		"221.501@9,5,1,11#" +		//F U L' U'
		"501.221@9,9#" +			//F F
		
		"010.101@7,5,1,11#" + 		//L U L' U'
		"101.010@7,9#" +			//L F
		
		"012.301@8,11,2,5#" +		//R' U' R U
		"301.012@8,3#" +			//R' F'
		
		"121.510@12,9,5,1,11#" +	//D F U L' U'
		"510.121@12,9,9#" +			//D F F
		
		"321.512@6,9,5,1,11#" +		//D' F U L' U'
		"512.321@6,9,9#" +			//D' F F
		
		"001.401@4,5,5,10,5,5#" +	//B U U B' U U
		"401.001@4,5,7,11#" +		//B U L U'
		
		"110.412@5,5,10,5,5#" +		//U U B' U U
		"412.110@5,7,11#" +			//U L U'
		
		"312.410@5,5,4,5,5#" +		//U U B U U
		"410.312@11,8,5#" +			//U' R' U
		
		"521.421@12,12,9,9#" +		//D D F F
		"421.521@12,12,9,5,1,11"; 	//D D F U L' U'
/*
24 posibilidades
primerCuadro.segundoCuadro.tercerColor@movimientos#
L'=1, R=2, F'=3, B=4, U=5, D'=6, L=7, R'=8, F=9, B'=10, U'=11, D=12, BIEN=0
*/
paso2 = "022.202.300@0#" +	//BIEN
		"202.300.022@9,12,3,12,12,8,12,2#" +    //F D F' D D R' D R
		"300.022.202@9,6,3,12,9,6,3#" +    		//F D' F' D F D' F'
		                    
		"020.102.200@7,12,1,12,9,6,3#" +    	//L D L' D F D' F'
		"102.200.020@7,12,1,6,8,12,2#" +    	//L D L' D' R' D R
		"200.020.102@7,6,1,12,12,9,6,3#" +    	//L D' L' D D F D' F'
		                    
		"002.302.400@10,6,4,6,8,12,2#" +    	//B' D' B D' R' D R
		"302.400.002@10,12,4,6,6,8,12,2#" +    	//B' D B D' D' R' D R
		"400.002.302@10,9,6,4,3#" +    			//B' F D' B F'
		                   
		"000.402.100@4,6,9,6,3,10#" +    		//B D' F D' F' B'
		"402.100.000@4,12,10,8,12,2#" +    		//B D B' R' D R
		"100.000.402@4,6,10,6,9,6,3#" +    		//B D' B' D' F D' F' 
                            
		"502.320.222@8,12,2,6,9,6,3#" +    		//R' D R D' F D' F'
		"320.222.502@12,9,6,3#" +    			//D F D' F'
		"222.502.320@6,8,12,2#" +    			//D' R' D R
		                  
		"500.220.122@12,8,12,2,6,9,6,3#" +    	//D R' D R D' F D' F'  
		"220.122.500@12,12,9,6,3#" +    		//D D F D' F'
		"122.500.220@8,12,2#" +    				//R' D R
		                  
		"522.420.322@6,8,12,2,6,9,6,3#" +    	//D' R' D R D' F D' F'
		"420.322.522@9,6,3#" +    				//F D' F'
		"322.522.420@6,6,8,12,2#" +    			//D' D' R' D R
		             
		"520.120.422@12,12,8,12,2,6,9,6,3#" +   //D D R' D R D' F D' F'
		"120.422.520@6,9,6,3#" +    			//D' F D' F'
		"422.520.120@12,8,12,2";     			//D R' D R
/*
16 posibilidades
primerCuadro.segundoCuadro@movimientos#
L'=1, R=2, F'=3, B=4, U=5, D'=6, L=7, R'=8, F=9, B'=10, U'=11, D=12, BIEN=0
*/
paso3 = "212.310@0?0?0?0#" +                                //BIEN
		"310.212@8,12,2,12,9,6,3,12,8,12,2,12,9,6,3" +    	//R' D R D F D' F'    D R' D R D F D' F'
		"?0?0?0#" +											//BIEN	                
		                                                                        
		"312.410@10,12,4,12,2,6,8,6,9,6,3,6,8,12,2" +    	//B' D B D R D' R'    D' F D' F' D' R' D R 
		"?0" +												//BIEN
		"?0" +                                              //BIEN  
		"?0#" +                                             //BIEN
		"410.312@10,12,4,12,2,6,8,8,12,2,12,9,6,3" +    	//B' D B D R D' R'    R' D R D F D' F'
		"?10,12,4,12,2,6,8,12,10,12,4,12,2,6,8" +			//B' D B D R D' R'    D B' D B D R D' R' 
		"?0" +                                              //BIEN
		"?0#" +                                             //BIEN
		        
		"412.110@1,12,7,12,4,6,10,12,12,9,6,3,6,8,12,2" +   //L' D L D B D' B'    D D F D' F' D' R' D R
		"?1,12,7,12,4,6,10,6,2,6,8,6,10,12,4" +				//L' D L D B D' B'    D' R D' R' D' B' D B
		"?0" +                                              //BIEN
		"?0#" +                                             //BIEN
		"110.412@1,12,7,12,4,6,10,6,8,12,2,12,9,6,3" +    	//L' D L D B D' B'    D' R' D R D F D' F'
		"?1,12,7,12,4,6,10,10,12,4,12,2,6,8" +				//L' D L D B D' B'    B' D B D R D' R'
		"?1,12,7,12,4,6,10,12,1,12,7,12,4,6,10" +           //L' D L D B D' B'    D L' D L D B D' B'
		"?0#" +                                             //BIEN
		        
		"112.210@3,12,9,12,7,6,1,12,9,6,3,6,8,12,2" +    	//F' D F D L D' L'    D F D' F' D' R' D R
		"?3,12,9,12,7,6,1,12,12,2,6,8,6,10,12,4" +			//F' D F D L D' L'    D D R D' R' D' B' D B
		"?3,12,9,12,7,6,1,6,4,6,10,6,1,12,7" +            	//F' D F D L D' L'    D' B D' B' D' L' D L
		"?0#" +                                             //BIEN
		"210.112@3,12,9,12,7,6,1,12,12,8,12,2,12,9,6,3" +   //F' D F D L D' L'    D D R' D R D F D' F'
		"?3,12,9,12,7,6,1,6,10,12,4,12,2,6,8" +				//F' D F D L D' L'    D' B' D B D R D' R'
		"?3,12,9,12,7,6,1,1,12,7,12,4,6,10" +            	//F' D F D L D' L'    L' D L D B D' B'
		"?3,12,9,12,7,6,1,12,3,12,9,12,7,6,1#" +           	//F' D F D L D' L'    D F' D F D L D' L' 
		        
		"221.501@6,8,12,2,12,9,6,3" +    		            //D' R' D R D F D' F'  
		"?10,12,4,12,2,6,8" +                 				//B' D B D R D' R'
		"?12,1,12,7,12,4,6,10" +                 			//D L' D L D B D' B'
		"?12,12,3,12,9,12,7,6,1#" +                			//D D F' D F D L D' L'
		"501.221@12,12,9,6,3,6,8,12,2" +    	            //D D F D' F' D' R' D R
		"?6,2,6,8,6,10,12,4" +                 				//D' R D' R' D' B' D B
		"?4,6,10,6,1,12,7" +                 				//B D' B' D' L' D L
		"?12,7,6,1,6,3,12,9#" +                				//D L D' L' D' F' D F
		                                                    
		"321.512@12,12,8,12,2,12,9,6,3" +    	            //D D R' D R D F D' F'
		"?6,10,12,4,12,2,6,8" +                 			//D' B' D B D R D' R'
		"?1,12,7,12,4,6,10" +                 				//L' D L D B D' B'
		"?12,3,12,9,12,7,6,1#" +                			//D F' D F D L D' L'       
		"512.321@12,9,6,3,6,8,12,2" +    		            //D F D' F' D' R' D R
		"?12,12,2,6,8,6,10,12,4" +                 			//D D R D' R' D' B' D B
		"?6,4,6,10,6,1,12,7" +                 				//D' B D' B' D' L' D L
		"?7,6,1,6,3,12,9#" +                				//L D' L' D' F' D F
		                                                    
		"421.521@12,8,12,2,12,9,6,3" +    	            	//D R' D R D F D' F'
		"?12,12,10,12,4,12,2,6,8" +                			//D D B' D B D R D' R'
		"?6,1,12,7,12,4,6,10" +                				//D' L' D L D B D' B'
		"?3,12,9,12,7,6,1#" +               				//F' D F D L D' L'  
		"521.421@9,6,3,6,8,12,2" +    			            //F D' F' D' R' D R
		"?12,2,6,8,6,10,12,4" +                				//D R D' R' D' B' D B
		"?12,12,4,6,10,6,1,12,7" +                			//D D B D' B' D' L' D L 
		"?6,7,6,1,6,3,12,9#" +               				//D' L D' L' D' F' D F
		                                                    
		"121.510@8,12,2,12,9,6,3" +    		            	//R' D R D F D' F'
		"?12,10,12,4,12,2,6,8" +                			//D B' D B D R D' R'  
		"?12,12,1,12,7,12,4,6,10" +                			//D D L' D L D B D' B'
		"?6,3,12,9,12,7,6,1#" +               				//D' F' D F D L D' L'
		"510.121@6,9,6,3,6,8,12,2" +     		            //D' F D' F' D' R' D R
		"?2,6,8,6,10,12,4" +                				//R D' R' D' B' D B
		"?12,4,6,10,6,1,12,7" +                				//D B D' B' D' L' D L
		"?12,12,7,6,1,6,3,12,9";                			//D D L D' L' D' F' D F

function piezasLaterales(paso, color1, color2){
	var aux1, i, j;//cada posibilidad
	var aux2 = [];//division
	var aux3 = [];//colores
	var aux4 = [];//movimientos
	aux1 = paso.split("#"); //Lo divido por signos #
	for(i = 0; i < aux1.length; i++) { //divido la supercadena por arrobas
		aux2[i] = aux1[i].split("@");
	}
	for(i = 0; i < aux2.length; i++) {	//divido las cadenas por puntos
		aux3[i] = aux2[i][0].split(".");
	}
	for(i = 0; i < aux2.length; i++) {
		aux4[i] = aux2[i][1].split(",");//divido la otra cadena por comas
	}
	for(i = 0; i < aux1.length; i++){ //se repite para saber en que filo está
		if(cubo[aux3[i][0][0]][aux3[i][0][1]][aux3[i][0][2]] === color1 &&
			cubo[aux3[i][1][0]][aux3[i][1][1]][aux3[i][1][2]] === color2){
			for(j = 0; j < aux4[i].length; j++){ //si los colores coinciden 
				if(aux4[i][j] != "0"){	//hago los movimientos que me indique la cadena
					movimiento[aux4[i][j]](true);
				}
				else{	
					//salto para mejorar la velocidad
					break;
				}
			}
			//salto para evitar repeticiones
			break;
		}
	}	
	movimiento[5](true); //U  para que quede bien acomodado
}

function piezasEsquinas(paso, color1, color2, color3){
	var aux1, i, j;//cada posibilidad
	var aux2 = [];//division
	var aux3 = [];//colores
	var aux4 = [];//movimientos
	aux1 = paso.split("#"); //lo divido por signos #
	for(i = 0; i < aux1.length; i++) {	//lo divido cada @
		aux2[i] = aux1[i].split("@");
	}
	for(i = 0; i < aux2.length; i++) {	//lo divido cada punto
		aux3[i] = aux2[i][0].split(".");
	}
	for(i = 0; i < aux2.length; i++) {	//lo divido cada coma
		aux4[i] = aux2[i][1].split(",");
	}
	for(i = 0; i < aux1.length; i++){//si la esquina coincide
		if(cubo[aux3[i][0][0]][aux3[i][0][1]][aux3[i][0][2]] === color1 &&
			cubo[aux3[i][1][0]][aux3[i][1][1]][aux3[i][1][2]] === color2 &&
			cubo[aux3[i][2][0]][aux3[i][2][1]][aux3[i][2][2]] === color3){
			for(j = 0; j < aux4[i].length; j++){
				if(aux4[i][j] != "0"){//realizo los movimientos en el arreglo
					movimiento[aux4[i][j]](true);
				}
				else{
					//si está en 0 no hago nada
					break;
				}
			}
			break;
		}
	}	
	movimiento[5](true);//lo giro una ves para acomodaro
}

function piezasLaterales2(paso, color1, color2, numLateral){
	var aux1, i, j, k;//cada posibilidad
	var aux2 = [];//division
	var aux3 = [];//colores
	var aux4;//movimientos
	var aux5 = [];//en cual lateral ira
	aux1 = paso.split("#");//lo divida cada signo #
	for(i = 0; i < aux1.length; i++) {
		aux2[i] = aux1[i].split("@");	//lo divido cada signo @
	}
	for(i = 0; i < aux2.length; i++) {//lo divido cada punto
		aux3[i] = aux2[i][0].split(".");
	}
	for(i = 0; i < aux2.length; i++) {
		aux5[i] = aux2[i][1].split("?");//lo divido cada signo de pregunta
	}
	for(i = 0; i < aux1.length; i++){//si la pieza coincide
		if(cubo[aux3[i][0][0]][aux3[i][0][1]][aux3[i][0][2]] === color1 &&
			cubo[aux3[i][1][0]][aux3[i][1][1]][aux3[i][1][2]] === color2){
				aux4 = aux5[i][1*numLateral].toString().split(",");//divido ese arreglo por comas
			for(j = 0; j < aux4.length; j++){//hago todos los movimeintos del arreglo
				if(aux4[j] != "0"){
					movimiento[aux4[j]](true);
				}
				else{
					//si es 0 me lo salto
					break;
				}
			}
			break;
		}
	}
}

function cruzInferior(){//acomoda la cruz inferior correctamente
	var i, j, k, salto = false;
	
	if(cubo[5][0][1] !== ANARANJADO ||  //si aun no estan correctos los colores inferiores de la cara naranja
		cubo[5][1][0] !== ANARANJADO ||
		cubo[5][1][2] !== ANARANJADO ||
		cubo[5][2][1] !== ANARANJADO){
		for(i = 0; i < 2; i++){//MOV DE PALO
			if(cubo[5][1][0] === ANARANJADO &&
				cubo[5][1][2] === ANARANJADO){
				salto = true;
				movimiento[4](true);
				movimiento[2](true);
				movimiento[12](true);
				movimiento[8](true);
				movimiento[6](true);
				movimiento[10](true);
				break;
			}
			movimiento[12](true);
		}
		for(i = 0; i < 4 && salto === false; i++){//MOV DE L
			if(cubo[5][1][0] === ANARANJADO &&
				cubo[5][0][1] === ANARANJADO){
				salto = true;
				movimiento[4](true);
				movimiento[12](true);
				movimiento[2](true);
				movimiento[6](true);
				movimiento[8](true);
				movimiento[10](true);
				break;
			}
			movimiento[12](true);
		}
		if(salto === false){//MOV DE L
			movimiento[4](true);
			movimiento[12](true);
			movimiento[2](true);
			movimiento[6](true);
			movimiento[8](true);
			movimiento[10](true);
			for(i = 0; i < 2; i++){//MOV DE PALO
				if(cubo[5][1][0] === ANARANJADO &&
					cubo[5][1][2] === ANARANJADO){
					movimiento[4](true);
					movimiento[2](true);
					movimiento[12](true);
					movimiento[8](true);
					movimiento[6](true);
					movimiento[10](true);
					break;
				}
				movimiento[12](true);
			}
		}
	}
	salto = false;
	//ya esta la cruz debajo
	var auxi = [];
	for(i = 1; i< 5; i++){
		if(cubo[1][1][1] === cubo[1][2][1] &&
			cubo[2][1][1] === cubo[2][2][1] &&
			cubo[3][1][1] === cubo[3][2][1] &&
			cubo[4][1][1] === cubo[4][2][1]){
				salto = true;
				break;
		}
	}
	if (salto === false){
		for (i = 1; i< 5; i++){
			switch(cubo[i][2][1]){
				case BLANCO:   auxi[i] = 1; break;
				case VERDE:   auxi[i] = 2; break;
				case AMARILLO:  auxi[i] = 3; break;
				case AZUL:    auxi[i] = 4; break;
			}
		}
		if((auxi[1] === 1 && auxi[3] === 3) ||
		(auxi[1] === 2 && auxi[3] === 4) ||
		(auxi[1] === 3 && auxi[3] === 1) ||
		(auxi[1] === 4 && auxi[3] === 2)){
			//R D R' D R D D R' D 
			movimiento[2](true);
			movimiento[12](true);
			movimiento[8](true);
			movimiento[12](true);
			movimiento[2](true);
			movimiento[12](true);
			movimiento[12](true);
			movimiento[8](true);
			movimiento[12](true);
		}
		
		for (i = 1; i< 5; i++){
			for(j = 1; j< 5; j++){
				switch(cubo[j][2][1]){
					case BLANCO:   auxi[j] = 1; break;
					case VERDE:   auxi[j] = 2; break;
					case AMARILLO:  auxi[j] = 3; break;
					case AZUL:    auxi[j] = 4; break;
				}
			}
			if(auxi[1]+1 === auxi[2] ||  (auxi[1]=== 4 && auxi[2] === 1)){
				//D' L D L' D L D D L'  
				movimiento[6](true);
				movimiento[7](true);
				movimiento[12](true);
				movimiento[1](true);
				movimiento[12](true);
				movimiento[7](true);
				movimiento[12](true);
				movimiento[12](true);
				movimiento[1](true);
				break;
			}
			else if(auxi[4]+1 === auxi[1] ||  (auxi[4]=== 4 && auxi[1] === 1)){
				//L D L' D L D D L' 
				movimiento[7](true);
				movimiento[12](true);
				movimiento[1](true);
				movimiento[12](true);
				movimiento[7](true);
				movimiento[12](true);
				movimiento[12](true);
				movimiento[1](true);
				break;
			}
			movimiento[12](true);
		}
	}
	while(cubo[2][2][1] !== BLANCO){
		movimiento[12](true);
	}
}


function checarEsquinasInferiores(color1, color2, color3){
	//se revisa que las esquinas inferiores esten correctas
	if((cubo[2][2][2] === color1 ||
		cubo[2][2][2] === color2 ||
		cubo[2][2][2] === color3) &&
		(cubo[3][2][0] === color1 ||
		cubo[3][2][0] === color2 ||
		cubo[3][2][0] === color3) &&
		(cubo[5][0][2] === color1 ||
		cubo[5][0][2] === color2 ||
		cubo[5][0][2] === color3)){
		
		movimiento[6](true);
		return true;
	}
	movimiento[6](true);
	return false;
}

function rotarEsquinasInferiores(color1, color2, color3){
	//cubo5, cubo2, cubo1
	while(cubo[5][0][0] !== color1 ||
		cubo[2][2][0] !== color2 ||
		cubo[1][2][2] !== color3 ){
			//L' U' L U 
			movimiento[1](true);
			movimiento[11](true);
			movimiento[7](true);
			movimiento[5](true);
	}
	movimiento[12](true);//un giro extra para acomodar para la siguiente
}

