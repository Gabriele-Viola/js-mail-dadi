/* Mail
 Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 Gioco dei dadi
 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.*/
 
let mails=['ciao@mail.com','ciao1@mail.com','ciao2@mail.com','ciao3@mail.com','ciao4@mail.com','ciao5@mail.com','ciao6@mail.com',]
let user_mail=prompt('inserisci qui la tua e-mail');
if (mails.includes(user_mail)) {
    console.log('access accept');    
} else {
    console.log('access denied');
    
}

let die =[1, 2, 3, 4, 5, 6];
let cpu_num = die[Math.floor(Math.random()*die.length)];
let player_num = die[Math.floor(Math.random()*die.length)];
if (cpu_num > player_num) {
    console.log(`Your result is ${player_num} and the cpu result is ${cpu_num}`);
    console.log('You Lose!');     
} else if (cpu_num < player_num) {
    console.log(`Your result is ${player_num} and the cpu result is ${cpu_num}`);
    console.log('You Win!');     
}else{
    console.log(`Your result is ${player_num} and the cpu result is ${cpu_num}`);
    console.log('You drew');
    console.log('re-roll the dice');     
}

