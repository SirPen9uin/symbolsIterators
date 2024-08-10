import CharacterTypes from '../data/CharacterTypes';

const characterTypes = Object.values(CharacterTypes);

export default class Character {
	constructor(name, type, health = 100, level = 1, attack = 0, defence = 0) {
		if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
			this.name = name;
		} else {
			throw new Error('Name should be a string with a length from 2 to 10 letters');
		}

		if (characterTypes.includes(type)) {
			this.type = type;
		} else {
			throw new Error(`Character should be one of a type: ${characterTypes.join(', ')}`);
		}

		this.health = health;
		this.level = level;
		this.attack = attack;
		this.defence = defence;
	}
}