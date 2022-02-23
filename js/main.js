const username = document.getElementById("user-name");

const distance = document.getElementById("user-distance");

const userAge = document.getElementById("user-age");

document.getElementById("create-ticket").addEventListener("click", function(){
    
    // Rimozione classe d-none per far comparire il bottom-container
    document.getElementById("bottom-container").classList.remove('d-none');

    let newDistance=parseInt(distance.value);

    let ticketPrice=newDistance * 0.27;
    let ticketPromo;

        // Condizioni per sconto clienti
    if (userAge.value == "young"){ // condizione se il cliente è minorenne
        ticketPrice = (ticketPrice * 0.83);
        ticketPromo = "Biglietto minorenni";
    } else if (userAge.value == "older") {  // condizione se il cliente ha più di 65 anni
        ticketPrice = (ticketPrice * 0.67);
        ticketPromo = "Biglietto over 65 anni";
    } else if (userAge.value == "standard"){ // condizione per tutti gli altri casi
        ticketPrice = ticketPrice;
        ticketPromo = "Biglietto Standard";
    };

    document.getElementById("ticket-username").innerHTML=username.value;
    // username.value="";

    document.getElementById("ticket-price").innerHTML=ticketPrice.toFixed(2) + "€";
    // distance.value="";

    document.getElementById("ticket-promo").innerHTML=ticketPromo;

    document.getElementById("number-wagon").innerHTML=Math.floor((Math.random()*10)+1);
    document.getElementById("ticket-number").innerHTML=Math.floor(Math.random()*100000);
});


// Funzione per aggiungere la classe d-none al bottom container e per resettare le informazioni
document.getElementById("delete-all").addEventListener("click", function(){
    document.getElementById("bottom-container").classList.add('d-none');
    username.value="";
    userAge.value="";
    distance.value="";
    document.getElementById("ticket-username").innerHTML="";
    document.getElementById("ticket-price").innerHTML="";
    document.getElementById("ticket-promo").innerHTML="";
    document.getElementById("number-wagon").innerHTML="";
    document.getElementById("ticket-number").innerHTML="";
})


