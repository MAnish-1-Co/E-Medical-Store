function validate(){
    var user=document.getElementById('user').value;
    var pass=document.getElementById('pass').value;
    if(user=="admin" && pass=="user"){
        alert("LOGIN Successfully");
        window.open("cart.html");
        var loginb=document.getElementById('loginb').innerHTML="user";
        return false;
    }
    else{
        alert("LOGIN FAILED");
    }
}