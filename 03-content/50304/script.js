let products = document.getElementById('products')

Array.from(document.getElementsByClassName('product'))
.forEach(e => {
	products.innerHTML += `<div class="product">${e.innerHTML}</div>`
	e.innerHTML = ''
	e.classList.remove('product')
})

// How to remove html elements from JS?
