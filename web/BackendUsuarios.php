<?php
require 'conexion.php';
$letra = $_POST['letraUsuarios'];
$dia = date("Y/m/d");


if ($letra == "t"){
  $q = "SELECT * FROM usuarios";
}
else{
  if ($letra == "a"){
   $q = "SELECT * FROM usuarios WHERE tipo_usuario = '$letra'";

}
  else{
    $q = "SELECT * FROM usuarios WHERE tipo_usuario = '$letra'";
}
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



?>