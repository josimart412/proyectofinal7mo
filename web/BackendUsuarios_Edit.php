<?php

require 'conexion.php';

$id_usuario_av = $_POST['id_usuario_av'];
$usuario_av = $_POST['usuario_av'];
$nombre_completo_av = $_POST['nombre_completo_av'];
$email_av = $_POST['email_av'];
$religion_av = $_POST['religion_av'];
$tipo_usuario_av = $_POST['tipo_usuario_av'];
$religion_av = $_POST['religion_av'];




$q = "UPDATE usuarios SET usuario='$usuario_av',nombre_completo='$nombre_completo_av',email='$email_av',tipo_usuario='$tipo_usuario_av', id_religion='$religion_av' WHERE id_usuario = '$id_usuario_av'";

echo mysqli_query($con, $q);


?>
