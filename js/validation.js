/* MAIN JAVASCRIPT END LISTENER */

document.addEventListener("DOMContentLoaded", () => { 

	/* QUERY INPUTS VARS */

	const name = document.querySelector("#name")
	const correo = document.querySelector("#correo")
	const subject = document.querySelector("#subject")
	const text = document.querySelector("#text")
	const submit = document.querySelector("#submit")

	/* QUERY RED WARNINGS VARS */

	const rw_name = document.querySelector("#rw_name")
	const rw_correo = document.querySelector("#rw_correo")
	const rw_subject = document.querySelector("#rw_subject")
	const rw_text = document.querySelector("#rw_text")

	/* DISABLE SUBMIT BUTTON */

	submit.disabled = "disabled"

	/* FUNCTION CHECK INPUT */

	const checkInput = () => {
		if (name.value !== "" && correo.value !== "" && subject.value !== "" && text.value !== "") {
			
			/* REMOVE DISABLE STATE FROM SUBMIT BUTTON */

			submit.disabled = ""
		} else {

			/* RESTORE DISABLE STATE DROM SUBMIT BUTTON */

			submit.disabled = "disabled"
		}
	}

	/* RED WARNING CORE CHECK */

	const redWarning = () => {
		if (name.value == "") {
			rw_name.classList.replace("invisible", "visible");
		} else rw_name.classList.replace("visible", "invisible");
	}

	const redWarning2 = () => {
		if (correo.value == "") {
			rw_correo.classList.replace("invisible", "visible");
		} else rw_correo.classList.replace("visible", "invisible");
	}

	const redWarning3 = () => {
		if (subject.value == "") {
			rw_subject.classList.replace("invisible", "visible");
		} else rw_subject.classList.replace("visible", "invisible");
	}

	const redWarning4 = () => {
		if (text.value == "") {
			rw_text.classList.replace("invisible", "visible");
		} else rw_text.classList.replace("visible", "invisible");
	}

	/* CHECK INPUT EVENT */

	name.addEventListener("change", checkInput)
	correo.addEventListener("change", checkInput)
	subject.addEventListener("change", checkInput)
	text.addEventListener("change", checkInput) 

	/* CHECK INPUT EVENT RED WARNING */

	name.addEventListener("keyup", redWarning)
	correo.addEventListener("keyup", redWarning2)
	subject.addEventListener("keyup", redWarning3)
	text.addEventListener("keyup", redWarning4)

})

/* END OF FILE */