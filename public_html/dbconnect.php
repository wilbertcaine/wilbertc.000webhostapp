<?php

function db_connect() {
    static $con;
    if(!isset($con)) {
        $config = parse_ini_file('../private/config.ini'); 
        $con = mysqli_connect($config['servername'],$config['username'],$config['password'],$config['dbname']);
    }
    if($con === false) {
        return mysqli_connect_error(); 
    }
    return $con;
}

$con = db_connect();

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
?> 