"use strict"; 

// Declaro las variables
let firstName = document.getElementById('name');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let queryUser = document.getElementById('queryUser');
let btnSubmit = document.getElementById('btnSubmit');

console.log(queryUser);

// Creo arreglo para contener la informacion 
let information = [];

// Cuando haga click en el boton, guarda la informacion en el arreglo
btnSubmit.addEventListener("click", (e) => {
    // Frenamos el comportamiento default del submit
    e.preventDefault();

    information[0]= firstName.value;
    information[1]=lastName.value;
    information[2]=email.value;
    information[3]=phoneNumber.value;
    information[4]= queryUser.value; 

    // Le doy el arreglo como texto plano y me salva un archivo txt
    let blob = new Blob([information],{type:"text/plain;charset=uft-8"});
    saveAs(blob,"contacto.txt");
})