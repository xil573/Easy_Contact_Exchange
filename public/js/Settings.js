function backToIndex() {
    window.location.href = "/";
}

function checkFunc(){
	var inputs = [	document.getElementById("phone").checked,
					document.getElementById("email").checked,
					document.getElementById("facebook").checked,
					document.getElementById("linkedin").checked,
					document.getElementById("wechat").checked,
					document.getElementById("instagram").checked
					];
	console.log("inputs in settings: " + inputs);
	//defaultInfo = inputs;
	//console.log(defaultInfo);
	//return inputs;
}