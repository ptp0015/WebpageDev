function openContent(evt, content) {
	// Declare Variables
	var i, tabcontent, tablinks;

	// Hide tabcontent items
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Remove class active
	pageLink = document.getElementsByClassName("pageLink");
  	for (i = 0; i < pageLink.length; i++) {
    	pageLink[i].className = pageLink[i].className.replace(" active", "");
  	}

  	// Show current tab, add active to button of opened tab
  	document.getElementById(content).style.display = "block";
  	evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();