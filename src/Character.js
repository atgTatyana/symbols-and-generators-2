export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2-х до 10 символов');
    }

    if (!types.includes(type)) {
      const typesString = types.join(', ');
      throw new Error(`Разрешенные персонажи: ${typesString}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
