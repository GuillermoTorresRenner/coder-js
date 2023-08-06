//Declaración de variables
let comando;
let dados = [];
let stringTirada = "";
//Declcaración de la función para lanzar los dados
const tirada = (cantidad, caras) => {
  dados = [];
  stringTirada = "";
  for (let i = 0; i < cantidad; i++) {
    const resultado = Math.floor(Math.random() * caras) + 1;
    dados.push(resultado);
  }

  for (let i = 0; i < dados.length; i++) {
    stringTirada += `[${dados[i]}] `;
  }

  alert(stringTirada);
};

//Flujo del programa
do {
  comando = prompt(`\t\t\t\t SIMULADOR DE TIRADAS DE DADOS DE ROL\n
                      \t\t----------------------------------------------------------------------\n
                      \t\t\t\t INATRUCCIONES\n
                      \t\ Utilice: [numero de dados]d[cantidad caradas de dado] ;
                      \t\ Ejemplo: Para tirar 2 dados de 8 el comando seria "2d8";
                      \t\ Para salir escria el comando salir"`);

  const expresionRegunar = /^(\d+)d(\d+)$/; // Expresión regular para analizar la notación de los dados
  const notacionCorrecta = comando.match(expresionRegunar);
  if (notacionCorrecta) {
    const vectorComando = comando.split("d");
    const cantidadDados = parseInt(vectorComando[0]);
    const cantidadCaras = parseInt(vectorComando[1]);
    tirada(cantidadDados, cantidadCaras);
  } else {
    alert(
      "No se ha podido realizar la tirada, verifique la misma sea del estilo '3d4'"
    );
  }
} while (comando !== "salir");
alert("Hasta luego");
