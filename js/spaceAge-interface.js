$(document).ready(function() {
  $("form#userAge").submit(function(event) {
    event.preventDefault();
    let age = parseInt($("input#number").val());
    let lifeExp = parseInt($("input#exp").val());
    let span = new Age(age, lifeExp);
    debugger
    $("#output").append("<h2>${earth} Earth years!</h2>");
  });
});
