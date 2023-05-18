// ES 1: Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
//   FALSE altrimenti.
//   Esempi:
//     Input: n = 2, m = 3
//     Output: FALSE
//     Input: n = 2, m = '2'
//     Output: FALSE
//     Input: n = 2, m = 2
//     Output: TRUE 

// let n = +prompt('Inserisci un primo numero');
// let m = +prompt('Inserisci un secondo numero');

// function uguale (n, m){
//     if (n == m){
//         return 'True'
//     } else {
//         return 'False'
//     } 
// }
// alert = (uguale(n,m)); 


// ES 2: Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.
// Esempi:

//     Input : 9
//     Output :  1 cifra

//     Input : 99
//     Output :  2 cifre 

// let num = +prompt('Inserisci un numero compreso da 1 a 9999');

// function cifre (num) {
//     if (num <= 9 && num >= 1) {
//         return '1 cifra'
//     } else if (num <= 99) {
//         return '2 cifre'
//     } else if (num <= 999) {
//         return '3 cifre'
//     } else if (num <= 9999) {
//         return '4 cifre'
//     } else {
//         alert('Digita nuovamente il numero compreso tra 1 e 9999')
//     }
//     }
// alert(`Il numero inserito è composto da ${cifre(num)}`) 




// ES 3:  Scrivere una funzione che permetta di stampare in console tutti i numeri da 1 a N:
// - N dovrà rappresentare il parametro formale della funzione
// - tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// - tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// - tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'
// let num = +prompt('Digita un numero compreso tra 1 e 150')
// function multiple(num) {
//     for (i=0; i<=num; i++) {
//         if (i % 15 == 0){
//             console.log('fizzBuzz'); 
//         } else if (i % 5 == 0){
//             console.log('Buzz'); 
//         } else if (i % 3 == 0) {
//             console.log('Fizz'); 
//         } else if (i>= 1 && i <= 150) {
//             console.log(i);
//         } else {
//             console.log('Digitare nuovamente un numero compreso tra 1 e 150');
//         }
//     }
// }
// multiple(num);

// ES 4: Dato un array, let numbers = [10, 12, 78, -4, -20, 11], scrivere due funzioni:
// una funzione che prenda in input un array di numeri e restituisca il maggiore
// la seconda funzione che restituisca il minore.
// const numbers = [10, 12, 78, -4, -20, 11];
// function max(numbers) {
//     return Math.max(...numbers)
// }
// function min(numbers) {
//     return Math.min(...numbers)
// }
// console.log(`il max è ${max(numbers)} e il min è ${min(numbers)}`);


// EXTRA:  Scrivi una funzione che, dato il numero dei tiri da effettuare per ciascun giocatore (N),  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,  supponendo che ogni dado abbia al massimo 6 facce.
// Ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore

// const N = 10
// dadi(N)
// function dadi (N) {
//     let punteggioA = 0
//     let punteggioB = 0
//     for (i = 1; i <= N; i++) {
//         let a = Math.floor(Math.random(N) * (6 - 1 + 1) + 1);
//         let b = Math.floor(Math.random(N) * (6 - 1 + 1) + 1);
//         // punteggio = punteggio + a per sommare i punti ai diversi tiri
//         punteggioA += a
//         punteggioB += b
//     }
//     console.log(punteggioA);
//     console.log(punteggioB);
//     if ( punteggioA == punteggioB) {
//         alert(`La partita è finita in parità con il punteggio di ${punteggioA} punti`)
//     }   else if (punteggioA > punteggioB){
//         alert(`La partita è finita con il giocatore uno che ha vinto con ${punteggioA} punti`)
//     }  alert (`La partita è finita con il giocatore due che ha vinto con ${punteggioB} punti`)
// }

