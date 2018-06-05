// Initialize Firebase

var clickCounter = 0;
// On Click of Any Image Displayed
$(document).on("click", ".image", function () {

});
database.ref().on("value", function (snapshot) {
  var obj = snapshot.val()

  for (var key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    $("[data-Headline='" + key + "']").attr('data-count', obj[key]);
  };





  // // //     // Then we change the html associated with the number.
  //     $("[data-Headline='"+headLine+"']").attr('data-count', snapshot.val()[headLine]);

  // //     // Then update the clickCount attribute with data from the database.
  //     clickCount = snapshot.val()[headLine];



  //     // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
  //     // Again we could have named errorObject anything we wanted.
}, function (errorObject) {

  //     // In case of error this will print the error
  console.log("The read failed: " + errorObject.code);
});

