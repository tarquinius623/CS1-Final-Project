<?php 
include("../includes/template.php");
include('../includes/connect.php');
renderHeader("Your Search Results");

$searchTerm = addslashes($_POST['searchQuery']);
$searchCat = addslashes($_POST['searchCat']);

$query = "SELECT * FROM posts WHERE ".$searchCat." LIKE '%".$searchTerm."%'";

$results= mysql_query($query) or die("Could not complete query"); ?>
<article>
<?php
while ($row = mysql_fetch_array($results)) {
			print("<h2><a href='show.php?id=".$row['id']."'>".$row['title']."</a></h2>");
}
mysql_close();
?>
</article>
<?php renderFooter();?>