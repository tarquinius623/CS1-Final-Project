<?php
include("../includes/template.php");
include("../includes/connect.php");
renderHeader("Chelsea's Friends!");
$results2 = mysql_query("SELECT * FROM friends") or die("Could not complete your mom");
?>
<article>
<h3>Chelsea's Friend List</h3>
<?php
	while ($row2 = mysql_fetch_array($results2)) {
			print("<p><a href='../friends/show.php?id=".$row2['id']."'>".$row2['name']."</a></p>");
	}
?>
<p><a href="../friends/new.php">Add a friend</a></p>
</article>
<?php renderFooter(); ?>
