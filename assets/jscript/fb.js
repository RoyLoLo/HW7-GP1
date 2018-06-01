src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"

  // Initialize Firebase
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
  var clickCounter = 0;
  // On Click of Button
  $("#img").on("click", function() {
    var clickCount = this.val('data-count');
    var headLine = this.val('data-headline');
    // Add to clickCount attribute
    parseInt(clickCount)++;

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
  });
  // Using .on("value", function(snapshot)) syntax will retrieve the data
    // from the database (both initially and every time something changes)
    // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
    database.ref().on("value", function(snapshot) {

        // Then we console.log the value of snapshot
        console.log(snapshot.val());
  
        // Then we change the html associated with the number.
        $("<img>").Attr('data-count', snapshot.val().myObj.headLine);
  
        // Then update the clickCount attribute with data from the database.
        clickCount = snapshot.val().myObj.headLine;
  
        // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
        // Again we could have named errorObject anything we wanted.
      }, function(errorObject) {
  
        // In case of error this will print the error
        console.log("The read failed: " + errorObject.code);
      });
