// initializing parse
Parse.initialize("SivszCydBjjlJftgNvj3I2eSMY8PtWd1g7qwwfLG", "eFXFwBaNSKPgMLJHb4yi16YU4oojFURbyFgPAv13");
  
  //BUGGY, Commented out.
  $(document).ready(function() {
     $("#datepicker").datepicker();
  });

  //takes all the user input and saves them to vars
  function collectData () {
    var jobsName = document.getElementById("yourName").value;
    var jobsPhoneNum = document.getElementById("phoneNum").value;
    var jobsEmail = document.getElementById("email").value;
    var jobsTitle = document.getElementById("jobTitle").value;
    var jobsDate = document.getElementById("datepicker").value;
    var jobsStart = document.getElementById("startTime").value;
    var jobsNumHours = document.getElementById("numHours").value;
    var jobsAddress = document.getElementById("address").value;
    var jobsNotes = document.getElementById("notes").value;

    submitFunction(jobsName, jobsPhoneNum, jobsEmail, jobsTitle, jobsDate, jobsStart, jobsNumHours, jobsAddress, jobsNotes);
   }




// Function called to save all the information gathered.
function submitFunction (name, phone, email, title, date, start, hours, address, notes) {
 
  var jobs = Parse.Object.extend("Jobs");
  var jobs = new jobs();
 
 
  jobs.save({
  // these need to change to variables
    employerName: String(name),
    phoneNumber: String(phone),
    email: String(email),
    date: String(date),
    title:String(title),
    startTime: String(start),
    numofHours: String(hours),
    address: String(address),
    notes: String(notes) 
    
  }, {
    success: function(name) {
      // The object was saved successfully.
    },
    error: function(model, error) {

      console.log("there error codde "+ error.code);
      console.log("there model  "+ model);
      // The save failed.
      // error is a Parse.Error with an error code and message.
    }
  });
}