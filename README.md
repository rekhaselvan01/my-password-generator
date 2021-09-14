# my-password-generator

The first version of password generator was only able to achieve few things
1. user input was collected using prompt.
2. the inputs were validated.
3. the generate password method was not implemented in this version.
********************************************
The second version of password generator was still not able to generate correct password

1. I was able to make the character sets as array, uppercase,lowercase, splchars, number.
2. I used math.random to generate random numbers but not able to convert random numberrs to character codes.. tried using charcode, string.fromcharcode function.. still not able to achieve..
just errors.
3. At this point when generate password button is clicked, the application is only able to display random numbers.

Moving on to third version:
Areas to be fixed
1. validation has loop hole that need to be fixed, if user enters wrong value for third time.. the prompt doesn't pop up... 
2. I am not satisfied with flow of code.. it would be better if i get values in one function and validate in other.. right now its messy.
3.Hopefully i will be able to fix the algorithm and display the correct password.
screenshot for this version:


********
The third version failed because I realized its not possible to collect all user inputs in one fucntion and validate in another function when you are using prompt. It is possible when we use forms. so I am going to rollback to second version and focus on generating correct random password.
**************************
Fourth and final version
