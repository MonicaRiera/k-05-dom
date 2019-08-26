const checkName = name => {
	if (name.value.length <= 2) {
		console.log('I WANT MORE')
	} else {
		console.log('Enough')
	}
}

const checkPassword = pass => {
	if (pass.value.length <= 8) {
		console.log('I WANT MORE')
	} else {
		console.log('Enough')
	}
}

// How to call a child element?
