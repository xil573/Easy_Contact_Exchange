function backToAddContactPage() {
    var url = window.location.href;
    var index = url.indexOf("ount/");
    var idStr = url.substring(index + 5);
    //window.location.href = "/?id=" + idStr;
    window.location.href = "/home";
}
function searchResult() {
   
}