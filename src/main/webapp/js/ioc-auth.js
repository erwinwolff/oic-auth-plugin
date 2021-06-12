
function disableInput(inputName) {
const fullNameInput = document.getElementsByName(inputName);

if (fullNameInput && fullNameInput[0]) {
	fullNameInput[0].disabled = true;
	fullNameInput[0].style.backgroundColor = "#ccc";
}

}

window.onload = function () {

	disableInput("_.fullName");
	disableInput("_.description");
	disableInput("email.address");
	alert("test");
}
