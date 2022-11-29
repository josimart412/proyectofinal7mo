<?php

require 'conexion.php';
require 'funciones.php';

$usuario = $_POST['usuario_av'];
$nombre_completo = $_POST['nombre_completo_av'];
$email = $_POST['email_av'];
$password = $_POST['password_av'];
$id_religion = $_POST['religion_av'];
$valida=0;

if (valida_texto($nombre_completo,150)==false){
  $valida=1;
}


if($valida==0){
$q = "INSERT INTO usuarios (`usuario`, `nombre_completo`, `email`, `password`, `id_religion`, `tipo_usuario`) VALUES ('$usuario','$nombre_completo','$email','$password','$id_religion', 'u')";
$r = mysqli_query($con,$q);
}
else{
    $r = '0';
}

echo mysqli_query($con, $q);





















































/*$alumnos3 = $_POST['alumnos3'];
$opcion = $_POST['opcion'];

$q = "select * from alumnos3 where UPPER(nombre) like '%" . strtoupper($alumnos3) . "%'";
//$q = "select * from alumnos3";



if($opcion == 1)
{
  $q = $q."ORDER BY fecha_de_nacimiento ASC";
}
if($opcion == 2)
{
  $q = $q."ORDER BY fecha_de_nacimiento DESC";
}
if($opcion == 3)
{
  $q = $q."ORDER BY id_alumno ASC";
}
if($opcion == 4)
{
  $q = $q."ORDER BY id_alumno DESC";
}

$r = mysqli_query($con, $q);
//se arma un array asociativo(nombre campo , valor) que despues se
//va a trasformar en un json para devolver

if (mysqli_num_rows($r) > 0){
  
  while ($valores = mysqli_fetch_assoc($r)){
     $array[]= $valores;
     //echo($array[1]);
    }
    //envio respuesta a ajax como json
    echo (json_encode($array)); 
    
    
  }

  

 

mysqli_close($con);


*/
?>
