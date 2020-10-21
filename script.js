var PREZZO_KM = 0.21;
var SCONTO_GIOVANI = 0.2;
var SCONTO_ANZIANI = 0.4;

var kmRichiesti = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

var etaPasseggero = parseInt(prompt("Inserisci la tua età"));

var prezzoBiglietto = kmRichiesti * PREZZO_KM;

console.log(prezzoBiglietto);

if (!isNaN(etaPasseggero) && !isNaN(kmRichiesti)) {
  if (etaPasseggero < 18) {
    document.writeln(
      "Congratulazioni, hai diritto ad uno sconto del 20% il prezzo del tuo biglietto era " +
        prezzoBiglietto +
        " Euro" +
        " adesso è di " +
        (prezzoBiglietto -= prezzoBiglietto * SCONTO_ANZIANI).toFixed(2) +
        " Euro"
    );
  } else if (etaPasseggero > 65) {
    document.writeln(
      "Congratulazioni, hai diritto ad uno sconto del 40% il prezzo del tuo biglietto era " +
        prezzoBiglietto +
        " Euro" +
        " adesso è di " +
        (prezzoBiglietto -= prezzoBiglietto * SCONTO_GIOVANI).toFixed(2) +
        " Euro"
    );
  } else {
    document.writeln(
      "Non hai diritto a sconti particolari. Il prezzo del tuo biglietto è di " +
        prezzoBiglietto +
        " Euro"
    );
  }
} else {
  document.writeln("Sicuro di aver messo un numero?");
}
