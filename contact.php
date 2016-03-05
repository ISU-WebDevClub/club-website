<?php
  $name = strip_tags($_POST['name']);
  $visitor_email = strip_tags($_POST['email']);
  $message = htmlentities(strip_tags($_POST['message']));

  $email_subject = "New Form submission from ".$name."";
  $email_body = "We've recieved a new message: \n".$message."\n";


  $to = "isuwebdevclub@gmail.com";


  mail($to,$email_subject,$email_body);

  header("Location: /");
  exit(0);
?>
