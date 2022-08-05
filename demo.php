<?php
$user =$_POST['user'];
$pass =$_POST['pass'];

$con =new mysqli("localhost","root","","test");
if($con->connect_error){
    die("Failed to connect :" .$con->connect_error);
}
else{
    $stmt =$con->prepare("select *from signup where Email = ?");
    $stmt->bind_param("s",$user);
    $stmt->execute();
    $stmt_result=$stmt->get_result();
    if($stmt_result->num_rows>0){
        $data=$stmt_result->fetch_assoc();
        if($data['Password']===$pass){
            echo "<script> alert('LOGIN SUCCESFULLY') </script>";
            echo "<script> window.open('index.html') </script>";
        }
        else{
            echo "INVALID ";
            echo "<script> window.open('login.html') </script>";
        }
    }
    else{
        echo "INVALID ";
        echo "<script> window.open('login.html') </script>";
    }

    $select_user =mysqli($con,"Select *from signup where Email='$user'") or die('query failed');
    if(mysqli_num_rows($select_user)>0){
        $fetch_user=mysqli_fetch_assoc($select_user);
        echo $fetch_user['fname'];
    }
    }

?>
<p>username: <span><?php echo $fetch_user['fname']; ?></span></p>