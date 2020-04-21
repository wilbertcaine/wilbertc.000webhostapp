<!DOCTYPE html>

<?php
require_once('dbconnect.php');
?>

<?php
  $result = mysqli_query($con,"SELECT * FROM database1 WHERE username='" . $_POST[username] . "' and password = '". $_POST[password]."'");
	$count  = mysqli_num_rows($result);
	if($count!=1) {
    session_unset();
    session_destroy();
    echo 'please reenter your password';
    echo '<script> setTimeout(function(){window.location = "index.html"; }, 2000); </script>';
    die();
	}
?>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Memory Game</title>
  <link rel="stylesheet" href="includes/styles.css">
</head>
<body>
<div style="height: 100%; width: 100%;">
<div id="stopwatch"></div>
<div class="memory-game">

    <div id=0 class="memory-card">
      <img id=1 class="front-face"/>
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=2 class="memory-card">
      <img id=3 class="front-face"/>
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=4 class="memory-card">
      <img id=5 class="front-face"/>
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=6 class="memory-card">
      <img id=7 class="front-face"/>
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=8 class="memory-card">
      <img id=9 class="front-face" />
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=10 class="memory-card">
      <img id=11 class="front-face"/>
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=12 class="memory-card">
      <img id=13 class="front-face"/>
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=14 class="memory-card">
      <img id=15 class="front-face"/>
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=16 class="memory-card">
      <img id=17 class="front-face" />
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=18 class="memory-card">
      <img id=19 class="front-face"/>
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=20 class="memory-card">
      <img id=21 class="front-face" />
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>

    <div id=22 class="memory-card">
      <img id=23 class="front-face"/>
      <img class="back-face" src="img/black_joker.svg" alt="black_joker" />
    </div>
    
</div>
</div>

  <script src="includes/scripts.js"></script>
</body>
</html>
