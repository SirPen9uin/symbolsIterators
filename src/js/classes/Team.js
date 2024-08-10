export default class Team {
	constructor() {
		this.members = new Set();
	}

	[Symbol.iterator]() {

		const members = this.toArray();

		let currentMemberIndex = 0;

		return {
			next() {
				if (currentMemberIndex < members.length) {
					const value = members[currentMemberIndex];

					currentMemberIndex += 1;

					return { done: false, value };
				}

				return { done: true };
			},
		};
	}

	add(characher) {
		if (this.members.has(characher)) {
			throw new Error('Character is already in the team');
		}

		return this.members.add(characher);
	}

	addAll(...characters) {
		characters.forEach((character) => {
			if (!this.members.has(character)) {
				this.members.add(character);
			}
		});

		return this.members;
	}

	toArray() {
		return [...this.members];
	}
}