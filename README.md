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
<<<<<<< HEAD
screenshot for this version:: https://user-images.githubusercontent.com/53416989/133107071-d4ee5197-a4cb-42f3-b506-71fe84dacf55.png



********
The third version failed because I realized its not possible to collect all user inputs in one fucntion and validate in another function when you are using prompt. It is possible when we use forms. so I am going to rollback to second version and focus on generating correct random password.
**************************
Fourth version
=======
https://github.com/rekhaselvan01/my-password-generator/issues/2
scrrenshot is also available in the issues section in github.

fifth and final version
![image](https://user-images.githubusercontent.com/53416989/133452481-e8ad936b-0a47-439c-be38-b271f5510753.png)
In this version i was able to generate a random password but i was not able to include only the characters that user choose. I was able to make the characterset to include all choices. I had a fixed set of characters and generated random password.
