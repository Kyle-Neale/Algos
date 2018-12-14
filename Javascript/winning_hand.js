/***********************************************************************
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points

Examples:

winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
winningHand('KJKJ', 'QQQK'); // => 'QQQK'
winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
winningHand('KJKJ', 'QQQQ'); // => 'DRAW'
***********************************************************************/

function winningHand(hand1, hand2) {
	if (getScore(hand1) > getScore(hand2)) {
		return hand1;
	} else if (getScore(hand1) < getScore(hand2)) {
		return hand2
	} else {
		return 'DRAW';
		}
	}

function getScore(string) {
	var scoreTotal = 0;
	var score = {
		'J' : 1,
		'Q' : 2,
		'K' : 3
	};
	for (var i = 0; i < string.length; i++) {
		var card = string[i]
  	if (score[card] !== undefined) {

		  scoreTotal += score[card];
	  }
	}
	return scoreTotal;
}
