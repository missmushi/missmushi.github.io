$(document).ready(function () {
    $('.header').height($(window).height());

})

//scrolling
$(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
})

//payment calculatiom
var radios;
var interestRate = 0;
var principal = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var amount = 0;

function simpleInterest() {
  event.preventDefault();
  var radios = document.getElementsByName('Interest')
  for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
      interestRate = (parseInt(this.value));
      principal = 48900
      interestRate = interestRate / 100;
      var termOfLoan = parseFloat(document.getElementById("termSimple").value);
      var simpleInt = (principal * interestRate)/termOfLoan;
      var amount = ((principal/ termOfLoan)+ simpleInt).toFixed(2);
      document.getElementById("siOutput-01").innerHTML = "Monthly Interest: ฿" + simpleInt.toFixed(2);
      document.getElementById("siOutput-02").innerHTML = "Monthly Payment: ฿" + amount;

    }
  }

  var radis = document.getElementsByName('Interest2')
  for (var i = 0, max = radis.length; i < max; i++) {
    radis[i].onclick = function () {
      interestRate = (parseInt(this.value));
      principal = 43900
      interestRate = interestRate / 100;
      var termOfLoan = parseFloat(document.getElementById("termSimple1").value);
      var simpleInt = (principal * interestRate)/termOfLoan;
      var amount = ((principal/ termOfLoan)+ simpleInt).toFixed(2);
      document.getElementById("siOutput-03").innerHTML = "Monthly Interest: ฿" + simpleInt.toFixed(2);
      document.getElementById("siOutput-04").innerHTML = "Monthly Payment: ฿" + amount;
    }
  }

  var radios = document.getElementsByName('Interest3')
  for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
      interestRate = (parseInt(this.value));
      principal = 31900
      interestRate = interestRate / 100;
      var termOfLoan = parseFloat(document.getElementById("termSimple2").value);
      var simpleInt = (principal * interestRate)/termOfLoan;
      var amount = ((principal/ termOfLoan)+ simpleInt).toFixed(2);
      document.getElementById("siOutput-05").innerHTML = "Monthly Interest: ฿" + simpleInt.toFixed(2);
      document.getElementById("siOutput-06").innerHTML = "Monthly Payment: ฿" + amount;
    }
  }

  var radios = document.getElementsByName('Interest4')
  for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
      interestRate = (parseInt(this.value));
      principal = 35900
      interestRate = interestRate / 100;
      var termOfLoan = parseFloat(document.getElementById("termSimple3").value);
      var simpleInt = (principal * interestRate)/termOfLoan;
      var amount = ((principal/ termOfLoan)+ simpleInt).toFixed(2);
      document.getElementById("siOutput-07").innerHTML = "Monthly Interest: ฿" + simpleInt.toFixed(2);
      document.getElementById("siOutput-08").innerHTML = "Monthly Payment: ฿" + amount;
    }
  }

  var radios = document.getElementsByName('Interest5')
  for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
      interestRate = (parseInt(this.value));
      principal = 23990
      interestRate = interestRate / 100;
      var termOfLoan = parseFloat(document.getElementById("termSimple4").value);
      var simpleInt = (principal * interestRate)/termOfLoan;
      var amount = ((principal/ termOfLoan)+ simpleInt).toFixed(2);
      document.getElementById("siOutput-09").innerHTML = "Monthly Interest: ฿" + simpleInt.toFixed(2);
      document.getElementById("siOutput-10").innerHTML = "Monthly Payment: ฿" + amount;
    }
  }

  var radios = document.getElementsByName('Interest6')
  for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
      interestRate = (parseInt(this.value));
      principal = 16900
      interestRate = interestRate / 100;
      var termOfLoan = parseFloat(document.getElementById("termSimple5").value);
      var simpleInt = (principal * interestRate)/termOfLoan;
      var amount = ((principal/ termOfLoan)+ simpleInt).toFixed(2);
      document.getElementById("siOutput-11").innerHTML = "Monthly Interest: ฿" + simpleInt.toFixed(2);
      document.getElementById("siOutput-12").innerHTML = "Monthly Payment: ฿" + amount;
    }
  }  
}