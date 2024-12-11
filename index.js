// let taqyryp = document.getElementById('title')
// console.log(taqyryp.textContent);

// let textter = document.getElementsByClassName('text')
// console.log(textter[0].textContent)
// console.log(textter[1].textContent)
// console.log(textter[2].textContent)
// for (let element of textter){
//     console.log(element.textContent)
// }
// for (let i=0;i<textter.length;i++){
//     console.log(textter[i].textContent)
// }

// let taqyryp = document.querySelector('.text')
// console.log(taqyryp.textContent)

// let textter = document.querySelectorAll('#title')
// console.log(textter[0].textContent)

let taqyryby = document.getElementById('news-title');
taqyryby.textContent = 'JavaScript жаңартулары';

let mazmuny = document.getElementById('news-content');
mazmuny.innerHTML = 'JavaScript бағдарламалау әлеміндегі ең соңғы жаңалықтарды оқыңыз.';

let link = document.getElementById('news-link');
link.href = 'https://example.com/news/javascript-updates';
