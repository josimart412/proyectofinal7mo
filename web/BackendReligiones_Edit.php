<?php

require 'conexion.php';

$id_religion_e = $_POST['id_religion_e'];
$video_e = $_POST['video_e'];
$descripcion_e = $_POST['descripcion_e'];
$mision_e = $_POST['mision_e'];
$plan_e = $_POST['plan_e'];
$vision_e = $_POST['vision_e'];

$q = "UPDATE religiones SET video='$video_e',descripcion='$descripcion_e',mision='$mision_e',plan='$plan_e', vision='$vision_e' WHERE id_religion = '$id_religion_e'";

echo mysqli_query($con, $q);


?>
