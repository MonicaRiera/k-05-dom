const sumNum = () => {
	sum = 0
	Array.from(document.getElementsByClassName('number'))
	.forEach(e => {
		sum += Number(e.value)
	})
	document.getElementById('total').innerHTML = sum
}
