<?php

include("../includes/connect.php");

	$myID = $_GET['id'];
	$query = "DELETE FROM posts WHERE id = ".$myID;
	$results = mysql_query($query) or die("Could not complete query");
	header("Location:index.php");
	mysql_close();


?>