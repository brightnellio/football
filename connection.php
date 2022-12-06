<?php

   <?php
//Get Heroku ClearDB connection information
$cleardb_url = parse_url(getenv("mysql://b606718d849413:5f793c83@us-cdbr-east-06.cleardb.net/heroku_ee2ec3cda07786f?reconnect=true"));
$cleardb_server = $cleardb_url["us-cdbr-east-06.cleardb.net"];
$cleardb_username = $cleardb_url["b606718d849413"];
$cleardb_password = $cleardb_url["5f793c83"];
$cleardb_db = substr($cleardb_url["path"],1);
$active_group = 'default';
$query_builder = TRUE;
// Connect to DB
$conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);

?>
