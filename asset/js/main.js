// creo la variabile riferita al button 
let bottoneGenera = document.getElementById('btn_gen_ticket');

// azione pressione sul bottone 
bottoneGenera.addEventListener('click',
    function() {

        // indico le variabili dei dati utente 
        let nome_pass = document.getElementById('nome_pass').value;
        let km_pass = document.getElementById('km_pass').value;
        let eta_pass = document.getElementById('eta_pass').value;

        // indico la variabile del biglietto
        let display_none = document.getElementById("display_none");

        // Stampa del nome-cognome passeggero sul biglietto
        document.getElementById('nome_cognome').innerHTML = nome_pass;

        // Numero carrozza e posto
        // considero che il treno abbia 8 carrozze e ci siano 50posti a carrozza
        let carrozze_treno = 8;
        let posti_carrozza = 50;
        let carrozze_treno = Math.floor(Math.random() * carrozze_treno) + 1;
        let posti_carrozza = Math.floor(Math.random() * posti_carrozza) + 1;            
        let carrozza_posto_pass = carrozze_treno + " - " + posti_carrozza;
        console.log (carrozza_posto_pass);



    }

)