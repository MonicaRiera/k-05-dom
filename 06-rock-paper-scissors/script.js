let result = 0
let options = ['rock', 'paper', 'scissors']

const play = hand => {
	let resp = Math.round(Math.random()*2)

	let opponent = Array.from(document.getElementById('opponent').getElementsByClassName('option'))

	opponent.forEach(e => {
		e.classList.add('hidden')
	})

	opponent[resp].classList.remove('hidden')
	let outcome = ''

	if (resp == options.indexOf(hand)) {
		outcome = 'TIE'
	} else if (!resp) {
		if (options.indexOf(hand) == options.length-1) {
			outcome = 'YOU LOSE'
			result --
		} else {
			outcome = 'YOU WIN'
			result ++
		}
	} else {
		if (resp > options.indexOf(hand)) {
			outcome = 'YOU LOSE'
			result --
		} else {
			outcome = 'YOU WIN'
			result ++
		}
	}

	// if (hand == options[resp].id) {
	// 	outcome = 'TIE'
	// } else if (resp == 0) {
	// 	if (hand == 'paper') {
	// 		outcome = 'YOU WIN'
	// 		result ++
	// 	} else {
	// 		outcome = 'YOU LOSE'
	// 		result --
	// 	}
	// } else if (resp == 1) {
	// 	if (hand == 'scissors') {
	// 		outcome = 'YOU WIN'
	// 		result ++
	// 	} else {
	// 		outcome = 'YOU LOSE'
	// 		result --
	// 	}
	// } else {
	// 	if (hand == 'rock') {
	// 		outcome = 'YOU WIN'
	// 		result ++
	// 	} else {
	// 		outcome = 'YOU LOSE'
	// 		result --
	// 	}
	// }

	document.getElementById('outcome').innerHTML = `<div>${result}</div><div>${outcome}</div>`

}
