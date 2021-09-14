//grab elements using querySelector
//Grab button element by id and assign variable
var btn = document.querySelector("#generate");
//Grab textarea by id and assign variable
var textarea = document.querySelector("#password");

//Assign values to variables
//Assign return value of function generatePassword to variable password
var password =generatePassword();
//assign value of the password to textarea
textarea.value = password;

//Add eventlisteners to button item
//add eventListener to generatePassword button
btn.addEventListener("click",generatePassword());


//call functions 
getuserinputs();
validateMinLength();
validateMaxLength();

//Get user inputs
//create variables to get input
var generatePassword;
var minLengthPassword;
var maxLengthPassword;
var useLowerCase;
var useUpperCase;
var useNumbers;
var useSplCharacters;

//write a function to getuserinputs
//get user inputs using prompt and assign values to variables
function getuserinputs()
{
generatePassword = prompt("Do you want to generate Password?", '');
console.log(generatePassword);
minLengthPassword = prompt("Enter minimum length of the password:",'');
console.log(minLengthPassword);
maxLengthPassword = prompt("Enter Maximum length of the password:" ,'');
console.log(maxLengthPassword);
useLowerCase = prompt("Do you want to use Lowercase?",'');
console.log(useLowerCase);
useUpperCase = prompt("Do you want to use UpperCase?:", '');
console.log(useUpperCase);
useNumbers = prompt("Do you want to use Numbers?:", '');
console.log(useNumbers);
useSplCharacters = prompt("Do you want to use SpecialCharacters?:", '');
console.log(useSplCharacters);
}

//write a function to validate Minimum length of password
function validateMinLength(){
    if(generatePassword){

        if(minLengthPassword<8){
            var confrmMinLength= confirm("The minimum length of Password should be eight characters", '');
                               }    
                        
              if(confrmMinLength){
                  getuserinputs();
                                 }          
                        }
                            }

//write a function to validate Maximum length of password
function validateMaxLength(){
    if(generatePassword){

        if(maxLengthPassword>128){
            var confrmMaxLength= confirm("The maximum length of Password should be 128 characters", '');
                               }    
                        
              if(confrmMaxLength){
                  getuserinputs();
                                 }          
                        }
                            }

                            
function generatePassword(){
    console.log("hello");
}