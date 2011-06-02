<?php include("../includes/template.php");
include("../includes/connect.php");
renderHeader("Make a new post!");
?>
	<article>
		<form action="create.php" name="newPost" method="post">
			<h2>New Post!</h2>
			
			<p>
			Title: <input type="text" name="newTitle" />
			<br />
			Details: <textarea name="newContent"></textarea>
			<br />
			Tag: <input type="text" name="newTag" value="untagged" />
			Sourcefile: <input type="text" name="newSrc" />
			</p>
			<input type="submit" name="newPostSubmit" value="Submit your post!" />
		</form>
	</article>
<?php renderFooter();?>