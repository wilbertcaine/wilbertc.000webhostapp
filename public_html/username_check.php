<?php
require_once('dbconnect.php');
if (!empty($_POST[username]))
{
    $result = mysqli_query($con,"SELECT * FROM database1 WHERE username='" . $_POST[username] . "'");
    $count  = mysqli_num_rows($result);
    echo $count;
}
?>