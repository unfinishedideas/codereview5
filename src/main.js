import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Person } from './person.js';


$(document).ready(function(){

  $(".userInputForm").submit(function(event){
    event.preventDefault();
    // Collects User's Age Input, initialize HealthInput array
    const ageInput = parseInt($("#userAge").val());
    const healthInput = [];

    // Collects User's Habits and stores them in the healthInput array
    $("input:checkbox[name=habits]:checked").each(function(){
      let habitPoint = parseInt($(this).val());
      healthInput.push(habitPoint);
    });
    healthInput.push(parseInt($("input:radio[name=sleepHabit]:checked").val()));
    healthInput.push(parseInt($("input:radio[name=angerHabit]:checked").val()));
    healthInput.push(parseInt($("input:radio[name=foodHabit]:checked").val()));
    healthInput.push(parseInt($("input:radio[name=exerciseHabit]:checked").val()));
    healthInput.push(parseInt($("input:radio[name=drinkHabit]:checked").val()));

    // Create Person Object
    const newPerson = new Person(ageInput, healthInput);

    // Checks to see if the input was valid
    if (newPerson.calcAge() === "Err: NaN"){
      $("#warnAgeText").text("No Strings! Please Enter a Valid Age").show();
    }
    else if (newPerson.calcAge() === "Err: Negative Number"){
      $("#warnAgeText").text("How are you " + newPerson.age + " Years old? Please Enter a Positive Number").show();
    }
    else if (newPerson.calcAge() === "good"){
      $("#warnAgeText").hide();
      newPerson.calcAge();
      if (newPerson.calcHealth() === "Err: NaN"){
        $("#warnHealthText").text("You've entered invalid information in your Health Stats");
      }
      else if (newPerson.calcHealth() === ""){
        $("#warnHealthText").text("You forgot a checkbox");
      }
      else {
        $("#warnHealthText").hide();
        newPerson.calcHealth();

        // Display Results
        $("#ageDump").text(newPerson.age);
        $("#mercuryAgeDump").text(newPerson.mercuryAge);
        $("#venusAgeDump").text(newPerson.venusAge);
        $("#marsAgeDump").text(newPerson.marsAge);
        $("#jupiterAgeDump").text(newPerson.jupiterAge);
        $("#lifeExpectDump").text(newPerson.expectedAge);

        $(".userInputForm").hide();
        $(".resultsBox").show();

        if (newPerson.expectedAge < newPerson.age) {
          let difference = newPerson.age - newPerson.expectedAge;
          $("#beyondLifeExpectDump").text(difference);
          $("#beyondTag").show();
        }
      }
    }
  });

  // Reset the Page
  $("#resetBtn").click(function(){
    window.location.reload();
  });

});
