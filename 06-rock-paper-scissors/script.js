let result = 0

const play = hand => {
	let resp = Math.round(Math.random()*2)

	let options = Array.from(document.getElementById('opponent').getElementsByClassName('option'))

	options.forEach(e => {
		e.classList.add('hidden')
	})

	options[resp].classList.remove('hidden')
	let outcome = ''

	if (hand == options[resp].id) {
		outcome = 'TIE'
	} else if (resp == 0) {
		if (hand == 'paper') {
			outcome = 'YOU WIN'
			result ++
		} else {
			outcome = 'YOU LOSE'
			result --
		}
	} else if (resp == 1) {
		if (hand == 'scissors') {
			outcome = 'YOU WIN'
			result ++
		} else {
			outcome = 'YOU LOSE'
			result --
		}
	} else {
		if (hand == 'rock') {
			outcome = 'YOU WIN'
			result ++
		} else {
			outcome = 'YOU LOSE'
			result --
		}
	}

	document.getElementById('outcome').innerHTML = `<div>${result}</div><div>${outcome}</div>`

}
