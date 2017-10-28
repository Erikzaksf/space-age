import { Age } from './../js/yearsSeconds.js';

$(document).ready(function() {
  $("form#regularNumber").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#number").val());
    var yearsSeconds = new YearSeconds();
    var result = yearsSeconds.converter(numberInput);
    $(".well").show();
    $(".output").text(result);
  });
});
