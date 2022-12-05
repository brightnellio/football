<?php

    $database= new mysqli("localhost","root","","academy");
    if ($database->connect_error){
        die("Connection failed:  ".$database->connect_error);
    }

?>