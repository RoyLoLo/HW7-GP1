$.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b44fe26f44f54697aa4d45c7d56ac36b",
    method:"GET"
}).then(function(response){
    console.log(response);
    var results=response.articles;
    for(var i=0;i<10;i++){
    var topic= results[i].title;
    var desc= results[i].description;
    var url= results[i].url;
    var source= results[i].source.name;
    console.log(source);
    console.log(topic);
    console.log(desc);
    console.log(url);
   
    $.ajax({
        url:"https://cors-anywhere.herokuapp.com/https://www.google.com/search?q="+topic+"&safe=active&source=lnms&tbm=isch",
        method:"GET"
    }).then(function(innerResponse){
        var images = innerResponse.match(/https[^"]*jpg/);
        console.log(images);
        
        var imagesDiv=$("<div class='images'>")
        var topicImage=$("<img>");

        topicImage.addClass("image");
        topicImage.attr("src", images);
        topicImage.attr("data-count", 0);
        imagesDiv.append(topicImage);
        


        $(".imageDump").append(imagesDiv);
    })
    }
    

})