<?php include("includes/header.php") ?>
<?php include("includes/nav.php") ?>

	<div class="jumbotron">
		<h1 class="text-center">
		<?php 
			if(logged_in()){

				echo "Logged in";
				//echo $password;

			} else {


				redirect("index.php");
			}
		?>
		<br>
			<p><a href="Pogromca/game.html" onClick="alert('Możesz zagrać w grę');">Zagraj</a></p>
		</h1>

	</div>

<?php include("includes/footer.php") ?>