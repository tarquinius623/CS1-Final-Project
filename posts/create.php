<?php 
include('../includes/connect.php');

$newTitle = addslashes($_POST['newTitle']);
$newContent = addslashes($_POST['newContent']);
$newTag = addslashes($_POST['newTag']);
$newSrc = addslashes($_POST['newSrc']);

$query = "INSERT INTO posts(title, content, tags, created_at, src) VALUES ('".$newTitle."', '".$newContent."', '".$newTag."', NOW(),  '".$newSrc."');";

$results= mysql_query($query) or die("Could not complete query");
mysql_close();
header("Location:index.php");

?>