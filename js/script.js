// Funtions
const createListItem = (value) => {
    let li = document.createElement(`li`); // Creo un elemento li 
    li.innerHTML = email; // Inserisco il valore ricevuto prima dalla chiamata AJAX dentro il tag li
    document.querySelector(`ul`).appendChild(li); // Lo inserisco dentro la lista
};

const generateRandomEmail = (x) => {
    for (i = 0; i < x; i++) { // Creo un ciclo che mi ripete la chiamata per x volte, dove x è il numero inserito dall'utente
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(resp => { // Faccio la chimata AJAX
            email = resp.data.response // Metto il valore dentro la variabile email
            createListItem(email) // Richiamo la funzione
        })
    }
}

const n = parseInt(prompt(`Quante email vuoi generare?`)); // Definisco una variabile che conta quanto email generare

generateRandomEmail(n); // Richiamo la funzione che effettua la chiamata AJAX passandogli il valore inserito dall'utente


