
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generateWeakestPassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Constants
const constMinPasswordLength = 8;
const constMaxPasswordLength = 128;

//Execution starts here
var genPassword= confirm("Do you want to generate a password?:");
alert(genPassword);
console.log(genPassword);

//If user confirms that password needs to be generated
if(genPassword){
    // Ask user to choose length of password
    var passwordLength = getPasswordLength();    

    // Validate the password length

    // Choose a lenght of password to generate - we are going to keep min lenght for now


    // Ask all chars that needs to be included in the password
    getCharsToUse();

    // Validate for char to use

    // Generate the password based on above parameters 
   // generateWeakestPassword();
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
  
    var incldCharCount=0;
    if(useLowerCase){
incldCharCount ++;
    }
    if(useNumbers){
        incldCharCount++;
    }
    if(useUpperCase){
        incldCharCount++;
    }
    if(useSpecialChars){
        incldCharCount++;
    }
console.log(incldCharCount);
var defaultArryCount= parseInt(passwordLength[0])- parseInt(incldCharCount);
console.log(defaultArryCount);
intrmediatePassword= [];
for(var i=0; i<= defaultArryCount; i++){
    const defaultArray = [Math.floor(Math.random() * defaultArryCount)];
    
    console.log(defaultArray)
    //intrmediatePassword.push(String.fromCharCode(defaultArray));
    intrmediatePassword.push(defaultArray);
    console.log(intrmediatePassword);

}
return intrmediatePassword
//console.log(intrmediatePassword.join(''));

   
}
//creating array to make characterarrays for each character type
function insertArrayValues(startvalue,endvalue){
    const intlarray= [];
    for(let i=startvalue; i<= endvalue; i++){
        intlarray.push(i);
    }
return intlarray
console.log(intlarray)
}


  const uprCase = insertArrayValues(65,90);
  console.log(uprCase);
  const lwrCase= insertArrayValues(97,122);
  console.log(lwrCase);
  const numCase= insertArrayValues(48,57);
  console.log(numCase);
  const splCase= insertArrayValues(33,47).concat(insertArrayValues(58,64)).concat(insertArrayValues(91,96)).concat(insertArrayValues(123,126));
  console.log(splCase);

