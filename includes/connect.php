<?php 
// Development server: localhost
$server = "localhost";
$username = "root";
$password = "";
$database = "final";

mysql_connect($server, $username, $password) or die ("Could not connect to server");
mysql_select_db($database) or die ("Could not connect to database");
?>
