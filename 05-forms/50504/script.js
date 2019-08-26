const checkInput = input => {
	let id = 'name'
	let min = 3

	if (input.type == 'password') {
		id = 'password'
		min = 9
	}

	let span = Array.from(document.getElementById(id).getElementsByClassName('error'))[0]
	if (input.value.length < min) {
		span.innerHTML = `At least ${min} characters`
	} else {
		span.innerHTML = ''
	}
}
