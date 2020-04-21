<!DOCTYPE html>
<html>
<header>
    <title>Memory Game</title>
</header>
<body>

<?php
require_once('dbconnect.php');
if (!empty($_POST[username]) && !empty($_POST[password])){
    $result = mysqli_query($con,"SELECT * FROM database1 WHERE username='" . $_POST[username] . "' and password = '". $_POST[password]."'");
	$count  = mysqli_num_rows($result);
	if($count==0) {
        $sql = "INSERT INTO database1 (username, password) VALUES ('$_POST[username]','$_POST[password]')";
        $result = $con->query($sql);
	} else {
        echo "";
        die();
	}
}
else{
    echo "l";
}
?>
You have successfully registered
</body>

</html>
