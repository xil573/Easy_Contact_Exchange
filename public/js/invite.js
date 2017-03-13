function backToIndex() {
    window.location.href = "/home";
}

function sendInvitation(){
	var $friend_name = document.getElementById('name');
    var $friend_email = document.getElementById('email');
    var name = $friend_name.value;
    var email = $friend_email.value;
    if (name.length == 0) {
        alert("Friend name cannot be empty!");
        $friend_name.value = '';
    }else{
        if(email.length == 0){
            alert("Please enter your friend's email!")
        }else{
    		alert("Your invitation to " + name + " has been sent to " + email);
    	}
    }
}
