function backToIndex() {
    window.location.href ="/";
}

$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.group a').click(addGroupInfo);

	//$('#colorBtn').click(randomizeColors);
}

function addGroupInfo(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var idNumber = $(this).closest('.group').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	//var idNumber = gID.substr('group'.length);

	console.log("User clicked on group " + idNumber);

	$.get("/groupsInfo/" + idNumber, callback);

	console.log("/groupsInfo/" + idNumber);

}

function callback(result){
	console.log(result);
	var gHtml = 
	//'<p>' + result.gname + '</p>' + 
	'<p><small>' + 'Member1: ' + result.member1.mname + '</small></p>' +
	'<p><small>' + 'Phone: ' + result.member1.phone + '</small></p>' +
	'<p><small>' + 'Email: ' + result.member1.email + '</small></p>' + 
	'<br></br>' +
	'<p><small>' + 'Member2: ' + result.member2.mname + '</small></p>' +
	'<p><small>' + 'Phone: ' + result.member2.phone + '</small></p>' +
	'<p><small>' + 'Email: ' + result.member2.email + '</small></p>' +
	'<br></br>' +
	'<p><small>' + 'Member3: ' + result.member3.mname + '</small></p>' +
	'<p><small>' + 'Phone: ' + result.member3.phone + '</small></p>' +
	'<p><small>' + 'Email: ' + result.member3.email + '</small></p>'
	//'<p>' + result.summary + '</p>'
	$("div.details").html(gHtml);
	//$("#group" + result.id + " .details").html(gHtml);

}