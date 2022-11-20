<?php
$name = $_POST['nombre'];
$email = $_POST['email'];
$tel = $_POST['telefono'];
$mensaje = $_POST['mensaje'];


$header = 'De: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por  " . "$name" . ",\r\n";
$message .= "Su e-mail es: " . "$email" . " \r\n";
$message .= "Su teléfono es: " . "$tel" . " \r\n";
$message .= "Mensaje: " . "$mensaje" . " \r\n";
$message .= "Enviado el " . date('d/m/Y', time());

$for = 'eliel.bep@gmail.com';
$subjet = 'West-Celular';

mail($for, $subjet, utf8_decode($message), $header);
?>