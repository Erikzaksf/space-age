(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Age = exports.Age = function () {
  function Age(birthday, lifeExp) {
    _classCallCheck(this, Age);

    this.lifeExp = lifeExp;
    var dobArrary = birthday.split('-');
    var dob = new Date([dobArrary[0], dobArrary[1], dobArrary[2]]);
    var dobNum = Math.floor(dob);
    this.current = Math.floor(Date.now());
    this.diffInSeconds = this.current - dobNum;
  }

  _createClass(Age, [{
    key: 'earth',
    value: function earth() {
      return this.diffInSeconds / 31557600000;
    }
  }, {
    key: 'mercury',
    value: function mercury(earth) {
      return earth / .24;
    }
  }, {
    key: 'venus',
    value: function venus(earth) {
      return earth / .62;
    }
  }, {
    key: 'mars',
    value: function mars(earth) {
      return earth / 1.88;
    }
  }, {
    key: 'jupiter',
    value: function jupiter(earth) {
      return earth / 11.86;
    }
  }, {
    key: 'lifeOnEarth',
    value: function lifeOnEarth(earth) {
      return this.lifeExp - earth;
    }
  }]);

  return Age;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _age = require("./../js/age.js");

$(document).ready(function () {
  $("form#userAge").submit(function (event) {
    event.preventDefault();
    var birthday = $("input#number").val();
    var lifeExp = $("input#exp").val();
    var years = new _age.Age(birthday, lifeExp);
    var it = birthday.split("-");
    var currentAge = years.earth();

    $("#output").append("<h2>Current time spent on Earth:  " + currentAge + "years<br> What about if you lived on Mercury:  " + years.mercury(currentAge) + "years<br> What about if you lived on Venus:  " + years.venus(currentAge) + "years<br> What about if you lived on Mars:  " + years.mars(currentAge) + "years<br> What about if you lived on Jupitor:  " + years.jupiter(currentAge) + "years</h2> <p>Years left on Earth:" + years.lifeOnEarth(currentAge) + "<br>Years left on Mercury:" + years.mercury(lifeExp - currentAge) + "<br>Years left on Venus:" + years.venus(lifeExp - currentAge) + "<br>Years left on Mars:" + years.mars(lifeExp - currentAge) + "<br>Years left on Jupitor:" + years.jupiter(lifeExp - currentAge) + "</>");
    if (currentAge > lifeExp) {
      alert("You have lived past the expextancy you have entered! Good for you, here's to many more.");
    }
  });
});

},{"./../js/age.js":1}]},{},[2]);
