const $btnKick = document.getElementById('btn-kick');
const $btnMegaPunch = document.getElementById('btn-mega-punch');
const $logs = document.createElement('div');
$logs.id = 'logs';
document.body.appendChild($logs);

const logs = [
    '[PERSON #1] remembered something important, but suddenly [PERSON #2], not remembering himself out of fright, hit the enemy`s forearm.',
    '[PERSON #1] choked, and for this [PERSON #2], out of fright, delivered a direct knee to the enemy`s forehead.',
    '[PERSON #1] was forgotten, but at this time the brazen [PERSON #2], having made a strong-willed decision, silently approached from behind and struck.',
    '[PERSON #1] regained consciousness, but unexpectedly [PERSON #2] accidentally struck him with a powerful blow.',
    '[PERSON #1] choked, but at the same time [PERSON #2] reluctantly crushed the enemy with his fist.',
    '[PERSON #1] was surprised, and [PERSON #2] staggered and threw a mean punch.',
    '[PERSON #1] blew his nose, but suddenly [PERSON #2] threw a split punch.',
    '[PERSON #1] staggered, and suddenly the brazen [PERSON #2] kicked the opponent`s leg for no reason.',
    '[PERSON #1] was upset when suddenly, unexpectedly, [PERSON #2] accidentally kicked his opponent in the stomach.',
    '[PERSON #1] was trying to say something, but suddenly, unexpectedly, [PERSON #2], out of boredom, smashed his opponent`s eyebrow.'
];

let currentLogIndex = logs.length - 1;

const createPlayer = (name, elHP, elProgressbar) => ({
    name,
    defaultHP: 100,
    damageHP: 100,
    elHP,
    elProgressbar,

    renderHP() {
        const { damageHP, defaultHP, elHP, elProgressbar } = this;
        elHP.innerText = `${damageHP} / ${defaultHP}`;
        elProgressbar.style.width = `${damageHP}%`;
        elProgressbar.style.backgroundColor = damageHP > 50 ? 'green' : damageHP > 20 ? 'orange' : 'red';
    },

    changeHP(count) {
        this.damageHP = Math.max(0, this.damageHP - count);
        this.renderHP();
        return count;
    },

    logHit(damage, attacker) {
        const logText = logs[currentLogIndex]
            .replace('[PERSON #1]', this.name)
            .replace('[PERSON #2]', attacker.name);

        const message = `${logText} -${damage} [${this.damageHP} HP left]`;
        const $p = document.createElement('p');
        $p.innerText = message;
        $logs.insertBefore($p, $logs.firstChild);

        currentLogIndex = (currentLogIndex - 1 + logs.length) % logs.length;
    },

    checkDefeat() {
        if (this.damageHP <= 0) {
            alert(`${this.name} is defeated!`);
        }
    }
});

const character = createPlayer('Pikachu', document.getElementById('health-character'), document.getElementById('progressbar-character'));
const enemy1 = createPlayer('Charmander', document.getElementById('health-enemy'), document.getElementById('progressbar-enemy'));
const enemy2 = createPlayer('Bulbasaur', document.getElementById('health-enemy2'), document.getElementById('progressbar-enemy2'));

$btnKick.addEventListener('click', function () {
    fight(character, enemy1, random(20));
    fight(character, enemy2, random(20));
    fight(enemy1, character, random(10));
    fight(enemy2, character, random(10)); 
});

$btnMegaPunch.addEventListener('click', function () {
    fight(character, enemy1, random(35));
    fight(character, enemy2, random(35));
    fight(enemy1, character, random(15));
    fight(enemy2, character, random(15));
});

function fight(attacker, defender, damage) {
    const inflictedDamage = defender.changeHP(damage);
    defender.logHit(inflictedDamage, attacker);
    defender.checkDefeat();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function init() {
    character.renderHP();
    enemy1.renderHP();
    enemy2.renderHP();
    console.log('Start Game!');
}

init();
