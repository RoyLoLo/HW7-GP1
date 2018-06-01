var tempimgArray = ["https://4vector.com/i/free-vector-rubik-s-cube-random-clip-art_106251_Rubiks_Cube_Random_clip_art_medium.png","https://orig00.deviantart.net/cd7d/f/2011/092/a/d/random_orange_by_kaylaeber-d3d0ule.jpg","http://globalmedicalco.com/photos/globalmedicalco/20/100059.png"];

//display favorites to page
/*for (i=0;i<2;i++){
    var img = $("<img>");
    img.attr("src", tempimgArray[i]);
    img.attr("id","myBtn");
    $("favimg"+i).append(img);
}*/
//Modal stuff
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//end of modal stuff
//display favorites to page
for (i=0;i<2;i++){
    var img = $("<img>");
    img.attr("src", tempimgArray[i]);
    imf.attr("id","myBtn");
    $("favimg"+i).append(img);
}


$.ajax({
url: "",
method: "GET"

}).then({
//load favorites and images
})

$("#btn").on("click", function(){
    
})