<?php
  $name = strip_tags($_POST['name']);
  $visitor_email = strip_tags($_POST['email']);
  $message = htmlentities(strip_tags($_POST['message']));
  $email_subject = "New Message from ".$name."";
  $email_body = "".$name." at <".$visitor_email."> tells us: \n".$message."\n";
  $to = "isuwebdevclub@gmail.com";

  mail($to,$email_subject,$email_body);
  header("Location: /");

  exit(0);
?>
