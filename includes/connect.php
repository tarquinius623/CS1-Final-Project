<?php 
// Development server: localhost
//$server = "localhost";
//$username = "root";
//$password = "";
//$database = "final";

//Development server: orchestra.io
$server = "10.194.111.8";
$username = "user_3b905224";
$password = "n2UQbFy%K3r&vn";
$database = "db_3b905224";

mysql_connect($server, $username, $password) or die ("Could not connect to server");
mysql_select_db($database) or die ("Could not connect to database");
?>
