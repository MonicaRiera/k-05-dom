Array.from(document.getElementsByClassName('selected'))
.forEach(e => {
	if (!e.classList.contains('primary')) {
		e.classList.remove('selected')
	}
})
