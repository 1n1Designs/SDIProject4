/*alert("JavaScript works!");
 * Project 4 SDI Course 1301
 * Developer name: Wiltre Santiago
 * Project name : Building function Libraries.
 */

// first function is. does a string follow a 123-456-7890.

var myLib = function(){ 

	var verifyPhoneNumber = function (phoneNumber){
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
		return true;
	
	};

// Function Email validation 

	var emailValidation = function (emailInput){
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
	var urlValidation = function (enterString){
		var http = enterString.search("http://");
		var https= enterString.search("https://");
		var blank= enterString.indexOf(" "); 
		if ( blank != -1){
			return false
		};
		if (http == -1){
			if (https == -1){
				return false;
			} else {
				if (https == 0){
					return true + " https://";
				};
			};		
		} else {
			if (http == 0){
				return true + " http://";
			};
		};
	};


//String Capitalization. Given the string the function will capitalize the first letter of each word. 

	var stringUp = function (string){
	var space = string.split(" ");
	var joint = "";
	for (i=0, k = space.length; i<k; i++){
		var newString = space[i].replace(space[i].charAt(0),(space[i].charAt(0)).toUpperCase());
		joint = joint.concat(newString + " ");				
	};
	return joint;
	
	};
	
// Number Library 

	var decimal = function (number){
		
	};
// Next Function 

	
	//Return object below
	return{
		"verifyPhoneNumber" : verifyPhoneNumber,
		"emailValidation"   : emailValidation,
		"urlValidation"     : urlValidation,
		"stringUp"          : stringUp
		
		
	};

};
var phoneNumber= "555-666-7777";
var email = "hi coma@li.com";
var url = "https://www.1800-support.com";
var phrase = "testing capital letters";

var myNewLib = new myLib();
console.log ("Is this a phone number? " + myNewLib.verifyPhoneNumber(phoneNumber));
console.log ("Is this a valid email? " + myNewLib.emailValidation(email));
console.log ("Is this a url and what protocol use? " + myNewLib.urlValidation(url));
console.log ("Capitalize the following phrase " + phrase + " Modify phrase is: " + myNewLib.stringUp(phrase))

