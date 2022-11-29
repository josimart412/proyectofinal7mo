<?php
require 'conexion.php';

$id_usuario_av = $_POST['id_usuario_av'];

$q = "DELETE FROM usuarios WHERE id_usuario = '$id_usuario_av'";

echo mysqli_query($con, $q);

?>