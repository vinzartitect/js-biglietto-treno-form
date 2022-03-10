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
        carrozze_treno = Math.floor(Math.random() * carrozze_treno) + 1;
        posti_carrozza = Math.floor(Math.random() * posti_carrozza) + 1;            
        let carrozza_posto_pass = carrozze_treno + " - " + posti_carrozza;
        console.log (carrozza_posto_pass);

        // Stampa numero carrozza e posto passeggero 
        document.getElementById("carrozza_posto_pass").innerHTML = carrozza_posto_pass;
        
        // Codice CP (numero casuale tra 90000 e 100000 escluso)
        let numero_ticket_pass = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        console.log(numero_ticket_pass);

        // Stampa del Codice CP
        document.getElementById("numero_ticket_pass").innerHTML = numero_ticket_pass;
        

        // COSTO BIGLIETTO - calcolo prezzo del biglietto
        let euro_per_km = 0.21;
        let prezzo_ticket_standard = (km_pass * euro_per_km);
            
            // creazione variabile vuota 
        let prezzo_ticket_pass;  

        if (eta_pass == "standard") {

             // Stampa biglietto base
            document.getElementById("offerta_pass").innerHTML = "Biglietto Standard";
            prezzo_ticket_pass = prezzo_ticket_standard;

        } else if (eta_pass == "underage") {

            let prezzo_ticket_minorenne = (prezzo_ticket_standard * 0.8);
             // Stampa biglietto minorenne
            document.getElementById("offerta_pass").innerHTML = "Sconto Minorenni";
            prezzo_ticket_pass = prezzo_ticket_minorenne;

        } else if (eta_pass == "over65") {

            let prezzo_ticket_over65 = (prezzo_ticket_standard * 0.6);
             // Stampa biglietto anziano
            document.getElementById("offerta_pass").innerHTML = "Sconto Over 65";
            prezzo_ticket_pass = prezzo_ticket_over65;

        }

        
        //output del prezzo finale con massimo due decimali
        prezzo_ticket_pass = prezzo_ticket_pass.toFixed(2);
        
        // Stampa prezzo finale
        document.getElementById('prezzo_ticket_pass').innerHTML = `${prezzo_ticket_pass} €`;
 
    }

)