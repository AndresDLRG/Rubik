var cubo ; //Arreglo que contiene todo el rubik
var movimiento = []; //Arreglo con los 12 moviminetos posibles del cubo rubik
var moves = []; //backtracking para solucionar el cubo
var inter; //Control para la animacion;
var cadenaSolucion = ""; //Solucion representada por letras
var colores = []; //ayuda a la animacion 
cantidadMovimientos = 0;
//constantes para los colores
ROJO = 0;
AZUL = 1;
BLANCO = 2;
VERDE = 3;
AMARILLO = 4;
ANARANJADO = 5;
//variables para random 
var a = 1103515245;
var m = 32768987697;
var c = 12345;
var num = 1;
var actual = 0;