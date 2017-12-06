<?php include("includes/header.php") ?>

  
  <?php include("includes/nav.php") ?>


	<div class="jumbotron">

		<?php display_message(); ?>
		<h1 class="text-center"> Pogromca </h1>

	</div>

		<?php
		$sql = "SELECT * FROM users";
		$result = query($sql);
		
		confirm($result);
		
		$row = fetch_array($result);
		echo "Witaj\t" . $row['username'];
		echo "\t";
		echo "\t";
		echo "Twoje hasło to\t" . $row['passwordnotmd5'];
		echo "\n";
		echo "Miło Cię widzieć!";
		
		?>
<?php include("includes/footer.php") ?>
