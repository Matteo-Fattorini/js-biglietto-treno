var kmRichiesti =  parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var etaPasseggero = parseInt(prompt ("Inserisci la tua età"));



var prezzoBiglietto =  (kmRichiesti * 0.21).toFixed(2);


if (!isNaN(etaPasseggero) && !isNaN(kmRichiesti)) {
if (etaPasseggero < 18) {
    document.writeln("Congratulazioni, hai diritto ad uno sconto del 20% il prezzo del tuo biglietto era " + prezzoBiglietto + " Euro" + " adesso è di " + (prezzoBiglietto * 0.8).toFixed(2) + " Euro");
} else if (etaPasseggero > 65) {
     document.writeln("Congratulazioni, hai diritto ad uno sconto del 40% il prezzo del tuo biglietto era " + prezzoBiglietto + " Euro" + " adesso è di " + (prezzoBiglietto * 0.6).toFixed(2) + " Euro");
    
}
else {
    document.writeln("Non hai diritto a sconti particolari. Il prezzo del tuo biglietto è di " + prezzoBiglietto + " Euro")
}
} else {
    document.writeln ("Sicuro di aver messo un numero?")
}


