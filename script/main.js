// scrivere una funzione che conta le vocali d una stringa ricevuta in ingresso

const vocali = ["a","b","c","d","e"];



// for(let i = 0; i <=6 ; i ++){
//     console.log(i)
// }
let quanteVocali = 0;

for(let vocale of vocali){
    quanteVocali ++;
}


console.log(quanteVocali)


// Esercizio: Conta il numero di consonanti in un array di lettere.


const lettere = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

let numeroLettere = 0;

for(let lettera of lettere){
    numeroLettere ++;
};

console.log(numeroLettere)


const persona = { nome: "Mario", età: 30, lavoro: "Sviluppatore" };

for (let chiave in persona) {
  console.log("Chiave:", chiave, "Valore:", persona[chiave]);
}


const oggetto = { a: 1, b: 2 };

for (let chiave in oggetto) {
  console.log(chiave, oggetto[chiave]);
}