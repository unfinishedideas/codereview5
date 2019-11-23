import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Person } from './person.js';

function checkInput(input){
  if (Number.isNaN(input)){
    return "Err: NaN";
  }
  else if (input <= 0){
    return "Err: Negative Number";
  }
  else {
    return "good";
  }
}

$(document).ready(function(){

  $(".userInputForm").submit(function(event){
    event.preventDefault();
    // Collects User's Age Input, initialize HealthInput array
    const ageInput = parseInt($("#userAge").val());
    const healthInput = [];

    // Collects User's Habits Checkboxes and stores them in the healthInput array
    $("input:checkbox[name=habits]:checked").each(function(){
      let habitPoint = parseInt($(this).val());
      healthInput.push(habitPoint);
    });

    // Create Person Object
    const newPerson = new Person(ageInput, healthInput);

    // Adds the values from the radio buttons to healthInput array
    if (checkAgeInput(ageInput) === true && checkButtons() === true){
      healthInput.push(parseInt($("input:radio[name=sleepHabit]:checked").val()));
      healthInput.push(parseInt($("input:radio[name=angerHabit]:checked").val()));
      healthInput.push(parseInt($("input:radio[name=foodHabit]:checked").val()));
      healthInput.push(parseInt($("input:radio[name=exerciseHabit]:checked").val()));
      healthInput.push(parseInt($("input:radio[name=drinkHabit]:checked").val()));

      newPerson.doTheStuff();

      // Display Ages on Each planet
      $("#ageDump").text(newPerson.age);
      $("#mercuryAgeDump").text(newPerson.mercuryAge);
      $("#venusAgeDump").text(newPerson.venusAge);
      $("#marsAgeDump").text(newPerson.marsAge);
      $("#jupiterAgeDump").text(newPerson.jupiterAge);

      // Display Expected Ages
      $("#ageExpectedDump").text(newPerson.expectedEarthAge);
      $("#mercuryExpectedDump").text(newPerson.expectedMercuryAge);
      $("#venusExpectedDump").text(newPerson.expectedVenusAge);
      $("#marsExpectedDump").text(newPerson.expectedMarsAge);
      $("#jupiterExpectedDump").text(newPerson.expectedJupiterAge);


      // If User has Outlived Expectancy: display the years beyond
      if (newPerson.expectedEarthAge < newPerson.age){
        $("#earthBeyondAgeDump").text(newPerson.earthDifference);
        $("#mercuryBeyondAgeDump").text(newPerson.mercuryDifference);
        $("#venusBeyondAgeDump").text(newPerson.venusDifference);
        $("#marsBeyondAgeDump").text(newPerson.marsDifference);
        $("#jupiterBeyondAgeDump").text(newPerson.jupiterDifference);
        $(".beyondLife").show();
      }

      $(".userInputForm").hide();
      $(".resultsBox").slideDown();

    }
  });

  // Check to make sure Age is a good number
  function checkAgeInput(input){
    if (checkInput(input) === "Err: NaN"){
      $("#warnAgeText").text("No Strings! Please Enter a Valid Age").show();
      return false;
    }
    else if (checkInput(input) === "Err: Negative Number"){
      $("#warnAgeText").text("How are you " + input + " Years old? Please Enter a Positive Number").show();
      return false;
    }
    else {
      $("#warnAgeText").hide();
      return true;
    }
  }

  // Check the QA radio buttons to see if they are checked
  function checkButtons(){
    let currentBox = ["sleep", "anger", "food", "exercise", "drink"];
    let numberFailed = 0;
    for (let i = 0; i<currentBox.length; i++){
      if (!$("input:radio[name="+currentBox[i]+"Habit]:checked").val()){
        $("#warn"+currentBox[i]+"Text").text("Please check a "+currentBox[i]+" habit");
        $("#warn"+currentBox[i]+"Text").show();
        numberFailed ++;
      }
      else {
        $("#warn"+currentBox[i]+"Text").hide();
      }
    }
    if (numberFailed > 0){
      return false;
    }
    else {
      return true;
    }
  }

  // Reset the Page
  $("#resetBtn").click(function(){
    window.location.reload();
  });

});
