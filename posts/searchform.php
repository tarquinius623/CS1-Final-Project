<?php include("../includes/template.php");
renderHeader("Search for previous posts!");
?>
	<article>
		<h2>Search for previous posts!</h2>
		<form action="searchresults.php" name="newSearch" method="post">
			<input type="text" name="searchQuery" />
			<select name="searchCat">
				<option value="title">Title</option>
				<option value="content">Content</option>
				<option value="tag">First Name</option>
			</select>
			<br />
			<input type="submit" />
		</form>
	</article>
<?php renderFooter();?>