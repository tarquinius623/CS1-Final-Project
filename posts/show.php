<?php
include("../includes/template.php");
include("../includes/connect.php");
$myID = $_GET['id'];
$results = mysql_query("SELECT * FROM posts WHERE id =".$myID) or die("Could not complete query");
$row = mysql_fetch_array($results);
renderHeader($row['title']);
?>
<article>
	<h2><?php echo $row['title']; ?>:</h2>
	<?php	print("<img src='../images/".$row['src']."' alt='' />");	?>
	<p><?php echo $row['content']; ?></p>
	<p>
		<a href="delete.php?id=<?php echo $myID; ?>">Delete this post?</a>
	</p> 
</article>
<?php renderFooter(); ?>