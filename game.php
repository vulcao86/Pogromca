<?php include("includes/header.php") ?>
<?php include("includes/nav.php") ?>

<link rel="stylesheet" href="css/game.css">

    <?php 
        if(!logged_in()){
            redirect("index.php");
        }
    ?>

	<div class="container">
		<canvas width="800" height="600">

		</canvas>
		<fieldset>
			hello user!
			wsad - move
			j - laser beam
			k - blue ball
		</fieldset>
	</div>	

<?php include("includes/footer.php") ?>



