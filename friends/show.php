<?php
include("../includes/template.php");
include("../includes/connect.php");
$myID = $_GET['id'];
$results = mysql_query("SELECT * FROM friends WHERE id =".$myID) or die("Could not complete query");
$row = mysql_fetch_array($results);
renderHeader($row['name']);
?>
<article>
	<h2><?php echo $row['name']; ?>:</h2>
	<p><?php echo $row['description']; ?></p>
	<p><a href="http://www.<?php echo $row['url']; ?>" >Go to <?php echo $row['name']; ?></a></p>
	<p>
		<a href="delete.php?id=<?php echo $myID; ?>">Delete this post?</a>
	</p> 
</article>
<?php renderFooter(); ?>