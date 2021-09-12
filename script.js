/*// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

var genPassword= confirm("Do you want to generate a password?:");
alert(genPassword);
console.log(genPassword);
if(genPassword){
  minLengthValidation();    
  splCharValidation();
  /*generatePassword();*/
}

function minLengthValidation(){
  
    var minLengthPasswd= prompt("choose minimum length of password", '');
     if(minLengthPasswd<8){
         
        var confrmMinLength = confirm("Password should have atleast eight characters");
        if(confrmMinLength){ 
            var CnfrmMinLength = prompt("choose minimum length of password", '');
    }
}
else if(minLengthPasswd >=8){
    maxLenPasswd= prompt("Choose maximum length of password", '');
    if(maxLenPasswd > 128){
        var cnfrmMaxLength= confirm("Password should not have more than 128 character");
    if(cnfrmMaxLength){
        var secCnfrmMinLength = prompt("choose maximum length of password", '');
    }
    }
}
}

function splCharValidation() {
    
    var lwrCaseValidation= confirm("do you want to include lowercase?");
    var uprCaseValidation= confirm("do you want to include uppercase?");
    var numValidation= confirm("do you want to include numbers?");
    var splCharValidation= confirm("do you want to include special characters?");
   console.log(lwrCaseValidation);
   console.log(uprCaseValidation);
   console.log(numValidation);
   console.log(splCharValidation);

   if((lwrCaseValidation || uprCaseValidation || splCharValidation|| numValidation)===true){
       console.log("atleast one is selected");
   }
   else{
       console.log("you have to select atleast one");
       alert("you need to select atleast one special character");
      
   }
  
   }

   /*function generatePassword(lenPassword, lwrCaseValidation,uprCaseValidation,numValidation,splCharValidation) {
       lenPassword=(maxLenPasswd-minLengthPasswd);
       console.log(lenPassword);
       String.fromCharCode(65);
      function arrayCode(startValue,endValue){
          
          for(let i=startValue; i<=endValue; i++){

          }
      }
           
       });


   }*/


    
