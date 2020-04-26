/* 
Desenvolvidor por: Kaio Rocha Ribeiro
Data: 24/02/2020
Processo Seletivo: Vitto Caixa Eletrônico
*/

/*A função realiza o cálculo do valor digitado pelo usuário pelo valor da nota em real, 
sendo assim resultando na quantidade de notas emitidas para cada valor. Para esse caso será
utilizado um For para percorrer o Array das cédulas e para cada cédula tem uma condição
para calcular a qtd de cada nota.
 */

 function caixaEletronico(){

	let valorSaque = document.getElementById('vlSaque').value
  let notas = [50,10,5,1]
	var result = "<br>Quantidade de notas" + "<br>";
  var ident = false;
  
	for (i = 0; i < notas.length; i++) {

    //Utilizando o resto da divisão por 10, já é possível tratar tanto 50, quanto o 10
		if (valorSaque <= 10000 && (valorSaque % 10) == 0 ) {
			if (valorSaque >=notas[i]) {
				result = result  + parseInt (valorSaque/notas[i])+" Nota(s) de R$ "+notas[i] + "<br>";
				ident = true;
				valorSaque = valorSaque % notas[i];
      }

      //Resto da divisão para notas de 5
		} else if (valorSaque <= 10000 && (valorSaque % 5) == 0 ) {
			if (valorSaque >=notas[i]) {
				result = result  + parseInt (valorSaque/notas[i])+" Nota(s) de R$ "+notas[i] + "<br>";
				ident = true;
				valorSaque = valorSaque % notas[i];
      }

      //resto da divisão por notas de 1
		} else if (valorSaque <= 10000 && (valorSaque % 1) == 0 ) {
			if (valorSaque >=notas[i]) {
				result = result  + parseInt (valorSaque/notas[i])+" Nota(s) de R$ "+notas[i] + "<br>";
				ident = true;
				valorSaque = valorSaque % notas[i];
      }
      
      //se todas as notas foram satisfeitas, será encerrado o for
		} else {
			ident = false;
			break;
		}
	}
	
  //se tudo deu certo, faz impressão da contagem das notas
	if (ident == true) {
		document.getElementById("resultCalc").innerHTML = `<p>${result}</p>` + "<br>";
	}
	
  //validação do valor máximo para ser sacado
	else if (valorSaque > 10000) {

		document.getElementById("resultCalc").innerHTML = "<p>Valor máximo para saque é R$ 10.000</p>"

		//valida se não digitou nada no input e também se é valor negativo
	} else if (valorSaque < 1) {
		
		document.getElementById("resultCalc").innerHTML = "<p> Valor mínimo para saque é R$ 1.00</p>"

	}
}

