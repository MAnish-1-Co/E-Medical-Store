const { clear } = require("console");

const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
const shop=document.getElementById('shop');

//index HTML
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
if(shop){
    shop.addEventListener('click',()=>{
        shop.classList.open('active')
    })
}


var MainImg=document.getElementById("MainImg");
        var smallimg=document.getElementsByClassName("small-img");

        smallimg[0].onclick=function(){
            MainImg.src=smallimg[0].src;
        }
        smallimg[1].onclick=function(){
            MainImg.src=smallimg[1].src;
        }
        smallimg[2].onclick=function(){
            MainImg.src=smallimg[2].src;
        }
        smallimg[3].onclick=function(){
            MainImg.src=smallimg[3].src;
        }




/*Login SCRIPTING FILE*/
function Login(){
    var user=document.getElementById('uname').value;
    var pass=document.getElementById('upass').value;
    if(user=="" || pass==""){
        alert("Enter the Username & Password");
        location.reload();
        return false;
    }
    else if((user="Manish" && pass=="Manish123")||(user="Abhay" && pass=="Abhay123")||(user="Kashish" && pass=="Kashish123")){
        alert('Login Successfuly');
        window.open("index.html");
        return false;
    }
    else{
        alert('LOGIN DENIED');
        location.reload();        
    }
}

/*Sign UP MODULE*/
function Signup(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var phone=document.getElementById('phone').value;
    var email=document.getElementById('email').value;
    var pwd=document.getElementById('pwd').value;
    if(fname==""||lname==""||phone==""||email==""||pwd==""){
        alert('Enter the Signup Details');
        location.reload();
        return false;
    }
    else if(phone.match(phoneno)){
        return true;
    }

    else{
        alert("Login Successfully");
        window.open('login.html');
        return false;
    }
}
