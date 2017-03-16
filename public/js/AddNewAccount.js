'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#search_button').click(searchResults);
}

function backToAddContactPage() {
    window.location.href = "/home";
}

function selectInfoToSend() {
    window.location.href = "select_info";
}

function searchResults(e) {
   console.log("user clicked search.");
   e.preventDefault();
   var name = document.getElementById("search_str").value;
   console.log("user input:" + name);

   $.get("/search_result/" + name, listRes);
}
function listRes(result){
	var search_res = result.res_names;
	if(search_res.length == 0){
		console.log("no result found....");
		reshtml = '<h4><font color = "#0059b3">There is no result for <strong>' + document.getElementById("search_str").value + '</strong></font><br><br><button id="invite_button" class="invitation_btn" onclick="changePageToInvite()"><strong>Invite friends</strong></button>'
		$(".plugin_no_res").append(reshtml);
		document.getElementById("search_str").value = "";
	}else{
		var names = [];
		var urls = [];
		console.log(search_res);
		for(var i = 0; i < search_res.length; i++){
			names.push(search_res[i].name);
			urls.push(search_res[i].url);
		}
	//console.log(names);
	//console.log(urls);
		var reshtml = '<h4>Please select the people you want to send your contact information to:</h4>'
		$("#list_search_res").html(reshtml);

		for(var j = 0; j < names.length; j++){
			var reshtml = '<label class="control control--checkbox"><h5><img class="contact_img" hspace="10" src="' + urls[j] +'">' + names[j] + '</h5><input id = "user" type="checkbox" name="user" value=""><div class="control__indicator"></div></label>'
			console.log(urls[j]);
		//$(".contact_img").attr('src', urls[j]);
			console.log(names[j]);
		//$(".res_name").append(names[j]);
			document.getElementById("search_str").value = "";
			$(".plugin").append(reshtml);
		}
	}
}
function callback(){
	console.log("no result!");
}