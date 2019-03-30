"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Maria De Jesus Rizo
   Date:   3.28.19
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/
//The line below states that the init function will be run upon the page being loaded within the browser window. 
window.onload = init;

//The code block below creates a function with the name of init. The function is not passed any parameters. Its purpose is to initialize the contents of the web age and set up the event handlers. 
function init() {
      //The line below creates a variable with the name of calcButtons. This variable is then assigned the value of the element with the class name of calcButton
      var calcButtons = document.getElementsByClassName("calcButton");
      //The block below creates a for loop which will continue to run as long as the value of the i variable is less than the length fo the calcButtons array.
      for (var i = 0; i < calcButtons.length; i++) {
            //The line below states that when the calcButtons current value is clicked by the user, the buttonClick function will be run. 
            calcButtons[i].onclick = buttonClick;
      }
      //The line below states that when a key is pressed down within the element that has the id of calcWindows, the calcKeys function will be run. 
      document.getElementById("calcWindow").onkeydown = calcKeys;
}
//The block below creates a function with the name of buttonClick. The function is passed the parameter of e. This function serves to directe the broswer on what to do when buttons on the keyboard are pressed. 
function buttonClick(e) {
      //The line below creates a variable with the name of calcValue. This variable is then assinged the value of the value attribute of the element with an id of calcWindows. 
      var calcValue = document.getElementById("calcWindow").value;
      //The line below creates a variable with the name of calcDecimal. This variable is then assigned the value of the value attribute of the element with an id of decimals.
      var calcDecimal = document.getElementById("decimals").value;
      //The line below creates a variable with the name of buttonValue. This variable is then assigned the value of the value attribute of the event object target
      var buttonValue = e.target.value;
      //The switchcase below creates a series of responses to certain clicks on the calculator. This will tell he calculator how to deal with certain functions. It also sets a default case that will be run if none of the other cases are run. 
      switch (buttonValue) {
            case "del":
                  calcValue = "";
                  break;
            case "bksp":
                  calcValue = eraseChar(calcValue);
                  break;
            case "enter":
                  calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
                  break;
            case "prev":
                  calcValue += " = " + lastEq(calcValue);
                  break;
            default:
                  calcValue += buttonValue;
                  break;
      }
      //The line below states that the value attribute of the element with the id of calcWindow will be set to the value of the calcValue variable. 
      document.getElementById("calcWindow").value = calcValue;
      //The line below allows for the user to click onto the element with an id of calcWindows
      document.getElementById("calcWindow").focus();
}

//The code block below creates a function with the name of calcKeys. The functions is passed the parameter of e. This function allows for the user to use keyboard keys when using the calculator.
function calcKeys(e) {
      //The line below creates a variable with the name of calcValues which is assigned the value fo the value attribute of the element with the id of calcWindow.
      var calcValue = document.getElementById("calcWindow").value;
      //The comment above applied heere as well, the only difference being the variaable name and the id it is retrieving the value attribute from.
      var calcDecimal = document.getElementById("decimals").value;
      //The code block below creates a switchcase which outlines various reactions thta the program should have when cretain keyboard keys are pressed by the user. 
      switch (e.key) {
            case "Delete":
                  calcValue = "";
                  break;
            case "Enter":
                  calcValue += " = " + evalEq(calcValue, calcDecimal);
                  break;
            case "ArrowUp":
                  calcValue += lastEq(calcWindow.value);
                  break;
                  e.preventDefault();
      }
      //The line below states that the value attrubute of the element with an if of calcWindows will be reassigned the value of calcValue.
      document.getElementById("calcWindow").value = calcValue;
}


/* ===================================================================== */

function eraseChar(textStr) {
      return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
      var lines = textStr.split(/\r?\n/);
      var lastLine = lines[lines.length - 1];
      var eqValue = eval(lastLine);
      return eqValue.toFixed(decimals);
}

function lastEq(textStr) {
      var lines = textStr.split(/\r?\n/);
      var lastExp = lines[lines.length - 2];
      return lastExp.substr(0, lastExp.indexOf("=")).trim();
}