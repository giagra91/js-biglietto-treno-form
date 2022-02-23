// Costante per il nome dell'utente
const userName = document.getElementById("user-name");

// Costante per la distanza da percorrere dall'utente
const distance =  document.getElementById("user-distance").value;
const valueDistance = parseFloat(distance);

// Costante per l'età dell'utente
const userAge = document.getElementById("user-age");

// Variabile per il costo del biglietto
let ticketPrice = valueDistance * 0.27; 

// Condizioni per sconto clienti
if (userAge.value = "Minorenne"){ // condizione se il cliente è minorenne
    ticketPrice = (ticketPrice * 0.83);
} else if (userAge.value = "Over 65 anni") {  // condizione se il cliente ha più di 65 anni
    ticketPrice = (ticketPrice * 0.67);
} else if (userAge.value = "Maggiorenne"){ // condizione per tutti gli altri casi
    ticketPrice = ticketPrice;
};

document.getElementById("create-ticket").addEventListener("click", function(){
    // Rimozione classe d-none per far comparire il bottom-container
    document.getElementById("bottom-container").classList.remove('d-none');
    // aggiunta nome passeggero
    let newUserLi = document.createElement("li");
    const newUsername = document.getElementById("user-name");
    newUserLi.innerHTML = `${newUsername.value}`;
    document.getElementById("ticket-username").append(newUserLi);
    newUsername.value ="";












    
    console.log(userAge.value);
    console.log(ticketPrice);
    console.log(valueDistance);

    // let newLiPrice = document.createElement("li");
    // const newUsername = document.getElementById("user-name");
    // newUserLi.innerHTML = `${newUsername.value}`;
    // document.getElementById("ticket-username").append(newUserLi);
    // newUsername.value ="";

});


document.getElementById("delete-all").addEventListener("click", function(){
    // document.getElementById("bottom-container").classList.add('d-none');
})


