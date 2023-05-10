//functions for celsius
function EstimateTotalCost(){
    //get the user input and assign it to a variable
    let numDays = document.getElementById("txtNumOfDays").value;
    var cbTollTag = document.getElementById("TollTag");
    var cbRoadsideAssistance = document.getElementById("RoadsideAssistance");
    var cbGPS = document.getElementById("GPS"); 
    var rdradioYes = document.getElementById("radioYes"); 

    //debug to console 
    console.log(numDays);
    let sum =+ numDays * 29.99;
    console.log(sum);

    //if statement for Electronic Toll Tag
    if (cbTollTag.checked == true) {
        // charge 3.95 a day
        sum = sum + (numDays * 3.95);
        //debug to console 
        console.log(sum);        
      }
      if (cbRoadsideAssistance.checked == true) {
        // charge 3.95 a day
        sum = sum + (numDays * 2.95);
        //debug to console 
        console.log(sum);        
      }    
      if (cbGPS.checked == true) {
        // charge 3.95 a day
        sum = sum + (numDays * 2.95);
        //debug to console 
        console.log(sum);        
      }
      if (rdradioYes.checked == true) {
        // charge 3.95 a day
        sum = sum + (sum * .3);
        //debug to console 
        console.log(sum);        
      }


    document.getElementById("txtTotalDue").innerHTML = sum.toFixed(2);
    //debug to console 
    console.log(sum);
}