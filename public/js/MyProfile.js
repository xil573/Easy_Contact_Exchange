﻿function backToIndex() {
    window.location.href = "/home";
}

function editProfile() {
    window.location.href = "edit-profile";
}

function infoClick(elem) {

}

function remove(elem) {
   
}

function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }