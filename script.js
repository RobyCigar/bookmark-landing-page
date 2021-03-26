function showTab(e, contentIndex) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("underscore");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(
			" underscore",
			""
		);
	}
	document.getElementsByClassName("tabcontent")[contentIndex].style.display =
		"block";
	e.currentTarget.className += " underscore";
}

function toggleQuestion(e, id) {
	if (document.getElementById(id).style.display == "none") {
		document.getElementById(id).style.display = "";
		e.target.nextElementSibling.className = 'rotate'
	} else {
		document.getElementById(id).style.display = "none";
		e.target.nextElementSibling.className = ''
	}
}

function burger(e) {
	const closeIcon = document.getElementsByClassName('close-icon')[0]
	const activateCloseIcon = closeIcon.className.replace("hide", "")

	if(e.target.className == "burger") {
		// activate the close icon
		closeIcon.className = activateCloseIcon;
		// hide the burger
		e.target.className = "hide"

	} 

	// add element 
}

function hideCloseIcon(e) {
	const burger = document.getElementsByClassName("hide")[0]
	burger.className = "burger"
	e.target.className += "hide"
}