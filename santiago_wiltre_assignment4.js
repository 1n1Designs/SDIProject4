/*alert("JavaScript works!");
 * Project 4 SDI Course 1301
 * Developer name: Wiltre Santiago
 * Project name : Building function Libraries.
 */

// first function is. does a string follow a 123-456-7890.

var phoneNumber= "123-556-1200";

function verifyPhoneNumber(phoneNumber){
	
	if (phoneNumber.length  != 12){
		alert ("The phone number looks to short. \nPlease verify that you are including the dashes \n Ex. 123-456-7890 Please try again");
		return false
	} else {
		for (var i=0; i<=2; i++){
			var validateChar=phoneNumber.charAt(i);
			if(isNaN(validateChar) == true){
				alert ("Please verify area code information. \n" +"There is an error after number " + phoneNumber.charAt(i-1)+ "\n" + phoneNumber.charAt(i) + " Is not a valid number");
				return false;
			};
		};
		
		if (phoneNumber.charAt(3) != "-"){
			alert ("After the area code is require to place a \" - \" \nExample 555-888-0000");
			return false;
		};
		
		for (var i=4; i<=6; i++){
			var validateChar=phoneNumber.charAt(i);
			if(isNaN(validateChar) == true){
				alert ("Please verify the local number area. \n" + "There is an error after number " + phoneNumber.charAt(i-1) + "\n" + phoneNumber.charAt(i) +" Is not a valid number");
				return false;
			};
		};
		
		if (phoneNumber.charAt(7) != "-"){
			alert ("After the second block of number is require to place a \" - \" \nExample 555-888-0000");
			return false;
		};
		
		for (var i=8; i<=11; i++){
			var validateChar=phoneNumber.charAt(i);
			if(isNaN(validateChar) == true){
				alert ("Please verify the last 4 digits section. \n" + "There is an error after the number " + phoneNumber.charAt(i-1) + "\n" + phoneNumber.charAt(i) +" Is not a valid number");
				return false
			};
		};			
	};
	return true
	
};
// Function Email validation 
	
	
phone = verifyPhoneNumber(phoneNumber);
console.log(phone)
