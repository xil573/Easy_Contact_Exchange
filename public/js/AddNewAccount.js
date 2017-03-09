function backToAddContactPage() {
    var url = window.location.href;
    var index = url.indexOf("ount/");
    var idStr = url.substring(index + 5);
    //window.location.href = "/?id=" + idStr;
    window.location.href = "/";
}
function searchResult() {
    var name = document.getElementById("search_str").value;
    var users=[
        {
            "id": "1",
            "name": "John Douglas",
            "phone": "123-456-7890",
            "email": "jd@gmail.com",
            "imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"            
        },
        {
            "id": "2",
            "name": "Ivan Sutherland",
            "phone": "222-333-4444",
            "email": "ivanSuth@gmail.com",
            "imageURL": "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg"         
        },
        {
            "id": "3",
            "name": "Lucy Suchman",
            "phone": "858-257-8888",
            "email": "lucyyyyyyy@gmail.com",
            "imageURL": "http://upload.wikimedia.org/wikipedia/commons/d/df/Lucy_Suchman.jpeg"          
        },
        {
            "id": "4",
            "name": "Vannevar Bush",
            "phone": "872-888-9022",
            "email": "vannnBush@gmail.com",
            "imageURL": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg"         
        },
        {
            "id": "5",
            "name": "Grace Hopper",
            "phone": "782-343-9873",
            "email": "grace@ucsd.edu",
            "imageURL": "http://amhistory.si.edu/ogmt/images/upload/women-mathematicians/AHB2012q06025.jpg"
        },
        {
            "id": "6",
            "name": "Allen Newell",
            "phone": "123-889-2472",
            "email": "allenNw@ucsd.edu",
            "imageURL": "http://uploads.edubilla.com/awards-winners/92/b4/allen-newell.jpg"
        },
        {
            "id": "7",
            "name": "Sarah Johness",
            "phone": "123-456-7890",
            "email": "Sarah@gmail.com",
            "imageURL": "http://lorempixel.com/500/500/people/"         
        },
        {
            "id": "8",
            "name": "Harry Liu",
            "phone": "222-333-5678",
            "email": "liuHarry@gmail.com",
            "imageURL": "http://lorempixel.com/500/500/people/"         
        },
        {
            "id": "9",
            "name": "Lucy Hancock",
            "phone": "858-229-8888",
            "email": "lucyHancock@gmail.com",
            "imageURL": "http://lorempixel.com/500/500/people/"         
        },
        {
            "id": "10",
            "name": "Xindi Li",
            "phone": "872-109-9822",
            "email": "lixindi@gmail.com",
            "imageURL": "http://lorempixel.com/500/500/people/"         
        },
        {
            "id": "11",
            "name": "Troy Young",
            "phone": "782-343-1111",
            "email": "troy@ucsd.edu",
            "imageURL": "http://lorempixel.com/500/500/people/"
        },
        {
            "id": "12",
            "name": "Sam Newell",
            "phone": "987-129-2472",
            "email": "sammmmm@ucsd.edu",
            "imageURL": "http://lorempixel.com/500/500/people/"
        },
        {
            "id": "13",
            "name": "Chenguang Liu",
            "phone": "267-456-7890",
            "email": "chl123@ucsd.edu",
            "imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"            
        },
        {
            "id": "14",
            "name": "Chaichai Lau",
            "phone": "111-333-4444",
            "email": "ivanSuth@gmail.com",
            "imageURL": "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg"         
        },
        {
            "id": "15",
            "name": "Tiana Suchman",
            "phone": "123-787-8888",
            "email": "tiana@gmail.com",
            "imageURL": "http://upload.wikimedia.org/wikipedia/commons/d/df/Lucy_Suchman.jpeg"          
        },
        {
            "id": "16",
            "name": "Qidong Qiang",
            "phone": "899-118-9022",
            "email": "dongqing@gmail.com",
            "imageURL": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg"         
        },
        {
            "id": "17",
            "name": "Grace Olivers",
            "phone": "182-343-0000",
            "email": "graceOliver@ucsd.edu",
            "imageURL": "http://amhistory.si.edu/ogmt/images/upload/women-mathematicians/AHB2012q06025.jpg"
        },
        {
            "id": "18",
            "name": "Allen Turing",
            "phone": "890-009-2472",
            "email": "allenturing@ucsd.edu",
            "imageURL": "http://uploads.edubilla.com/awards-winners/92/b4/allen-newell.jpg"
        },
        {
            "id": "19",
            "name": "Leo DiCaprio",
            "phone": "888-416-7890",
            "email": "leo@gmail.com",
            "imageURL": "http://lorempixel.com/500/500/people/"         
        },
        {
            "id": "20",
            "name": "Tom Cruise",
            "phone": "100-333-4444",
            "email": "tom@gmail.com",
            "imageURL": "http://lorempixel.com/500/500/people/"         
        },
        {
            "id": "21",
            "name": "Tom Suchman",
            "phone": "000-257-8888",
            "email": "tom___@gmail.com",
            "imageURL": "http://lorempixel.com/500/500/people/"         
        },
        {
            "id": "22",
            "name": "YingHsang Zhao",
            "phone": "000-128-9022",
            "email": "zhaoYh@gmail.com",
            "imageURL": "http://lorempixel.com/500/500/people/"         
        },
        {
            "id": "23",
            "name": "Kobey Hopper",
            "phone": "890-243-9873",
            "email": "kb@ucsd.edu",
            "imageURL": "http://lorempixel.com/500/500/people/"
        },
        {
            "id": "24",
            "name": "Jennifer Anneston",
            "phone": "890-889-2472",
            "email": "jen@ucsd.edu",
            "imageURL": "http://uploads.edubilla.com/awards-winners/92/b4/allen-newell.jpg"
        }
    ]

    for(var i in users){
        var p = users[i].name;
        if(name.indexOf(p) >= 0){
            console.log("found!!!" + p);
            window.location.href = "search_result?name=" + name;
            break;
            //document.getElementById("demo").innerHTML = name;
        }
        else{
            window.location.href = "search_result_all?name=" + name;
        }
    }
    //document.getElementById("demo").innerHTML = name;
    //var name = document.getElementById("search_str").value;
    //for (i = 0; i < data.person.length; i++){
    //  if (data.user[i].name == name){
            
            //var contact = "Name : " + data.user[i].name + "\n" + "Phone : " + data.user[i].phone + "\n" + "Email : " + data.user[i].email;
            //console.log(name);
   
    //    }
    //}

    //var $buttonClicked = document.getElementById('search_str');
    //var name = $buttonClicked.value;
    //console.log($buttonClicked.value);
    //window.location.href = "../search-result?name=" + name;
    //window.location.href = "search_result";
}