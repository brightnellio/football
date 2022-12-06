<?php

    $database= new mysqli("localhost","root","","heroku_ee2ec3cda07786f");
    if ($database->connect_error){
        die("Connection failed:  ".$database->connect_error);
    }

?>
