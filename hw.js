let taqyryp = document.querySelector('#title');
taqyryp.textContent = "HW: Introduction to DOM";

let aty = document.getElementById('name');
aty.textContent = "Zhalel Akerke";

let hobbylar = document.getElementsByClassName('hobby');
let hobbies = ["<b>Drawing</b>", "<b>Sleeping</b>", "<b>Watching phone</b>"];

for (let i = 0; i < hobbylar.length; i++) {
    hobbylar[i].innerHTML = hobbies[i]; 
}