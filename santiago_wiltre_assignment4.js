/*alert("JavaScript works!");
 * Project 4 SDI Course 1301
 * Developer name: Wiltre Santiago
 * Project name : Building function Libraries.
 */

// first function is. does a string follow a 123-456-7890.

function verifyPhoneNumber(phoneNumber){
	
	if (phoneNumber.length  != 12){
		return false;
	} else {
		for (var i=0; i<=2; i++){
			var validateChar=phoneNumber.charAt(i);
			if(isNaN(validateChar) == true){
				return false;
			};
		};
		
		if (phoneNumber.charAt(3) != "-"){
			return false;
		};
		
		for (var i=4; i<=6; i++){
			var validateChar=phoneNumber.charAt(i);
			if(isNaN(validateChar) == true){
				return false;
			};
		};
		
		if (phoneNumber.charAt(7) != "-"){
			return false;
		};
		
		for (var i=8; i<=11; i++){
			var validateChar=phoneNumber.charAt(i);
			if(isNaN(validateChar) == true){
				return false;
			};
		};			
	};
	alert(phoneNumber + "\nIs a valid phone number")
	return true;
	
};

// Function Email validation 

function emailValidation (emailInput){
	var dot=".";
	var at="@";
	var dotPosition = emailInput.indexOf(dot);
	var lastDotPosition = emailInput.lastIndexOf(dot);
	var atPosition = emailInput.indexOf(at);
	var dotSomething = emailInput.lastIndexOf(dot)+2;
		
	if (atPosition == 0 || atPosition ==-1 || lastDotPosition == -1 || (atPosition +1) >= lastDotPosition || dotSomething > (emailInput.length -1) || dotPosition == (atPosition - 1)){
	    	return false;
	};
	return true;
};



//String URL verify since the homework ask for validate if the string start with http:// or https:// I use that as a constant for the verification. 
function urlValidation (enterString){
	var http = enterString.search("http://");
	var https= enterString.search("https://");
	if (http == -1){
		if (https == -1){
			return false;
		} else {
			if (https == 0){
				return true;
			};
		
		};		
	} else {
		if (http == 0){
			return true;
		};
	};
};


//String Capitalization. Given the string the function will capitalize the first letter of each word. 

function (string);
var space = string.split(" ");
for (i=0, k=space.length; i,j; i++)





//Main Code testing the functions. 
// Phone Number testing 
var phoneNumber = "555-777-8888";	
var phoneTest = verifyPhoneNumber(phoneNumber);
console.log(phoneTest)

// Email testing
var email = "aaa@bbb.ccc";
var emailTest= emailValidation(email);
console.log (emailTest);

// String URL testing 
var stringTest = "https://www.hotmail.com";
var stringTest = urlValidation(stringTest);
console.log(stringTest);

	
