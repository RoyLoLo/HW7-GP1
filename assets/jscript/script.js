var config = {
    apiKey: "AIzaSyBllNmEjRqK_vUQf632WNBD3TO-E-PtZRQ",
    authDomain: "dailyfails-afad0.firebaseapp.com",
    databaseURL: "https://dailyfails-afad0.firebaseio.com",
    projectId: "dailyfails-afad0",
    storageBucket: "dailyfails-afad0.appspot.com",
    messagingSenderId: "913175870406"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

//adding background image to start page
var splashImage =["assets/images/trump.jpg", "assets/images/army.jpg", "assets/images/olympics.jpg", "assets/images/africa.jpg", "assets/images/un.jpg"];

var rand = splashImage[Math.floor(Math.random()*splashImage.length)];

$(".bgImage").attr("src", rand);

//function for adding placeholder image if ajax throws error
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
    let source= results[i].source.name;
    //console.log(source);
    //console.log(topic);
    //console.log(desc);
    //console.log(url);let


//ajax for pulling news images
    $.ajax({
        url:"https://cors-anywhere.herokuapp.com/https://www.google.com/search?q="+topic+"&safe=active&source=lnms&tbm=isch",
        method:"GET"
    }).then(function(innerResponse){
        
        let images = innerResponse.match(/https[^"]*\.jpg/);
        let imagesDiv=$("<div class='images'>")
        let topicImage=$("<img>");
        // var pCount=$("<p>");
        var headLiner=desc.replace(/[^A-Z0-9]+/ig, "_")
        topicImage.addClass("image");
        topicImage.attr("onerror", "imgError(this)");
        topicImage.attr("src", images[0]);
        topicImage.attr("data-count", 0);
        topicImage.attr("data-topic", topic);
        topicImage.attr("data-desc", desc);
        topicImage.attr("data-headLine", headLiner);
        topicImage.attr("data-url", url);
        topicImage.attr("data-source", source);
        imagesDiv.append(topicImage);
        // var daCount=$("<span>");
        // pCount.text("Times inspected: ");
        // pCount.append(daCount);
        // imagesDiv.append(pCount);
        
        
        $("#imgDump").append(imagesDiv);
    });

    }
    
    $(document).on("click",".image",function(){
        console.log(this);
        $(".modal-body").empty();
        $(".modal-head").empty();
        var mydesc = $(this).attr("data-desc");
        var myurl = $(this).attr("data-url");
        var mySource = $(this).attr("data-source");
        var modalDesc = $("<p>");
        var inspecc = $("<p>");
        inspecc.text("viewed: ");
        var span = $("<span>");
        span.attr("id", "inspected");
        inspecc.append(span);
        inspecc.append(" times")
        modalDesc.addClass("modalDesc");
        if (mydesc !== ''){
        modalDesc.append(mydesc, inspecc);
        }
        else{
        modalDesc.append("There is no Article to Display, for more information Click on the Link Below.")
        }
        $(".modal-body").append(modalDesc);

        var modalLink = $("<p><a>");
        modalLink.attr("href",myurl);
        modalLink.addClass("modalLink");
        modalLink.text("Read more at "+mySource);
        modalLink.attr("target", "blank");
        $(".modal-body").append(modalLink);

        var mytopic = $(this).attr("data-topic");
        var modalTopic = $("<p>");
        modalTopic.addClass("modalTopic");
        modalTopic.append(mytopic);
        $(".modal-head").append(modalTopic);

          // console.log(this);
  var clickCount = $(this).attr('data-count');
  console.log(clickCount);
  var headLine = $(this).attr('data-headLine');
  console.log(headLine);
  // Add to clickCount attribute
  parseInt(clickCount);
  clickCount++;
  console.log(clickCount);




  //  Store Click Data to Firebase in a JSON property called clicks
  // Note how we are using the Firebase .set() method
  // database.ref().set({
  //     name:headline
  // })

  // make a new object with dynamic property name
  var myObj = {}
  myObj[headLine] = clickCount
  database.ref().update(

    myObj

  );
  // clickCount = database.ref(headLine)
  $(this).attr('data-count', clickCount);
  // Using .on("value", function(snapshot)) syntax will retrieve the data
  // from the database (both initially and every time something changes)
  // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.

  console.log(clickCount);
  // console.log($(this).parent().find('span'));
  // $(this).parent().find('span').html(clickCount);
  $('#inspected').html(clickCount);
                
        
        
        
        openImageModal();

})

$(document).on("click", ".images", function(){
    // console.log(this);s

});

//can also use $(documnent).ready(function(){});
//Modal stuff
var modalStart = document.getElementById("start-modal");
var modalBtn = document.getElementById("modal-btn");
var closeBtn = document.getElementsByClassName("startImage")[0];
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

});//end of docuemnt ready funtion