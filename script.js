const input = document.querySelector('.write')
const tag_p = document.querySelector('.txt')


let sumTime = 0;
let timeOut;

input.addEventListener('input', (e) => {
    let date = new Date();
    let eventStartTime = date.getTime();
    if ((eventStartTime - sumTime) < 300) {
        clearTimeout(timeOut)
    }
    timeOut = setTimeout(() => {
        tag_p.innerHTML = input.value;
    }, 300)
    sumTime = eventStartTime + 300;
})

