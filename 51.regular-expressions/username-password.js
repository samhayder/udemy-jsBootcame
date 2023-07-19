/* Username */
/* ****************** */

/* Case 1 
-------------Requirements------------
1- At least two letters
2- Numbers should be at the end, if there are any
3- Letters can be either lowercase or uppercase
4- if there are two letters, the cannot contain numbers
*/

let userName = "samhayder1133";
let regXUserName = /^[A-Za-z]{2,}\d*$/;
let testUserName = regXUserName.test(userName);
console.log(testUserName);
/* 
^[A-Za-z]   -> it matches all letters uppercase and lowercase
{2,}        -> it matches the quantity of the characters to be at lest 2
\d          -> it inserts matches for digits
*           -> it matches the characters that occur zero or more times
$           -> it makes sure the digits are at the end of the username
 */

/* Password */
/* ****************** */

/* Case 2 
-------------Requirements------------
1- Passwords must be at least 8 characters
2- Passwords must contain at least two consecutive digits
*/

let password = "samseul33";
let regXPassword = /(?=\w{8})(?=\D*\d{2})/;
let testPassword = regXPassword.test(password);
console.log(testPassword);

/* 
(?=\w{8})   -> a positive lookahead that matches 8 or more letters and digits
(?=)        -> positive lookahead
\w          -> matches all letters and number and _
{8}         -> a quantity specifier tha is looking for the exact number of occurrences which is 8
\D*         -> zero or more occurrences of characters that are not digits
\d{2}       -> two consecutive digits
*/
