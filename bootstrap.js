email.oninput = function validateemail() 
{
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
    {
        alert("Not a valid e-mail address");
        return false;
    }
};
password.oninput = function checkpassword()
{
	var password = document.getElementById('password').value;
	var str=$(inputs).val();
	var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;
 	if(!regularExpression.test(inputs)||inputs.length<8) 
 	{
    	    alert("Password should contain atleast one number one special character and at least 8 characters");
        	return false;
 	}
};

conpassword.oninput = function conpass()
{	var conpassword = document.getElementById('Confirmpassword').conpassword.value;
 	if(password.localeCompare(conpassword)!=0)
 		alert("The passwords do not match");
}
function submit()
{	var x = document.getElementById("email").value;
	var y = document.getElementById("password").value;
	var z = document.getElementById("Confirmpassword").value;
	var a = document.getElementById("Name").value;
	if(x==""||y==""||z==""||a=="")
		alert("Some of the fields are empty");
}