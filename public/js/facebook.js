var name;
var pic_url;

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
  //console.log(response);
  //console.log(response.name);
  //console.log(response.picture.data.url);
  name = response.name;
  pic_url = response.picture.data.url;
  //console.log(img);
  //$("#name").text(response.name);
  //$("#photo").attr('src', response.picture.data.url);
  window.location.href = "/";
}

function toggleSidebar() {
    var $sideBar = $("#side_bar");
    var $sideBarMask = $("#side_bar_mask");
    var $topBar = $("#top_bar");
    var $topBarMask = $("#top_bar_mask");
    if ($sideBar.hasClass("active")) {
        $sideBar.removeClass("active");
        $sideBarMask.fadeOut("fast");
    } else {
        if ($topBar.hasClass("active")) {
            $topBar.removeClass("active");
            $topBarMask.fadeOut("fast");
        }
        $sideBar.addClass("active");
        $sideBarMask.fadeIn("fast");
    }
    if(name != ""){
      $("#name").text(name);
      $("#photo").attr('src', pic_url);
    }
    //console.log(window.varName);
    //console.log(name);
}
