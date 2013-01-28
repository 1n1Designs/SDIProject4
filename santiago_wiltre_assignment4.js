/*alert("JavaScript works!");
 * Project 4 SDI Course 1301
 * Developer name: Wiltre Santiago
 * Project name : Building function Libraries.
 */
var phoneNumber= "12b-556-12b0";
// first function is. does a string follow a 123-456-7890.

function verifyPhoneNumber(phoneNumber){
	
	if (phoneNumber.length  != 12){
		alert ("The phone number looks to short. \nPlease verify that you are including the dashes \n Ex. 123-456-7890 Please try again");
	} else {
		for (var i=0; i<=2; i++){
			var validateChar=phoneNumber.At(i);
			if(isNaN(validateChar)== true){
				alert (" Please verify area code information. \n" + phoneNumber.charAt(i) + " Is not a valid number");
			};
		};
		
		if (phoneNumber.charAt(3) != "-"){
			alert ("After the area code is require to place a \" - \" \nExample 555-888-0000");
		};
		
		for (var i=4; i<=6; i++){
			var validateChar=phoneNumber.charCodeAt(i);
			if(validateChar < 48 || validateChar > 57){
				alert (" Please verify the local number area. \n" + "There is an error after " + phoneNumber.charAt(i-1) + "\n" + phoneNumber.charAt(i) +" Is not a valid number");
			};
		};
		
		if (phoneNumber.charAt(7) != "-"){
			alert ("After the second block of number is require to place a \" - \" \nExample 555-888-0000");
		};
		
		for (var i=8; i<=11; i++){
			var validateChar=phoneNumber.charCodeAt(i);
			if(validateChar < 48 || validateChar > 57){
				alert (" Please verify the last 4 digits section. \n" + "There is an error after " + phoneNumber.charAt(i-1) + "\n" + phoneNumber.charAt(i) +" Is not a valid number");
			};
		};			
	};
	
};

verifyPhoneNumber(phoneNumber);

/*var dash = "-";
		*for (var i=3; i<8; i=i+4){
		*	var dashValidator = phoneNumber.charAt(i);
		*	if (dashValidator != dash){
		*	console.log(dashValidator)
		*		alert ("Please Verify that you type a dash \" - \". \nAfter the number " + phoneNumber.charAt(i-1));
		*	};
*/