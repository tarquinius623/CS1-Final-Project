<?php 
include("../includes/template.php");
renderHeader("Contact!");
?>
<script type="text/javascript">
	function nameFeed() {
		var elem = document.getElementById("nameFeedback");
		if (document.getElementById("name").value != ""){
			elem.className = "";
			elem.innerHTML = "<p><img src='../images/confirm.png' alt='confirm' /></p>";
		} else {
			elem.innerHTML = "<p><img src='../images/warning.png' alt='warning' /></p>";
		}
	}

	function emailFeed() {
		var elem = document.getElementById("emailFeedback");
		if (document.getElementById("email").value != ""){
			elem.className = "";
			elem.innerHTML = "<p><img src='../images/confirm.png' alt='confirm' /></p>";
		} else {
			elem.innerHTML = "<p><img src='../images/warning.png' alt='warning' /></p>";
		}
	}
	
	function subjectFeed() {
		var elem = document.getElementById("subjectFeedback");
		if (document.getElementById("subject").value != ""){
			elem.className = "";
			elem.innerHTML = "<p><img src='../images/confirm.png' alt='confirm' /></p>";
		} else {
			elem.innerHTML = "<p><img src='../images/warning.png' alt='warning' /></p>";
		}
	}
	function messageFeed() {
		var elem = document.getElementById("messageFeedback");
		if (document.getElementById("message").value != ""){
			elem.className = "";
			elem.innerHTML = "<p><img src='../images/confirm.png' alt='confirm' /></p>";
		} else {
			elem.innerHTML = "<p><img src='../images/warning.png' alt='warning' /></p>";
		}
	}
</script>
<article>
	<h2>Contact Us!</h2>
	<form id="contactForm" action="mail.php" method="post">
		<table>
			<tr>
				<td><label for="name">Name:</label></td>
				<td><input type="text" id="name" onblur="nameFeed();" /></td>
				<td id="nameFeedback"></td>
			</tr>
			<tr>
				<td><label for="email">Email Address:</label></td>
				<td><input type="email" id="email" onblur="emailFeed();"/></td>
				<td id="emailFeedback">
			</tr>
			<tr>
				<td><label for="subject">Subject:</label></td>
				<td><input type="text" id="subject" onblur="subjectFeed();"/></td>
				<td id="subjectFeedback">
			</tr>
			<tr>
				<td><label for="message">Message:</label></td>
				<td><textarea id="message" onblur="messageFeed();"></textarea></td>
				<td id="messageFeedback">
			</tr>
		</table>
		<input type="submit" />
	</form>
</article>
<?php renderFooter(); ?>