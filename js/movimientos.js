movimiento[1] = function movimiento1(normal) { //movimeinto L'
	normal == true ? moves.unshift(movimiento[1]):false;
	cambiarCuadritos("000", "200", "500", "422");//lineales
	cambiarCuadritos("010", "210", "510", "412");
	cambiarCuadritos("020", "220", "520", "402");
	cambiarCuadritos("102", "122", "120", "100");//radiales
	cambiarCuadritos("112", "121", "110", "101");
};

movimiento[2] = function movimiento2(normal) { //movimeinto R
	normal == true ? moves.unshift(movimiento[2]):false;
	cambiarCuadritos("002", "202", "502", "420");//lineales
	cambiarCuadritos("012", "212", "512", "410");
	cambiarCuadritos("022", "222", "522", "400");
	cambiarCuadritos("300", "320", "322", "302");//radiales
	cambiarCuadritos("301", "310", "321", "312");
};

movimiento[3] = function movimiento3(normal) { //movimeinto F'
	normal == true ? moves.unshift(movimiento[3]):false;
	cambiarCuadritos("320", "500", "102", "022");//lineales
	cambiarCuadritos("310", "501", "112", "021");
	cambiarCuadritos("300", "502", "122", "020");
	cambiarCuadritos("202", "222", "220", "200");//radiales
	cambiarCuadritos("212", "221", "210", "201");
};

movimiento[4] = function movimiento4(normal) { //movimeinto B
	normal == true ? moves.unshift(movimiento[4]):false;
	cambiarCuadritos("322", "520", "100", "002");//lineales
	cambiarCuadritos("312", "521", "110", "001");
	cambiarCuadritos("302", "522", "120", "000");
	cambiarCuadritos("400", "420", "422", "402");//radiales
	cambiarCuadritos("401", "410", "421", "412");
};

movimiento[5] = function movimiento5(normal) { //movimeinto U
	normal == true ? moves.unshift(movimiento[5]):false;
	cambiarCuadritos("100", "200", "300", "400");//lineales
	cambiarCuadritos("101", "201", "301", "401");
	cambiarCuadritos("102", "202", "302", "402");
	cambiarCuadritos("020", "022", "002", "000");//radiales
	cambiarCuadritos("010", "021", "012", "001");
};

movimiento[6] = function movimiento6(normal) { //movimeinto D'
	normal == true ? moves.unshift(movimiento[6]):false;
	cambiarCuadritos("120", "220", "320", "420");//lineales
	cambiarCuadritos("121", "221", "321", "421");
	cambiarCuadritos("122", "222", "322", "422");
	cambiarCuadritos("500", "502", "522", "520");//radiales
	cambiarCuadritos("501", "512", "521", "510");
};


movimiento[7] = function movimiento7(normal) { //movimeinto 7
	normal == true ? moves.unshift(movimiento[7]):false;
	cambiarCuadritos("422", "500", "200", "000");//lineales
	cambiarCuadritos("412", "510", "210", "010");
	cambiarCuadritos("402", "520", "220", "020");
	cambiarCuadritos("100", "120", "122", "102");//radiales
	cambiarCuadritos("101", "110", "121", "112");
};

movimiento[8] = function movimiento8(normal) { //movimeinto R'
	normal == true ? moves.unshift(movimiento[8]):false;
	cambiarCuadritos("420", "502", "202", "002");//lineales
	cambiarCuadritos("410", "512", "212", "012");
	cambiarCuadritos("400", "522", "222", "022");
	cambiarCuadritos("302", "322", "320", "300");//radiales
	cambiarCuadritos("312", "321", "310", "301");
};

movimiento[9] = function movimiento9(normal) { //movimeinto F
	normal == true ? moves.unshift(movimiento[9]):false;
	cambiarCuadritos("022", "102", "500", "320");//lineales
	cambiarCuadritos("021", "112", "501", "310");
	cambiarCuadritos("020", "122", "502", "300");
	cambiarCuadritos("200", "220", "222", "202");//radiales
	cambiarCuadritos("201", "210", "221", "212");
};

movimiento[10] = function movimiento10(normal) { //movimeinto B'
	normal == true ? moves.unshift(movimiento[10]):false;
	cambiarCuadritos("002", "100", "520", "322");//lineales
	cambiarCuadritos("001", "110", "521", "312");
	cambiarCuadritos("000", "120", "522", "302");
	cambiarCuadritos("402", "422", "420", "400");//radiales
	cambiarCuadritos("412", "421", "410", "401");
};

movimiento[11] = function movimiento11(normal) { //movimeinto F
	normal == true ? moves.unshift(movimiento[11]):false;
	cambiarCuadritos("400", "300", "200", "100");//lineales
	cambiarCuadritos("401", "301", "201", "101");
	cambiarCuadritos("402", "302", "202", "102");
	cambiarCuadritos("000", "002", "022", "020");//radiales
	cambiarCuadritos("001", "012", "021", "010");
};

movimiento[12] = function movimiento12(normal) { //movimeinto D
	normal == true ? moves.unshift(movimiento[12]):false;
	cambiarCuadritos("420", "320", "220", "120");//lineales
	cambiarCuadritos("421", "321", "221", "121");
	cambiarCuadritos("422", "322", "222", "122");
	cambiarCuadritos("520", "522", "502", "500");//radiales
	cambiarCuadritos("510", "521", "512", "501");
};