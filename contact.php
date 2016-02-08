<?php
  $name = strip_tags($_POST['name']);
  $visitor_email = strip_tags($_POST['email']);
  $message = htmlentities(strip_tags( $_POST['message']));

  $email_subject = "New Form submission from %s", $name;
  $email_body = "We've recieved a new message: \n". $message . "\n";


  $to = "isuwebdevclub@gmail.com";
  $headers = "From: $visitor_email \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);

  header("Location: /");
  exit(0);
?>
