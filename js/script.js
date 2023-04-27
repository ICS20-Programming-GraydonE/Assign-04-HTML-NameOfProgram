
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";

  // This function Calculates the total price of the order. 
  function calculate() { 
    
  // Get Pancake Size 
  let sizePancakes = document.getElementById ('size-pancakes').value;

  // Declare Pancake Size
  
  let pancakePrice = "" ;
  
  if (sizePancakes == "three-pancakes") {
    pancakePrice = 10;
  }

  else if (sizePancakes == "two-pancakes") {
    pancakePrice = 7;
  }

  else if (sizePancakes == "kids-pancakes") {
    pancakePrice = 5;
  }

  // Declare Toppings Price
  let pancakeTopping =  document.getElementById('pancake-topping').value;
    
  let pancakeToppingPrice = "" ;

  if (pancakeTopping == "no-topping")  {
    pancakeToppingPrice = 0;
  }
  
  if (pancakeTopping == "one-topping") { 
    pancakeToppingPrice = 1;
  }

  else if (pancakeTopping == "two-topping") {
    pancakeToppingPrice = 2;
  }

  else if (pancakeTopping == "three-topping") {
    pancakeToppingPrice = 3;
  }

  // Declare Juice Price
  let juiceSize = document.getElementById('juice-size').value;

  let juicePrice = "" ;

  if (juiceSize == "large") {
    juicePrice = 4.50
  }

  else if (juiceSize == "medium") {
    juicePrice = 3
  }

  else if (juiceSize == "small") {
    juicePrice = 1.50
  }

  
  //calculate subtotal
  let subtotal = pancakePrice + pancakeToppingPrice + juicePrice
    
  //calculate tax
  let tax = subtotal*0.13

  // Calculate final total price
  let total = tax+subtotal
  // output the price of the pancakes
  
  document.getElementById('final-price').innerHTML = "Your total price is:" + total.toFixed(2) + 
" dollars";
  }