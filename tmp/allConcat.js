import { Age } from './../js/age.js';

$(document).ready(function() {
  $("form#userAge").submit(function(event) {
    event.preventDefault();
    let birthday = ($("input#number").val());
    let lifeExp = ($("input#exp").val());
    let years = new Age(birthday, lifeExp);
    let it = birthday.split("-")
    let currentAge = years.earth();

    $("#output").append(`<h2>Current time spent on Earth:  ${currentAge}years<br> What about if you lived on Mercury:  ${years.mercury(currentAge)}years<br> What about if you lived on Venus:  ${years.venus(currentAge)}years<br> What about if you lived on Mars:  ${years.mars(currentAge)}years<br> What about if you lived on Jupitor:  ${years.jupiter(currentAge)}years</h2> <p>Years left on Earth:${years.lifeOnEarth(currentAge)}<br>Years left on Mercury:${years.mercury(lifeExp - currentAge)}<br>Years left on Venus:${years.venus(lifeExp - currentAge)}<br>Years left on Mars:${years.mars(lifeExp - currentAge)}<br>Years left on Jupitor:${years.jupiter(lifeExp - currentAge)}</>`);
    if (currentAge > lifeExp) {
      alert("You have lived past the expextancy you have entered! Good for you, here's to many more.")
    }
  });
});
