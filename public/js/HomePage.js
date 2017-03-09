function toggleNewContact() {
    var $sideBar = $("#side_bar");
    var $sideBarMask = $("#side_bar_mask");
    var $topBar = $("#top_bar");
    var $topBarMask = $("#top_bar_mask");
    if ($topBar.hasClass("active")) {
        $topBar.removeClass("active");
        $topBarMask.fadeOut("fast");
    } else {
        if ($sideBar.hasClass("active")) {
            $sideBar.removeClass("active");
            $sideBarMask.fadeOut("fast");
        }
        $topBar.addClass("active");
        $topBarMask.fadeIn("fast");
    }
    //$("#new_contact_button").click(profile_func);
}

function changePageToAdd() {
    //var url = window.location.href;
    //var index = url.indexOf("?id=");
    //var idStr = url.substring(index + 4);
    //window.location.href = "add-new-account/" + idStr;
    window.location.href = "add_new_account";
}

function changePageToMyProfile() {
    //var url = window.location.href;
    //var index = url.indexOf("?id=");
    //var idStr = url.substring(index + 4);
    //window.location.href = "my-profile/" + idStr;

    window.location.href = "my-profile";
}

function changePageToGroups() {
    window.location.href = "groups";
}

function changePageToSettings() {
    window.location.href = "settings";
}

function logOff() {
    window.location.href = "logoff";
}
function changePageToContact(elem) {
    //var $buttonClicked = $(elem);
    //var id = $buttonClicked.attr("id");
    //window.location.href = "contact.html?id=" + id;
    //window.location.href = "contact";
}


//$.getJSON("../../people.json", function (data) {
//    var i;
//    for (i = 0; i < data.person.length; i++) {
//        $("#contact_list").append(
//            '<li class="contact_item"><button id="' + data.person[i].id + '" onclick="changePageToContact(this)"><img  class="contact_img" src="' + data.person[i].imageURL + '"><strong>' + data.person[i].name + '</strong></button></li>'
//        );
//    }
//});