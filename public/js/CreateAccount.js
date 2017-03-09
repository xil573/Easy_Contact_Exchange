function gotoMainPage(){
	var $user_name = document.getElementById('user_name');
    var $user_pass = document.getElementById('user_pass');
    var $user_conf_pass = document.getElementById('user_conf_pass');
    var name = $user_name.value;
    var pass = $user_pass.value;
    var conf = $user_conf_pass.value;
    if (name.length == 0) {
        alert("User name cannot be empty!");
        $user_pass.value = '';
    }else{
        if(pass.length == 0){
            alert("Password cannot be empty!")
        }else if(pass != conf){
        	alert("Confirmation password dosen't match!");
        }else{
        	alert("You have succeffully created an Exchange account!");
            //window.location.href = "/";
        }
    }
}

function gotoLogin(){
    window.location.href = "login";
}