<<<<<<< HEAD
var splashImage =["assets/images/trump.jpg", "assets/images/army.jpg", "assets/images/olympics.jpg", "assets/images/africa.jpg", "assets/images/un.jpg"];

var rand = splashImage[Math.floor(Math.random()*splashImage.length)];

$(".bgImage").attr("src", rand);
=======

>>>>>>> populateImages

$.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b44fe26f44f54697aa4d45c7d56ac36b",
    method:"GET"
}).then(function(response){
<<<<<<< HEAD
=======
    //console.log(response);
>>>>>>> populateImages
    var results=response.articles;
    for(var i=0;i<9;i++){
    var topic= results[i].title;
    var desc= results[i].description;
    var url= results[i].url;
    var source= results[i].source.name;
<<<<<<< HEAD

=======
    //console.log(source);
    //console.log(topic);
    //console.log(desc);
    //console.log(url);
    
>>>>>>> populateImages
   
    $.ajax({
        url:"https://cors-anywhere.herokuapp.com/https://www.google.com/search?q="+topic+"&safe=active&source=lnms&tbm=isch",
        method:"GET"
    }).then(function(innerResponse){
        var images = innerResponse.match(/https[^"]*jpg/);
        var imagesDiv=$("<div class='images'>")
        var topicImage=$("<img>");

        topicImage.addClass("image");
        topicImage.attr("src", images);
        topicImage.attr("data-count", 0);
        topicImage.attr("data-topic", topic);
        topicImage.attr("data-desc", desc);
        topicImage.attr("data-url", url);
        topicImage.attr("data-source", source);
        imagesDiv.append(topicImage);
        


        $(".imageDump").append(imagesDiv);
    });
<<<<<<< HEAD


    }
=======
    
    }//for loop
>>>>>>> populateImages
    
    $(document).on("click",".images",function(){
        console.log(this);
        var modalArticle = $("<p>");
        var modallink = $("<a>");

        modalArticle.html(this.data-desc);
        $("#image-modal").append(modalArticle);

                
        
        
        
        openImageModal();

        
        
    })
})

<<<<<<< HEAD
$(document).on("click", ".images", function(){
    console.log(this);

});
=======
>>>>>>> populateImages

//can also use $(documnent).ready(function(){});
//$(function(){
//Modal stuff
var modalStart = document.getElementById("start-modal");
var modalBtn = document.getElementById("modal-btn");
var closeBtn = document.getElementsByClassName("startImage")[0];
var tempImage = document.getElementById("temp-image");
var imageModal = document.getElementById("image-modal");
var imageClose = document.getElementsByClassName("cls-btn")[0];
//will load start-modal on window load
window.onload = openModal();
imageModal.style.display = "none";

$(modalBtn).on("click",openModal);
$(closeBtn).on("click",closeModal);

$(imageClose).on("click",closeImageModal);


function openModal(){
    modalStart.style.display = "block";
}

function closeModal(){
    modalStart.style.display = "none";
}

function openImageModal(){
    imageModal.style.display = "block"
}


function closeImageModal(){
    imageModal.style.display = "none";
}

//end of modal stuff

//});//end of docuemnt ready funtion





