<?php

include("../includes/connect.php");

	$myID = $_GET['id'];
	$query = "DELETE FROM friends WHERE id = ".$myID;
	$results = mysql_query($query) or die("Could not complete query");
	header("Location:../friends/index.php");
	mysql_close();


?>