// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1 -- prelevo l'elemento dall'html su cui voglio appendere i numeri, 
let originalNumbersOutput = document.getElementById("provided-numbers");

// - genero 5 numeri casuali (da 1 a 100) con la funzione mathrandom 
lengthOriginalNumbers = 5;
minStartOriginalNumbers = 1;
maxEndOriginalNumbers = 100;
timeoutShowNumbers = 5000;

const originalNumbersArray = [];

for (let i = 0; i < lengthOriginalNumbers; i++) {
    originalNumbers = getRndInteger(minStartOriginalNumbers, maxEndOriginalNumbers);

    // - pusho in un array chiamato originalNumbersArray
    originalNumbersArray.push(originalNumbers);
}

// - appendo l'array all'elemento prelevato
originalNumbersOutput.append( "memorizza i seguenti numeri, hai 30 secondi: ",  originalNumbersArray);


// 2 -- faccio partire un timer di 30 secondi alla fine del quale aggiungo la classe none al css riferito all'elemento in cui sono appesi i numeri generati, facendoli sparire
const countDown = setTimeout(timeOutHandler, timeoutShowNumbers);
console.log("countdown", countDown);

function timeOutHandler() {
    originalNumbersOutput.classList.add("d-none")
    console.log(originalNumbersOutput);
}
// - nel contempo faccio comparire n5 prompt che chiedono all'utente di inserire i valori precedentemente visualizzati uno per volta
// - inserisco i 5 valori forniti dall'utente in un array

// 3 -- con la funzione includes cerco di capire quali e quanti numeri dell'array contenente le risposte fornite dall'utente coincidono con l'array originalNumbers


// FUNCTIONS (TO PREPARE GAME)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }