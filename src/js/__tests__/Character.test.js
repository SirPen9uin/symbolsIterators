import Character from '../classes/Character';
import CharacterTypes from '../data/CharacterTypes';

test.each([
	['number', 10],
	['less then 2', 'i'],
	['longer then 10', 'abandonment'],
	])('character creation with name exception', (_, name) => {
		expect(() => new Character(name, CharacterTypes.bowman)).toThrow(Error);
});

test('character creation with type exception', () => {
	expect(() => new Character('character', 'Character')).toThrow(Error);
});

test('character creation', () => {
	const result = new Character('character', CharacterTypes.bowman);

	expect(result).toEqual({
		name: 'character',
		type: 'Bowman',
		health: 100,
		level: 1,
		attack: 0,
		defence: 0,
	});
});