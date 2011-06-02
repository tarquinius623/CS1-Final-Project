<?php 
include('../includes/connect.php');

$newTitle = addslashes($_POST['newName']);
$newContent = addslashes($_POST['newDetails']);
$newUrl = addslashes($_POST['newUrl']);


$query = "INSERT INTO friends(name, description, url) VALUES ('".$newTitle."', '".$newContent."', '".$newUrl."');";

print $query;

$results= mysql_query($query) or die("Could not complete query");
mysql_close();
header("Location:../friends/index.php");

?>