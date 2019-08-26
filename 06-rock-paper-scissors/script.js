let result = 0
let options = ['rock', 'paper', 'scissors']
let outcome = ''

const play = hand => {
	let resp = Math.round(Math.random()*2)

	Array.from(document.getElementById('opponent').getElementsByClassName('option')).forEach(e => {
		e.id == options[resp] ? e.classList.remove('hidden') : e.classList.add('hidden')
	})

	if (resp == options.indexOf(hand)) {
		outcome = 'TIE'
	} else if (options.indexOf(hand) == options.length-1 && !resp || resp > options.indexOf(hand)) {
		outcome = 'YOU LOSE'
		result --
	} else {
		outcome = 'YOU WIN'
		result ++
	}

	document.getElementById('outcome').innerHTML = `<div>${result}</div><div>${outcome}</div>`

}
