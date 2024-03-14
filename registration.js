function validate()
{
    var fn=frm.fname.value;
    for(x in fn)
    {
        ch=fn.charCodeAt(x);
        if(ch<65||ch>90 && ch<97 || ch>122 )
        {
            alert("invalid firstname");
            return false;
        }
    }
    var ln=frm.lname.value;
    for(y in ln)
    {
        ch=ln.charCodeAt(y);
        if(ch<65||ch>90 && ch<97 || ch>122 )
        {
            alert("invalid lastname");
            return false;
        }
    }
    var phn=frm.phone.value;
    var lenp=phn.lenght;
    {
        if(lenp>10)
        {
            alert("phone number should be exactly 10 digit");
            return false;
        }
    }
    var pwd1=frm.password.value;
    var pwd2=pwd1.lenght;
    if(pwd2%2==1)
    {
        alert("password should contain even number of character");
        return false;
    }

if(pwd2>8)
{
    alert("password should not exceed 8 digit");
    return false;

}
var reg=/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/
var mail=frm.mailid.value;
if(reg.test(mail))
{
    alert("registration successful");
}
else{
    alert("invalid email");
    return false;

}
return true;

}