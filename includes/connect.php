<?php 
// Development server: localhost
//$server = "localhost";
//$username = "root";
//$password = "";
//$database = "final";

//Development server: orchestra.io
$server = "10.194.111.8";
$username = "user_83da255f";
$password = "&rQxV-U4%wFYQv";
$database = "db_83da255f";

mysql_connect($server, $username, $password) or die ("Could not connect to server");
mysql_select_db($database) or die ("Could not connect to database");
?>
