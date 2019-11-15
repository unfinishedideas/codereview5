import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Person } from './person.js';

$(document).ready(function(){
  $(".userInputForm").submit(function(event){
    event.preventDefault();
    let ageInput = parseInt($("#userAge").val());
    let newPerson = new Person(ageInput);
    newPerson.calcAge();

    // Display Results
    $("#ageDump").text(newPerson.age);
    $("#mercuryAgeDump").text(newPerson.mercuryAge);
    $("#venusAgeDump").text(newPerson.venusAge);
    $("#marsAgeDump").text(newPerson.marsAge);
    $("#jupiterAgeDump").text(newPerson.jupiterAge);

    $(".userInputForm").hide();
    $(".resultsBox").show();

  });

});
