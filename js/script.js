
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";

  // This function Calculates the total price of the order. 
  function calculate() { 
    
  // Get Pancake Size 
  let sizePancakes = parseInt(document.getElementById('size-pancakes').value);

  // Declare Pancake Size
  
  let pancakePrice = "" ;
  
  if (sizePancakes="three-pancakes") {
    pancakePrice = 10;
  }

  else if (sizePancakes = "two-pancakes") {
    pancakePrice = 7;
  }

  else if (sizePancakes) = "kids-pancakes") {
    pancakePrice = 5;
  }

  // Declare Toppings Price
  let pancakeTopping = parseInt(document.getElementById('pancake-topping').value);
    
  let pancakeToppingPrice = "" ;
  
  if (pancakeTopping="one-topping") {
    pancakeToppingPrice = 1;
  }

  else if (pancakeTopping = "two-topping") {
    pancakeToppingPrice = 2;
  }

  else if (pancakeTopping) = "three-topping") {
    pancakeToppingPrice = 3;
  }
  
  // output if its warm or cold
  document.getElementById('program-feedback').innerHTML = programFeedback;
  }