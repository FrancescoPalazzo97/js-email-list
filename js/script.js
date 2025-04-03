const emailApi = `https://flynn.boolean.careers/exercises/api/random/mail`

// Functions

const createListItem = (value) => {
    let li = document.createElement(`li`); // Creo un elemento li 
    li.innerHTML = value; // Inserisco il valore ricevuto prima dalla chiamata AJAX dentro il tag li
    document.querySelector(`ul`).appendChild(li); // Lo inserisco dentro la lista
};

const generateRandomEmail = (x) => {
    for (i = 0; i < x; i++) { // Creo un ciclo che mi ripete la chiamata per x volte, dove x è il numero inserito dall'utente
        axios.get(emailApi).then(resp => { // Faccio la chimata AJAX
            email = resp.data.response // Metto il valore dentro la variabile email
            createListItem(email) // Richiamo la funzione
        })
    }
}

// Funzione che resetta la lista
const resetListItem = () => document.querySelector(`ul`).innerHTML = ``

//const n = parseInt(prompt(`Quante email vuoi generare?`)); // Definisco una variabile che conta quanto email generare
//Dichiaro le variabili necessarie
const n = 10;

generateRandomEmail(n); // Richiamo la funzione che effettua la chiamata AJAX passandogli il valore di item da generare

document.querySelector(`button`).addEventListener(`click`, () => { // Bonus: inserisco l'evento al click
    resetListItem(); // Richiamo la funzione che resetta la lista
    generateRandomEmail(n);// Richiamo nuovamente la funzione che effettua la chiamata AJAX passandogli il valore di item da generare
}
);
