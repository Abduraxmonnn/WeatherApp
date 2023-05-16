<?php

	$to = "youremail@example.com"; // this is your Email address

	$from  = isset($_POST['email']) ? $_POST['email'] : ''; // this is the sender's Email address
	$sender_name = isset($_POST['name']) ? $_POST['name'] : '';
	$note = isset($_POST['note']) ? $_POST['note'] : '';

	$subject = "Form submission";

	$message = $sender_name . " has send the contact message. He / she wrote the following... ". "\n\n" . $note;

	$headers = 'From: ' . $from;
	mail($to, $subject, $message, $headers);

?>