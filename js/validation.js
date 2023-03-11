
function validation() {
	const name = document.getElementById('Form-name3').value;
	const nameLast = document.getElementById('Form-lastName').value;
	const mail = document.getElementById('Form-mail').value;
	const text = document.getElementById('message').value;


	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	mail.match(mailformat)

	if (mail.match(mailformat)) {
		document.getElementsByClassName("validation")[0].setAttribute("style", "display: no;color: red;");
		// name.value = "";
		document.getElementById('Form-name3').value = "";
		document.getElementById('Form-lastName').value = "";
		document.getElementById('Form-mail').value = "";
		document.getElementById('message').value = "";

	} else {
		document.getElementsByClassName("validation")[0].setAttribute("style", "display: block;color: red;");
	}
}














