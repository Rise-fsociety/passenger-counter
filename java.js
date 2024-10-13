
let countEl = document.getElementById('counter-el');
let resultEl = document.getElementById('result');

let count = 0;
function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let counStr = count  + ' + '
    resultEl.textContent += counStr
    count = 0 ;
    countEl.innerText = 0
}
