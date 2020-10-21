var PREZZO_KM = 0.21;
var SCONTO_GIOVANI = 0.2;
var SCONTO_ANZIANI = 0.4;

var generaBtn = document.getElementById("genera-btn");
var annullaBtn = document.getElementById("annulla-btn");

generaBtn.addEventListener("click", function () {
  //assegno numero carrozza
  var randomSeat = Math.floor(Math.random() * 10000 + 90000);
  var randomCarrozza = Math.floor(Math.random() * 10 + 1);

  document.getElementById("seat-number").innerHTML = randomSeat;
  document.getElementById("carrozza-number").innerHTML = randomCarrozza;

  //assegno offerta

  var fasciaEta = document.getElementById("fascia-eta").value;
  document.getElementById("offer").innerHTML = fasciaEta;

  // assegno nome e cognome al biglietto

  var customerName = document.getElementById("name-surname").value;

  document.getElementById("customer-name").innerHTML = customerName;

  // leggo i km da percorrere e li assegno ad una variabile

  var kmRichiesti = document.getElementById("km-richiesti").value;

  // calcolo il costo del biglietto

  var prezzoBiglietto = (kmRichiesti * PREZZO_KM).toFixed(2);

  if (isNaN(kmRichiesti) || customerName == " " || kmRichiesti == " ") {
    alert("Dati mancanti o incorretti, riprova.");
  } else if (fasciaEta == "minorenne") {
    document.getElementById("biglietto").style.display = "block";
    var prezzoGiovani = (prezzoBiglietto -=
      prezzoBiglietto * SCONTO_GIOVANI).toFixed(2);
    document.getElementById("price").innerHTML = prezzoGiovani + " €";
  } else if (fasciaEta == "over-65") {
    document.getElementById("biglietto").style.display = "block";
    var prezzoAnziani = (prezzoBiglietto -=
      prezzoBiglietto * SCONTO_ANZIANI).toFixed(2);
    document.getElementById("price").innerHTML = prezzoAnziani + " €";
  } else {
    document.getElementById("biglietto").style.display = "block";
    document.getElementById("price").innerHTML = prezzoBiglietto + " €";
  }
});

// implemento bottone annulla

annullaBtn.addEventListener("click", function () {
  document.getElementById("biglietto").style.display = "none";
  document.getElementById("km-richiesti").value = " ";
  document.getElementById("name-surname").value = " ";
});
