const sliderValue = document.querySelector('span');
const inputSlider = document.querySelector('input');

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseLetters = letters.map(el => el.toUpperCase());
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['?', '*', '%', '!', '@', '$', '#', '^',];
const allArrays = [letters, uppercaseLetters, numbers, symbols];
const countPasswords = 5;
let constructor = [...letters].sort(random);
let length = inputSlider.value;
const ckeckbox = document.querySelectorAll('input[type="checkbox"]');

//First generation of passwords
for(let i = 0; i < countPasswords; i++){
    let out = '';
    for(let z = 0; z < length; z++){
        out += constructor[z];
    }
    constructor.sort(random);
    let password = document.createElement('div');
    password.classList.add('password');
    password.innerText = out;
    document.querySelector('.password_list').append(password);     
}

inputSlider.oninput= () => {
    let value = inputSlider.value;
    length = value;
    generatePasswords();
    sliderValue.textContent = 'length ' + value;
    sliderValue.style.left = (value * 4.398 - 21) + '%';
};


function generatePasswords() {
    constructor.sort(random);
    for(let i = 0; i < document.querySelectorAll('.password').length; i++){
        let out = '';
        for(let z = 0; z < length; z++){
            out += constructor[z];
        }
        constructor.sort(random);
        document.querySelectorAll('.password')[i].innerText = out;
        out = '';
    }
}
// Random number
function random() {
    return Math.random() - 0.5;
}


for(let i = 0; i <  ckeckbox.length; i++){
    ckeckbox[i].onchange = function ()  {
        if (this.checked){
            constructor = constructor.concat(allArrays[i+1]);
        } else {
            constructor = constructor.filter(el => !allArrays[i+1].includes(el))
        }
        generatePasswords();
    }
}


document.addEventListener('click', e => {
    if (e.target.classList.contains('refresh')){
        generatePasswords();
    }
});





