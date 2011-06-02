<?php
	include ("../includes/template.php");
	include("../includes/connect.php");
	renderHeader("Welcome to Chelsea's Blog!");
	$results = mysql_query("SELECT * FROM posts ORDER BY created_at DESC") or die("Could not complete query");
?>
<div id="content">
<?php
	while ($row = mysql_fetch_array($results)) {
			print("<article><img src='../images/".$row['src']."' alt='' /><a href='show.php?id=".$row['id']."'>".$row['title']."</a></article>");
	}
?>
</div>
<?php renderFooter(); ?>