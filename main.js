const $btnKick = document.getElementById('btn-kick');
const $btnMegaPunch = document.getElementById('btn-mega-punch');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),

    renderHP() {
        this.renderHPLife();
        this.renderProgressbarHP();
    },

    renderHPLife() {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    },

    renderProgressbarHP() {
        this.elProgressbar.style.width = this.damageHP + '%';
        this.elProgressbar.style.backgroundColor = this.damageHP > 50 ? 'green' : this.damageHP > 20 ? 'orange' : 'red';
    },

    changeHP(count) {
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert(this.name + ' is defeated!');
        } else {
            this.damageHP -= count;
        }
        this.renderHP();
    }
};

const enemy1 = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),

    renderHP: character.renderHP,
    renderHPLife: character.renderHPLife,
    renderProgressbarHP: character.renderProgressbarHP,
    changeHP: character.changeHP
};

const enemy2 = {
    name: 'Bulbasaur',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy2'),
    elProgressbar: document.getElementById('progressbar-enemy2'),

    renderHP: character.renderHP,
    renderHPLife: character.renderHPLife,
    renderProgressbarHP: character.renderProgressbarHP,
    changeHP: character.changeHP
};

$btnKick.addEventListener('click', function () {
    console.log('Thunder Jolt');
    enemy1.changeHP(random(15));
    enemy2.changeHP(random(20));
});

$btnMegaPunch.addEventListener('click', function () {
    console.log('Mega Punch');
    enemy1.changeHP(random(35));
    enemy2.changeHP(random(40));
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy1.renderHP();
    enemy2.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();

