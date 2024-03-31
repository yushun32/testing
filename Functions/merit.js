function displayActivityLevel() {
	
	let activityName1 = document.getElementById("an1").value;
	let activityName2 = document.getElementById("an2").value;
	
	let name = {
		"A100": "Residential College/Faculty/Club",
		"A150": "University",
		"A160": "District/State Level",
		"A170": "National",
		"A180": "International"		
	};
	
	document.getElementById("al1").value = name[activityName1];
	document.getElementById("al2").value = name[activityName2];
}


function displayActivityPerformanceScore() {
	
	
}


function calculateActivityMerit() {

   

}