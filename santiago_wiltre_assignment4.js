/*alert("JavaScript works!");
 * Project 4 SDI Course 1301
 * Developer name: Wiltre Santiago
 * Project name : Building function Libraries.
 */
var phoneNumber= "12a2456-1230";
// first function is. does a string follow a 123-456-7890.

function verifyPhoneNumber(phoneNumber){
	
	if (phoneNumber.length  != 12){
		console.log ("Verify that the phone number include the dashes \n Ex. 123-456-7890 Please try again");
	} else {
		var dash = "-";
		for (var i=3; i<8; i=i+4){
			var dashValidator = phoneNumber.charAt(i);
			if (dashValidator != dash){
			console.log(dashValidator)
				alert ("Please Verify that you type a dash \" - \". \nAfter the number " + phoneNumber.charAt(i-1));
			};
		};
		for (var i=0; i<=2; i++){
			var validateChar=phoneNumber.charCodeAt(i);
			if(validateChar < 48 || validateChar > 57)
			alert (" Please verify area code information. \n Look's like and invalid number have been write");
		};
					
	};
	
};

verifyPhoneNumber(phoneNumber);