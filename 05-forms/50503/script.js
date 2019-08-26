const checkErrors = event => {
	event.preventDefault()
	let message = document.getElementById('message')
	if (document.getElementById('email').value.includes('@')) {
		message.innerHTML = 'Thank you for signing up'
		message.classList.add('success')
	} else {
		message.innerHTML = 'Sorry, please provide a valid email address'
		message.classList.add('error')
	}
}
