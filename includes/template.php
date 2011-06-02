<?php
	
	function renderHeader($title) {
		echo '
		<!DOCTYPE html>
		<html>
			<head>
				<title>'.$title.'</title>
				<link rel="stylesheet" type="text/css" href="../includes/option3.css" />
				<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
			</head>
			<body>
				<header>
					<img src="../images/header3.jpg" alt="header"/>
				</header>
				<nav>
					<ul>
						<li><a href="../posts/index.php">Home</a></li>
						<li><a href="../gallery/index.html">Gallery</a></li>
						<li><a href="../friends/index.php">Friends</a></li>
						<li><a href="../posts/searchform.php">Search</a></li>
						<li><a href="../includes/about.php">About</a></li>
						<li><a href="../includes/contact.php">Contact</a></li>
						<li><a href="../posts/new.php">New Post</a></li>
					</ul>
				</nav>';	
	}
	function renderFooter() {
		echo '		<footer>
						~A Lichtman Labs Production~
					</footer>
				</body>
			</html>';
	}
	
?>