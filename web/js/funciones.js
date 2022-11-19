    $("#cancelar_is").click(function(){
    $("#modal_is").modal('hide');
    });

    $("#cancelar_ed").click(function(){
    $("#modal_ed").modal('hide');
    $("#btn_anterior").css('display', 'block');
    });










    //inicio de sesion AJAX

    $("#enviar_form").click(function(){
    iniciarsesion();
    });

        function iniciarsesion(){
    var usuario=$('#usuario').val()
    var password=$('#password').val()


    $.ajax({
        url: "inicio_s.php", //action
        type: "POST", //method
        data: { "usuario": usuario, "password": password},
        dataType: "json",
        success: function (respuesta){
            if (respuesta==1){
                location.href='index.php'
            }
            else{
                if (respuesta==2){
                    location.href='index3.php'
                }
                else{
                    alert("usuario o contraseña incorrecto")
                }
            }
        }
        
    })}










    function cargarPreguntas()
    {   
        $("#tabla1").empty()
        var letra = $("#letra").val()
        if (letra != ""){
            $.ajax({
            url: "BackendEventos.php", //action
            type: "POST", //method
            data: {"letra": letra },
            //dataType: "json",
            success: function(respuesta){
                
                var box = JSON.parse(respuesta)
                console.log("tablaEventos:",box)

                $.each(box, function(key, value){
                    //console.log("Respuesta: " + respuesta)
                    console.log("Key: " , key)
                    console.log("Value: " , value)

                    $("#tabla1").append("<tr id='fila"+key+"'  >"+
                    "<td class='tablaEventos'>"+value.id_evento+"</td>"+
                    "<td class='tablaEventos'>"+value.id_museo+"</td>"+
                    "<td class='tablaEventos'>"+value.id_sala+"</td>"+
                    "<td class='tablaEventos'>"+value.fecha+"</td>"+
                    "<td class='tablaEventos'>"+value.titulo+"</td>"+
                    "<td class='tablaEventos'>"+value.descripcion+"</td>"+
                    "<td class='tablaEventos'>"+"<select class='form-control altura' id='letra_tabla"+key+"'><option class='form-control altura' value='0'>Seleccione</option><option class='form-control altura' value='e'>En curso</option><option class='form-control altura' value='p'>Proximo</option><option class='form-control altura' value='c'>Cumplido</option><option class='form-control altura' value='s'>Suspendido</option></select></td>"+
                    "</tr>")
                    
                    $("#letra_tabla"+key+"").val(value.estado)
                    key = key + 1
                    
                })
                
            }
            
        })
        }
        
    }

    //Funciones relacionadas a la seleccion de religiones

    var cristianismo=0;
    var hinduismo=0;
    var astrologia=0;
    var misticismo=0;
    var opcion=1;
    var ultimaseleccion;
    var seleccion1
    var seleccion2
    var seleccion3
    var seleccion4
    var seleccion5
    var seleccion6
    var seleccion7
    var seleccion8
    var seleccion9
    var seleccion10
  




    $("#btn_ed").click(function(){
      var opcion=1;
      $("#btn_anterior").hide();
      })

    //Funciones relacionadas al boton siguiente

    $("#btn_siguiente").click(function(){
      opcion=opcion+1;
      if (opcion==1){
        $("#btn_anterior").hide();
      }
      $("#btn_anterior").show();

      if (opcion==2) {
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 2");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("2");
      }
      else if (opcion==3){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 3");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("3");
    }
      else if (opcion==4){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 4");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("4");
    }
    else if (opcion==5){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 5");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("5");
    }
    else if (opcion==6){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 6");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("6");
    }
    else if (opcion==7){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 7");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("7");
    }
    else if (opcion==8){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 8");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("8");
    }
    else if (opcion==9){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 9");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("9");
    }
    else if (opcion==10){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 10");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("10");
    }

    if ($("#op1").is(':checked')) {
      cristianismo++
      alert (cristianismo)
      ultimaseleccion=1
    }
    else if ($("#op2").is(':checked')) {
      hinduismo++
      alert (hinduismo)
      ultimaseleccion=2
    }
    else if ($("#op3").is(':checked')) {
      astrologia++
      alert (astrologia)
      ultimaseleccion=3
    }
    else if ($("#op4").is(':checked')) {
      misticismo++
      alert (misticismo)
      ultimaseleccion=4
    }

    //funcion que asigna a una variable que respuesta se selecciono en cada opcion

    if(opcion==2){
      seleccion1=ultimaseleccion
    }
    else if (opcion==3) {
      seleccion2=ultimaseleccion
    }
    else if (opcion==4) {
      seleccion3=ultimaseleccion
    }
    else if (opcion==5) {
      seleccion4=ultimaseleccion
    }
    else if (opcion==6) {
      seleccion5=ultimaseleccion
    }
    else if (opcion==7) {
      seleccion6=ultimaseleccion
    }
    else if (opcion==8) {
      seleccion7=ultimaseleccion
    }
    else if (opcion==9) {
      seleccion8=ultimaseleccion
    }
    else if (opcion==10) {
      seleccion9=ultimaseleccion
    }
    })
    
    
    //funciones relacionadas al boton anterior 

    $("#btn_anterior").click(function(){
      opcion=opcion-1;
      if (opcion==1){
        $("#btn_anterior").hide();
      }

      if (opcion==1) {
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 1");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("1");
      }
      else if (opcion==2){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 2");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("2");
    }
    else if (opcion==3){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 3");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("3");
    }
    else if (opcion==4){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 4");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("4");
    }
    else if (opcion==5){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 5");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("5");
    }
    else if (opcion==6){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 6");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("6");
    }
    else if (opcion==7){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 7");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("7");
    }
    else if (opcion==8){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 8");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("8");
    }
    else if (opcion==9){
        $("#TituloForm").empty();
        $("#TituloForm").append("Agregar respuesta 9");
        $("#textoOp1").empty();
        $("#textoOp1").append("estas");
        $("#textoOp2").empty();
        $("#textoOp2").append("en la");
        $("#textoOp3").empty();
        $("#textoOp3").append("opcion");
        $("#textoOp4").empty();
        $("#textoOp4").append("9");
    }

    //funcion para quitar puntaje a religion determinada (siguiendo en funciones relacionadas al boton anterior)
    if(opcion==1){
          if (seleccion1==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion1==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion1==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion1==4) {
            misticismo--
            alert(misticismo)
          }
    }
    else if (opcion==2) {
          if (seleccion2==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion2==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion2==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion2==4) {
            misticismo--
            alert(misticismo)
          }
    }
    else if (opcion==3) {
          if (seleccion3==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion3==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion3==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion3==4) {
            misticismo--
            alert(misticismo)
          }
    }
    else if (opcion==4) {
          if (seleccion4==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion4==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion4==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion4==4) {
            misticismo--
            alert(misticismo)
          }
    }
    else if (opcion==5) {
          if (seleccion5==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion5==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion5==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion5==4) {
            misticismo--
            alert(misticismo)
          }
    }
    else if (opcion==6) {
          if (seleccion6==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion6==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion6==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion6==4) {
            misticismo--
            alert(misticismo)
          }
    }
    else if (opcion==7) {
          if (seleccion7==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion7==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion7==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion7==4) {
            misticismo--
            alert(misticismo)
          }
    }
    else if (opcion==8) {
          if (seleccion8==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion8==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion8==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion8==4) {
            misticismo--
            alert(misticismo)
          }
    }
    else if (opcion==9) {
          if (seleccion9==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion9==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion9==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion9==4) {
            misticismo--
            alert(misticismo)
          }
    }
    else if (opcion==10) {
          if (seleccion10==1) {
            cristianismo--
            alert (cristianismo)
          }
          else if (seleccion10==2) {
            hinduismo--
            alert(hinduismo)
          }
          else if (seleccion10==3) {
            astrologia--
            alert(astrologia)
          }
          else if (seleccion10==4) {
            misticismo--
            alert(misticismo)
          }
    }
    })