
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generateWeakestPassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Constants
const constMinPasswordLength = 8;
const constMaxPasswordLength = 128;
const uprCaseCharSet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lwrCaseCharSet= 'abcdefghijklmnopqrstuvwxyz';
const numCharSet= '0123456789';
const splCharSet= '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

//Execution starts here
var genPassword= confirm("Do you want to generate a password?:");
alert(genPassword);
console.log(genPassword);

//If user confirms that password needs to be generated
if(genPassword){
    // Ask user to choose length of password
    var passwordLength = getPasswordLength();    



    // Ask all chars that needs to be included in the password
    getCharsToUse();
    generateWeakestPassword();

}

function getPasswordLength(){
    var minLengthPasswd= prompt("Choose minimum length of password (should be greater than " + constMinPasswordLength + ")", '');
     if(minLengthPasswd < constMinPasswordLength){     
        var minPasswordLengthUserInput = confirm("Password should have atleast eight characters");
        //TODO : Need to decide when to terminate and restart the program 
        if(minPasswordLengthUserInput){ 
            var CnfrmMinLength = prompt("Choose minimum length of password again (should be greater than " + constMinPasswordLength + ")", '');
        }
    } else if(minLengthPasswd >= constMinPasswordLength){
        var maxLenPasswd= prompt("Choose maximum length of password", '');
        if(maxLenPasswd > constMaxPasswordLength){
            var cnfrmMaxLength= confirm("Password should not have more than "+ constMaxPasswordLength + " character");
            //TODO : Need to decide when to terminate and restart the program 
            if(cnfrmMaxLength){
                var secCnfrmMinLength = prompt("Choose maximum length of password", '');
            }
        }
    }
    return [minLengthPasswd, maxLenPasswd];
}

function getCharsToUse() {
    window.useLowerCase = confirm("Do you want to include lowercase?");
    window.useUpperCase = confirm("Do you want to include uppercase?");
    window.useNumbers = confirm("Do you want to include numbers?");
    window.useSpecialChars = confirm("Do you want to include special characters?");
    console.log(useLowerCase);
    console.log(useUpperCase);
    console.log(useNumbers);
    console.log(useSpecialChars);
    if((useLowerCase || useUpperCase || useSpecialChars|| useNumbers) === true){
        console.log("User selected at least one char to be used");
    }
    else{
        console.log("User did not select one option");
        alert("Please select at least one char type");
        //TODO: Need to decide what to do next - restart from beginning or continue from here
    }
}


   function generateWeakestPassword(){
       /*let defaultCharSet = lwrCaseCharSet;
  if(useUpperCase){
      defaultCharSet = defaultCharSet.concat(useUpperCase);
  }
  if(useNumbers){
    defaultCharSet = defaultCharSet.concat(useNumbers);
}
if(useSpecialChars){
    defaultCharSet = defaultCharSet.concat(useSpecialChars);
}

    intermediatePassword= [];
    for(var i=0; i<= passwordLength[1]; i++){
        var defaultArray = [Math.floor(Math.random() * passwordLength[1])];
    
        console.log(defaultArray)
        intermediatePassword.push(defaultArray);
       defaultCharSet = intermediatePassword.concat(defaultCharSet);
      //defaultCharSet= defaultArray.concat(defaultCharSet);
       console.log(defaultCharSet);
    
    }
    //return intermediatePassword;
    //console.log(intermediatePassword);
    return defaultCharSet;
    console.log(defaultCharSet);
    }
    
  */
var characterSet ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';

Password= '';
for(var i=0; i<= passwordLength[0]; i++){
    var defaultArray = [Math.floor(Math.random() * characterSet.length)];
password= password + characterSet.substring(defaultArray,defaultArray+1);
    console.log(password);
}
return password;
console.log(password);
}

