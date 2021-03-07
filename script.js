let tab = document.querySelectorAll(".tabs > li");

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
	console.log(e.target.nextElementSibling.className)
	if (document.getElementById(id).style.display == "none") {
		document.getElementById(id).style.display = "";
		e.target.nextElementSibling.className = 'rotate'
	} else {
		document.getElementById(id).style.display = "none";
		e.target.nextElementSibling.className = ''
	}
}
