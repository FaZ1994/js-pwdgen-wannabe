/* MERMAID LIVE EDITOR

graph TD
A(avvio live server) --> B[chiedo il nome]
B --> C[stampo il nome a console]
C --> D[chiedo il cognome]
D --> E[stampo il cognome a console]
E --> F[chiedo il colore preferito]
F --> G[stampo il colore a console]
G --> H[compongo la password affiancando i dati precedentemente raccolti e aggiungo +22]
H --> I[stampo a console la password ottenuta]
I --> L(inserisco la password ottenuta nell'html)

*/







let userName = prompt('inserisci il tuo nome');

console.log(userName);

let userLastName = prompt('inserisci il tuo cognome');

console.log(userLastName);

let userFavoriteColor = prompt("qual'è il tuo colore preferito?");

console.log(userFavoriteColor);

let pwd_gen = userName + userLastName + userFavoriteColor + '22';

console.log(pwd_gen);

document.getElementById('pwd_gen').innerHTML += pwd_gen;