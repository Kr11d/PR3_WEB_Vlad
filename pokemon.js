import { random } from './utils.js';
import { logs, $logs } from './main.js';

export class Pokemon {
    constructor(name, elHP, elProgressbar) {
        this.name = name;
        this.defaultHP = 100;
        this.damageHP = 100;
        this.elHP = elHP;
        this.elProgressbar = elProgressbar;
    }

    renderHP() {
        const { damageHP, defaultHP, elHP, elProgressbar } = this;
        elHP.innerText = `${damageHP} / ${defaultHP}`;
        elProgressbar.style.width = `${damageHP}%`;
        elProgressbar.style.backgroundColor = damageHP > 50 ? 'green' : damageHP > 20 ? 'orange' : 'red';
    }

    changeHP(count) {
        this.damageHP = Math.max(0, this.damageHP - count);
        this.renderHP();
        return count;
    }

    logHit(damage, attacker) {
        const logText = logs[logs.length - 1]
            .replace('[PERSON #1]', this.name)
            .replace('[PERSON #2]', attacker.name);

        const message = `${logText} -${damage} [${this.damageHP} HP left]`;
        const $p = document.createElement('p');
        $p.innerText = message;
        $logs.insertBefore($p, $logs.firstChild);

        logs.unshift(logs.pop()); 
    }

    checkDefeat() {
        if (this.damageHP <= 0) {
            alert(`${this.name} is defeated!`);
        }
    }
}
