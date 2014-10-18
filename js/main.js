// initializing parse
Parse.initialize("SivszCydBjjlJftgNvj3I2eSMY8PtWd1g7qwwfLG", "eFXFwBaNSKPgMLJHb4yi16YU4oojFURbyFgPAv13");

// Date Picker
  $(document).ready(function() {
     $("#datepicker").datepicker();
  });

  //takes all the user input and saves them to vars
  function collectData () {
    var jobsName = document.getElementById("yourName").value;
    var jobsPhoneNum = document.getElementById("phoneNum").value;
    var jobsEmail = document.getElementById("email").value;
    var jobsDate = document.getElementById("datepicker").value;
    var jobsStart = document.getElementById("startTime").value;
    var jobsNumHours = document.getElementById("numHours").value;
    var jobsAddress = document.getElementById("address").value;
    var jobsNotes = document.getElementById("notes").value;

    submitFunction(jobsName, jobsPhoneNum, jobsEmail, jobsDate,jobsStart, jobsNumHours, jobsAddress, jobsNotes);
   }




// Function called to save all the information gathered.
function submitFunction (name, phone, email, date, start, hours, address, notes) {
 
  console.log("worked");
  var jobs = Parse.Object.extend("Jobs");
  var jobs = new jobs();
 
 validation();
 
  jobs.save({
  // these need to change to variables
    name: name,
    phoneNumber: Number(phone),
    email: email,
    date: date,
    startTime: start,
    numofHours: Number(hours),
    address: address,
    notes: notes 
    
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

function validation (){
if ("" == document.forms.yourName.value) {

  alert(NOPE NONE SHALL PASS);

} else {
console.log("w/e");
}


}

