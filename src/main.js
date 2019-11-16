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

    // Create Person Object
    const newPerson = new Person(ageInput, healthInput);

    if (checkAgeInput(newPerson) === true && checkButtons() === true){
      healthInput.push(parseInt($("input:radio[name=sleepHabit]:checked").val()));
      healthInput.push(parseInt($("input:radio[name=angerHabit]:checked").val()));
      healthInput.push(parseInt($("input:radio[name=foodHabit]:checked").val()));
      healthInput.push(parseInt($("input:radio[name=exerciseHabit]:checked").val()));
      healthInput.push(parseInt($("input:radio[name=drinkHabit]:checked").val()));

      // Run PersonObj Methods to get age and expectedAge
      newPerson.calcAge();
      newPerson.calcHealth();

      // Display Results
      $("#ageDump").text(newPerson.age);
      $("#mercuryAgeDump").text(newPerson.mercuryAge);
      $("#venusAgeDump").text(newPerson.venusAge);
      $("#marsAgeDump").text(newPerson.marsAge);
      $("#jupiterAgeDump").text(newPerson.jupiterAge);
      $("#lifeExpectDump").text(newPerson.expectedAge);

      $(".userInputForm").hide();
      $(".resultsBox").slideDown();

      if (newPerson.expectedAge < newPerson.age) {
        let difference = newPerson.age - newPerson.expectedAge;
        $("#beyondLifeExpectDump").text(difference);
        $("#beyondTag").show();
      }
    }
  });

  // Check to make sure Age is a good number
  function checkAgeInput(newPerson){
    if (newPerson.calcAge() === "Err: NaN"){
      $("#warnAgeText").text("No Strings! Please Enter a Valid Age").show();
      return false;
    }
    else if (newPerson.calcAge() === "Err: Negative Number"){
      $("#warnAgeText").text("How are you " + newPerson.age + " Years old? Please Enter a Positive Number").show();
      return false;
    }
    else if (newPerson.calcAge() === "good"){
      $("#warnAgeText").hide();
      return true;
    }
  }

  // Check the QA radio buttons
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
