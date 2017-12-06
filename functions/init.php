<?php ob_start();


session_start();


include("db.php"); // inluding db connection
include("functions.php");


echo "it works\n";
echo "checking connection...\n";
if($con) {
echo "it is connected!";
}

 ?>