
function generateRandomNumber (maxRange) {

  return Math.floor(Math.random() * maxRange);
}
function numero_richiesto () {

  return parseInt(prompt("GIOCA - scrivi un numero compreso tra 0 e 100"));
}

function randNum (n) {
  var numeri_random, i, nuovo_Numero;

  numeri_random = [];
  i = 0;
  while (i < n) {
    nuovo_Numero = generateRandomNumber(100);
    numeri_random.push(nuovo_Numero);
    i++;
  }
  return numeri_random;
}

function limite (arr) {
  return (100 - arr.length);
}

function numeri_array (arr, opportunity) {
  var numero_cercato, i, tentativiEffettivi;


  numero_cercato = numero_richiesto();
  i = 0;

  while ((i < opportunity) && (arr.indexOf(numero_cercato) === -1)) {
    numero_cercato = numero_richiesto();
    i++;
  }
  tentativiEffettivi = i;

  return tentativiEffettivi;
}

function risultati_display (attempts, opportunity) {

  if (attempts < opportunity) {
    console.log("Fine partita dopo un numero di tentativi pari a: " + attempts);


  } else {
    console.log("numero massimo di tentativi - Partita chiusa");
  }
}

function gameRules () {

  var numeri = randNum(16);

  var limiti = limite(numeri);

  var ricerca = numeri_array(numeri, limiti);

  risultati_display(ricerca, limiti);

}

gameRules();
