<?php


function valida_texto($tx,$l){
    $resultado=true;
    if (empty($tx)){
        $resultado=false;
    }
    else{
        if (strlen($tx)>$l){
        $resultado=false;
        }
    }
    return $resultado;
    }



    function valida_dni($dni){
        require  'conexion.php';
        $repetido=true;

        $q="SELECT dni FROM tutores where dni=$dni";
        $r=mysqli_query($con, $q);
        if($r){
        if(mysqli_num_rows($r)>0){
           return $repetido;
        }
        else{
            $repetido=false;
            return $repetido;
        }
        }
        else{
            echo '<script> alert("no se pudo conectar con la base de datos")</script>';
        }
    }



?>