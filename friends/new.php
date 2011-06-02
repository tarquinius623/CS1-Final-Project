<?php include("../includes/template.php");
include("../includes/connect.php");
renderHeader("Add a new friend!");
?>
	<article>
		<form action="create.php" name="newPost" method="post">
			<h2>New Friend!</h2>
			
			<p>
			Name: <input type="text" name="newName" />
			<br />
			Details: <textarea name="newDetails"></textarea>
			<br />
			URL: http://www.<input type="text" name="newUrl" value="" />
			</p>
			<input type="submit" name="newPostSubmit" value="Submit your post!" />
		</form>
	</article>
<?php renderFooter();?>