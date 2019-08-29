// let result = 0
// let options = ['rock', 'paper', 'scissors']
// let outcome = ''
//
// const toggleOpponent = (resp) => {
// 	Array.from(document.getElementById('opponent').getElementsByClassName('option')).forEach(e => {
// 		e.id == options[resp] ? e.classList.remove('hidden') : e.classList.add('hidden')
// 	})
// }
//
// const checkWinner = (resp, hand) => {
// 	if (resp == options.indexOf(hand)) {
// 		outcome = 'TIE'
// 	} else if (options.indexOf(hand) == options.length-1 && !resp || resp > options.indexOf(hand)) {
// 		outcome = 'YOU LOSE'
// 		result --
// 	} else {
// 		outcome = 'YOU WIN'
// 		result ++
// 	}
// }
//
// const play = hand => {
// 	let resp = Math.round(Math.random()*2)
// 	toggleOpponent(resp)
//
// 	checkWinner(resp, hand)
//
// 	document.getElementById('outcome').innerHTML = `<div>${result}</div><div>${outcome}</div>`
// }
// DOM

let opponent = document.getElementById('opponent')
let outcomeDOM = document.getElementById('outcome')

// DATA

let options = ['rock', 'paper', 'scissors']
let outcome = ''
let score = 0

// FUNCTIONS

const makeRandomChoice = () => {
	return options[Math.floor(Math.random() * 3)]
}

const toggleOptions = (choice) => {
	Array.from(opponent.getElementsByClassName('option')).forEach(o => o.classList.add('hidden'))
	document.getElementById(choice).classList.remove('hidden')
}

const checkWinner = (player, opponent) => {
	if (player === opponent) {
		outcome = 'tie'
	} else if (options.indexOf(player) < options.indexOf(opponent) && ( options.indexOf(player) != 0 && options.indexOf(opponent) != options.length - 1 ) || options.indexOf(player) === options.length - 1 && options.indexOf(opponent) == 0) {
		outcome = 'lose'
		score--
	} else {
		outcome = 'win'
		score++
	}
	return {outcome, score}
}

const play = (playerChoice) => {
	let opponentChoice = makeRandomChoice()
	toggleOptions(opponentChoice)
	let result = checkWinner(playerChoice, opponentChoice)
	outcomeDOM.innerHTML = `${result.outcome}<br>${result.score}`
}
