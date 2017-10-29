import { Age } from './../js/age.js';

$(document).ready(function() {
  $("form#userAge").submit(function(event) {
    event.preventDefault();
    let birthday = ($("input#number").val());
    let lifeExp = ($("input#exp").val());
    let years = new Age(birthday, lifeExp);
    let it = birthday.split("-")
    let currentAge = years.earth();
    debugger
    $("#output").append(`<h2>Current time spent on Earth:  ${currentAge}years</h2><br><h2> What about if you lived on Mercury:  ${years.mercury(currentAge)}years`);
  });
});
