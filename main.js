const $btnKick = document.getElementById('btn-kick');
const $btnMegaPunch = document.getElementById('btn-mega-punch');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
};

const enemy1 = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
};

const enemy2 = {
    name: 'Bulbasaur',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy2'),
    elProgressbar: document.getElementById('progressbar-enemy2')
};

$btnKick.addEventListener('click', function () {
    console.log('Thunder Jolt');
    changeHP(random(15), character);
    changeHP(random(20), enemy1);
    changeHP(random(20), enemy2);
});

$btnMegaPunch.addEventListener('click', function () {
    console.log('Mega Punch');
    changeHP(random(35), character);
    changeHP(random(40), enemy1);
    changeHP(random(40), enemy2);
});

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy1);
    renderHP(enemy2);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
    person.elProgressbar.style.backgroundColor = person.damageHP > 50 ? 'green' : person.damageHP > 20 ? 'orange' : 'red';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert(person.name + ' is defeated!');
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
