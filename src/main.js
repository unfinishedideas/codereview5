import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Person } from './person.js';

$(document).ready(function(){
  $(".userInputForm").submit(function(event){
    event.preventDefault();
    // Collects User Input and makes Object
    let ageInput = parseInt($("#userAge").val());
    let newPerson = new Person(ageInput);

    // Checks to see if the user input was valid
    if (newPerson.calcAge() === "Err: NaN"){
      $("#warnText").text("No Strings! Please Enter a Valid Number: ").show();
    }
    else if (newPerson.calcAge() === "Err: Negative Number"){
      $("#warnText").text("How are you " + newPerson.age + " Years old? Please Enter a Positive Number: ").show();
    }
    else {
      newPerson.calcAge();
      // Display Results
      $("#ageDump").text(newPerson.age);
      $("#mercuryAgeDump").text(newPerson.mercuryAge);
      $("#venusAgeDump").text(newPerson.venusAge);
      $("#marsAgeDump").text(newPerson.marsAge);
      $("#jupiterAgeDump").text(newPerson.jupiterAge);

      $("#warnText").hide();
      $(".userInputForm").hide();
      $(".resultsBox").show();
    }
  });

  // Reset the Page
  $("#resetBtn").click(function(){
    window.location.reload();
  });

});
