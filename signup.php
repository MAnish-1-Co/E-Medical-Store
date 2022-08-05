<?php
include 'database.php';
if(isset($_POST['submit'])){
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $dob=$_POST['dob'];
    $gender=$_POST['gender'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $pass=$_POST['pass'];

    $select=mysqli_query($con,"select *from signup where Email ='$email'") or die('query Failed');
    if(mysqli_num_rows($select)>0){
        echo "<script>alert('USER EXISTS')</script>";
        echo "<script>window.open('signup.html')</script>";
    }
    else{
        mysqli_query($con,"insert into signup(fname,lname,DOB,Gender,phone,Email,Password) values('$fname','$lname','$dob','$gender','$phone','$email','$pass')") or die ('query failed');
        echo "<script>alert('Registered Successfully!!')</script>";
        echo "<script>window.open('login.html')</script>";

    }
    
//     $sql="insert into signup(fname,lname,DOB,Gender,phone,Email,Password) values('$fname','$lname','$dob','$gender','$phone','$email','$pass')";
//     if(mysqli_query($con,$sql)){
//         echo "<script>alert('new record inserted')</script>";
//     }
//     else{
//         echo "error:" .mysqli_error($con);
//     }
//     mysqli_close($con);

 }
?>