window.onload = () => {
	var form = document.querySelector('form')
	var pristine = new Pristine(form)

	form.addEventListener('submit', (e) => {
		e.preventDefault()
		var valid = pristine.validate()

		if (valid) {
			pristine.reset()
			form.reset()
		}
	})
}
