/***********************************************************************
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.

Examples:

nickname('manuel'); // => 'MANU-MANU'
nickname('pikachu'); // => 'PIKA-PIKA'
nickname('bootcamp'); // => 'BOO-BOO'
nickname('bob'); // => 'BOB-BOB'
***********************************************************************/


function nickname(name) {
	var newName = ''
	var vowels = 'aeiou';
	var vowelCounter = 0
	for (var i = 0; i < name.length; i++) {
		var char = name[i];
		if (vowels.includes(char)) {
			vowelCounter++;
			if (vowelCounter === 2) {
				break;
			}
		}
	}
  	newName = name.slice(0, i + 1).toUpperCase() + '-' + name.slice(0, i + 1).toUpperCase();
	return newName;
}
