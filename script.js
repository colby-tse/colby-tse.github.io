/**
 * Handles user interaction for portfolio.
 * Author: Colby Tse
 * Date created: 2025-07-02
 * Version: 1.0.0
 */

function main() {
	document.addEventListener("click", updateTopBar);
}

/* === On-load === */

/**
 * Set default values and styling on page load.
 */
function setDefaults() {
	updateTopBar();
}

/* === Top Bar === */

/**
 * Updates Top Bar upon click
 */
function updateTopBar() {
	// Get icons by element ID
	let homeIcon = document.getElementById("home-icon");
	let aboutIcon = document.getElementById("about-icon");
	let experienceIcon = document.getElementById("experience-icon");

	// Reset icon bottom border colors
	homeIcon.style.borderBottom = "none";
	aboutIcon.style.borderBottom = "none";
	experienceIcon.style.borderBottom = "none";

	console.log("here:" + window.location.href);

	if (window.location.href.includes("home")) {
		homeIcon.style.borderBottom = "solid white";
	} else if (window.location.href.includes("about")) {
		aboutIcon.style.borderBottom = "solid white";
	} else if (window.location.href.includes("experience")) {
		experienceIcon.style.borderBottom = "solid white";
	}
}

main();