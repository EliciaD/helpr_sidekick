// initializing parse

 Parse.initialize("SivszCydBjjlJftgNvj3I2eSMY8PtWd1g7qwwfLG", "eFXFwBaNSKPgMLJHb4yi16YU4oojFURbyFgPAv13");
//var volunteerName = document.getElementById("yourName").value;

// form input  variables






// parse test code

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");

});

//date picker

   $(document).ready(function() {
    $("#datepicker").datepicker();
  });




// submit btn clicked
function submitFunction() {
 
    console.log("worked");
   
  console.log(volunteerName);
var tasks = Parse.Object.extend("tasks");
var tasks = new tasks();
 
 
tasks.save({
// these need to change to variables
  name: "Sean Plott",
  phoneNumber: 7056278288,
  email: 'eliciadurtnall@gmail.com',
  date: '10/09/2014',
  startTime: '7:00 AM',
  numofHours: 6,
  address: "7 bailey Cres Wyevale ON",
  notes: "Bring a shovel :)" 
  
}, {
  success: function(name) {
    // The object was saved successfully.
  },
  error: function(name, error) {
    // The save failed.
    // error is a Parse.Error with an error code and message.
  }
});


}


// create objects

// save objects


// response
