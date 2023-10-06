let name = prompt("Dimmi il tuo nome");
let surname = prompt("Dimmi il tuo cognome");
let favouriteColor = prompt("Dimmi il tuo colore preferito");
const numerofisso = 21;

let password = ` ${name}${surname}${favouriteColor}${numerofisso}`

document.getElementById ('text').innerHTML = password;

console.log(surname);