<?php
$name = addslashes($_POST['name']);
$from = addslashes($_POST['email']);
$subject = addslashes($_POST['subject']);
$message = addslashes($_POST['message']);

mail("runite623@gmail.com", $subject, $message, "From: ".$name." <".$from.">");

header("Location:../posts/index.php");
?>

