import { Pokemon } from './pokemon.js';
import { random } from './utils.js';

export const logs = [
    '[PERSON #1] remembered something important, but suddenly [PERSON #2], not remembering himself out of fright, hit the enemys forearm.',
    '[PERSON #1] choked, and for this [PERSON #2], out of fright, delivered a direct knee to the enemys forehead.',
    '[PERSON #1] was forgotten, but at this time the brazen [PERSON #2], having made a strong-willed decision, silently approached from behind and struck.',
    '[PERSON #1] regained consciousness, but unexpectedly [PERSON #2] accidentally struck him with a powerful blow.',
    '[PERSON #1] choked, but at the same time [PERSON #2] reluctantly crushed the enemy with his fist.',
    '[PERSON #1] was surprised, and [PERSON #2] staggered and threw a mean punch.',
    '[PERSON #1] blew his nose, but suddenly [PERSON #2] threw a split punch.',
    '[PERSON #1] staggered, and suddenly the brazen [PERSON #2] kicked the opponents leg for no reason.',
    '[PERSON #1] was upset when suddenly, unexpectedly, [PERSON #2] accidentally kicked his opponent in the stomach.',
    '[PERSON #1] was trying to say something, but suddenly, unexpectedly, [PERSON #2], out of boredom, smashed his opponents eyebrow.'
];

export const $logs = document.createElement('div');
$logs.id = 'logs';
document.body.appendChild($logs);

const $btnKick = document.getElementById('btn-kick');
const $btnMegaPunch = document.getElementById('btn-mega-punch');

const character = new Pokemon('Pikachu', document.getElementById('health-character'), document.getElementById('progressbar-character'));
const enemy1 = new Pokemon('Charmander', document.getElementById('health-enemy'), document.getElementById('progressbar-enemy'));
const enemy2 = new Pokemon('Bulbasaur', document.getElementById('health-enemy2'), document.getElementById('progressbar-enemy2'));

function fight(attacker, defender, damage) {
    const inflictedDamage = defender.changeHP(damage);
    defender.logHit(inflictedDamage, attacker);
    defender.checkDefeat();
}

$btnKick.addEventListener('click', () => {
    fight(character, enemy1, random(10));
    fight(character, enemy2, random(10));
    fight(enemy1, character, random(5));
    fight(enemy2, character, random(5));
});

$btnMegaPunch.addEventListener('click', () => {
    fight(character, enemy1, random(35));
    fight(character, enemy2, random(35));
    fight(enemy1, character, random(15));
    fight(enemy2, character, random(15));
});

function init() {
    character.renderHP();
    enemy1.renderHP();
    enemy2.renderHP();
    console.log('Start Game!');
}

init();
