import Character from './Character';

export default class Team {
  constructor() {
    this.team = [];
  }

  addAll(...characters) {
    for (const character of characters) {
      this.team.push(character);
    }
    return [...this.team];
  }

  * [Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield

    for (const item of this.team) {
      yield item;
    }
  }
}

const daemon = new Character('DDD', 'Daemon');
const magician = new Character('MMM', 'Magician');
const undead = new Character('UUU', 'Undead');
const team = new Team();
team.addAll(daemon, magician, undead);
const generator = team[Symbol.iterator]();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
