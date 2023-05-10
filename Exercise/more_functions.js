//notice how we dont need to enter the data type by the variable in the conditions of the functions
//like every other lanaguage we can seprate the variables with a comma
function displayMailingAddress(name, streetAddress, city, state, zip) {
  //display to console
  //we can call the variable in the console log by putting a dollar sgin and the variable name in currly brackets
    console.log(`
          ${name}
          ${streetAddress}
          ${city}, ${state} ${zip}
      `);
  }//end of function
  
  //declare and initiliaze all variables needed
  let myName = "Craig McKeachie";
  let myStreetAddress = "1016 Center Street";
  let myCity = "Ashland";
  let myState = "OH";
  let myZip = "44805"; 
  
  /*
  call function and pass the proper arugument to the corresponding parameters(variables)
  features of a function and conditions : 
  o the order of the parameters matter because the function can't guess which parameter is the array and which one is the action
  o There is no need to specify the data type for parameters in JavaScript function definitions.
  o It does not perform type-checking based on the passed-in JavaScript functions.
  o It does not check the number of received arguments.
  
  Arguments Object: 
  The arguments objects are inbuilt objects in JavaScript functions. 
  In all non-arrow functions, the arguments object is a local variable. 
  Analyze the arguments inside the function by using its arguments object. 
  */
  displayMailingAddress(myName, myStreetAddress, myCity, myState, myZip);
  displayMailingAddress("David DeFalco", "143 Timer Oak Drive", "Powell", "PA", "43289")
  
  function addNumbers(num1, num2) {
    //declare and initiliaze all variables needed
    let result = num1 + num2;
    let output = `${num1} + ${num2} = ${result}`;

    //out put to console
    console.log(output);

    //example of using the arguments function
    //this function only takes in 2 arguments so the length of the arguments will be 2
    console.log(arguments.length);
  }//end of function
  
  //call the function
  addNumbers(10, 22);

  /*
  this is an example of functions not checking the numebr of arguments in the parameters but still functioning.
  this is would be a logic and a syntax error beause:
  o the computer does not know which argument it should use because there are more arguments then paramenters and  will result in the computer using the first arguments in the parameters
    this is important because it could result in a incorrect result
  o this is also a syntax error because there is extra arguments in the parameters.
  */
 //call function
  addNumbers(15, 255, 32);
  