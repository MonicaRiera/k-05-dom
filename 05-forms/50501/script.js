const changeStatus = e => {
	let status = 'on'
	if (e.innerHTML == 'ON') {
		status = 'off'
	}
	e.classList.add(status)
	e.classList.remove(e.innerHTML.toLowerCase())
	e.innerHTML = status.toUpperCase()
}
