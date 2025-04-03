const n = 10; // Definisco una variabile che conta quanto email gnerare

for (i = 0; i < n; i++) { // Creo un ciclo che mi ripete la chiamata per n volte
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(resp => { // Faccio la chimata AJAX
        email = resp.data.response // Metto il valore dentro la variabile email
        let li = document.createElement(`li`); // Creo un elemento li 
        li.innerHTML = email; // Inserisco il valore ricevuto prima dalla chiamata AJAX dentro il tag li
        document.querySelector(`ul`).appendChild(li); // Lo inserisco dentro la lista
    })
}
