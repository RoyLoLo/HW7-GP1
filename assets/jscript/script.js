//adding background image to start page
var splashImage =["assets/images/trump.jpg", "assets/images/army.jpg", "assets/images/olympics.jpg", "assets/images/africa.jpg", "assets/images/un.jpg"];

var rand = splashImage[Math.floor(Math.random()*splashImage.length)];

$(".bgImage").attr("src", rand);


function imgError(image) {
    image.onerror="";
    image.src="assets/images/missing.jpg"
    return true;
}
//running ajax call for top news of the day
$.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=b44fe26f44f54697aa4d45c7d56ac36b",
    method:"GET"
}).then(function(response){

    //console.log(response);

    var results=response.articles;
    console.log(response)
    var results=response.articles;
//forloop to pull 10 headlines fom the day 
    for(let i=0;i<9;i++){
    let topic= results[i].title;
    let desc= results[i].description;
    let url= results[i].url;
     source= results[i].source.name;
    //console.log(source);
    //console.log(topic);
    //console.log(desc);
    //console.log(url);let
    
   
    let source= results[i].source.name;


//ajax for pulling news images
    $.ajax({
        url:"https://cors-anywhere.herokuapp.com/https://www.google.com/search?q="+topic+"&safe=active&source=lnms&tbm=isch",
        method:"GET"
    }).then(function(innerResponse){
        
        let images = innerResponse.match(/https[^"]*\.jpg/);
        let imagesDiv=$("<div class='images'>")
        let topicImage=$("<img>");


        console.log(images)
  /*       let equalFix = images.replace(/u003d/g, "="); */
        topicImage.addClass("image");
        topicImage.attr("onerror", "imgError(this)");
        topicImage.attr("src", images[0]);
        topicImage.attr("data-count", 0);
        topicImage.attr("data-topic", topic);
        topicImage.attr("data-desc", desc);
        topicImage.attr("data-url", url);
        topicImage.attr("data-source", source);
        imagesDiv.append(topicImage);
        
        $(".imageDump").append(imagesDiv);
    });


    });
    }
    
    $(document).on("click",".image",function(){
        console.log(this);
        $(".modal-body").empty();
        $(".modal-head").empty();
        var mydesc = $(this).attr("data-desc");
        var myurl = $(this).attr("data-url");

        var modalDesc = $("<p>")
        modalDesc.addClass("modalDesc");
        if (mydesc !== ''){
        modalDesc.append(mydesc);
        }
        else{
        modalDesc.append("There is no Article to Display, for more information Click on the Link Below.")
        }
        $(".modal-body").append(modalDesc);

        var modalLink = $("<a>");
        modalLink.attr("href",myurl);
        modalLink.addClass("modalLink");
        modalLink.text("Click Here to view source");
        $(".modal-body").append(modalLink);

        var mytopic = $(this).attr("data-topic");
        var modalTopic = $("<p>");
        modalTopic.addClass("modalTopic");
        modalTopic.append(mytopic);
        $(".modal-head").append(modalTopic);
                
        
        
        
        openImageModal();

})

$(document).on("click", ".images", function(){
});

//can also use $(documnent).ready(function(){});
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
$(tempImage).on("click",openTempImageModal);
$(imageClose).on("click",closeImageModal);


function openModal(){
    modalStart.style.display = "block";
}

function closeModal(){
    modalStart.style.display = "none";
}

function openTempImageModal(){
    imageModal.style.display = "block"
}


function closeImageModal(){
    imageModal.style.display = "none";
}

//end of modal stuff

});//end of docuemnt ready funtion