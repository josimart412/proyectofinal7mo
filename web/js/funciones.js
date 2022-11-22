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

    //Funciones relacionadas al boton cancelar inicio de session

    $("#cancelar_is").click(function(){
    $("#modal_is").modal('hide');
    });


    //Funciones relacionadas al boton cancelar inicio de session


    $("#cancelar_ed").click(function(){
    $("#modal_ed").modal('hide');
    $("#btn_anterior").css('display', 'block');
    cristianismo=0;
    hinduismo=0;
    astrologia=0;
    misticismo=0;
    opcion=1;
    ultimaseleccion=0;
    seleccion1=0;
    seleccion2=0;
    seleccion3=0;
    seleccion4=0;
    seleccion5=0;
    seleccion6=0;
    seleccion7=0;
    seleccion8=0;
    seleccion9=0;
    seleccion10=0;

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

    });
    //////////////////
    //Para claudio://
    ////////////////////////////////////////////////////////
    //Funciones relacionadas a la seleccion de religiones//
    //////////////////////////////////////////////////////


    //declaracion de variables usadas
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
      $("#btn_finalizar").hide();
      $("#TituloForm").empty();
      $("#TituloForm").append("¿Hay un ser divino?");
      $("#textoOp1").empty();
      $("#textoOp1").append("Hay un solo ser divino");
      $("#textoOp2").empty();
      $("#textoOp2").append("Hay varios seres divinos");
      $("#textoOp3").empty();
      $("#textoOp3").append("No, no hay un ser divino");
      $("#textoOp4").empty();
      $("#textoOp4").append("Creo que hay algo, pero no se que");
      $("#op1").prop("checked", false);
      $("#op2").prop("checked", false);
      $("#op3").prop("checked", false);
      $("#op4").prop("checked", false);
  
      $("#btn_siguiente").attr('disabled', true);
      })

    //Funciones relacionadas al boton siguiente

    $("#btn_siguiente").click(function(){
      opcion=opcion+1;
      if (opcion==1){
        $("#btn_anterior").hide();
      }
      if (opcion>9){
        $("#btn_siguiente").hide();
        $("#btn_finalizar").show();
      }
      $("#btn_anterior").show();

      if (opcion==2) {
        $("#TituloForm").empty();
        $("#TituloForm").append("¿Cual de estas frases se adapta mejor a tu vision del significado de la vida?");
        $("#textoOp1").empty();
        $("#textoOp1").append("Accedé a la voluntad de un ser divino para que me conseda el paso al paraiso");
        $("#textoOp2").empty();
        $("#textoOp2").append("Escapa del ciclo del renacimiento para convertirme en algo divino");
        $("#textoOp3").empty();
        $("#textoOp3").append("Vivir segun las energias que tenga a mi alcance");
        $("#textoOp4").empty();
        $("#textoOp4").append("Solo existe esta vida, hay que aprovecharla al maximo");
      }
      else if (opcion==3){
        $("#TituloForm").empty();
        $("#TituloForm").append("¿Que pasa despues de la muerte?");
        $("#textoOp1").empty();
        $("#textoOp1").append("Iras al cielo o al infierno");
        $("#textoOp2").empty();
        $("#textoOp2").append("Renaceras o iras al cielo");
        $("#textoOp3").empty();
        $("#textoOp3").append("Pasamos al plano astral");
        $("#textoOp4").empty();
        $("#textoOp4").append("Nuestro espiritu toma su propio rumbo segun como vivimos la vida");
    }
      else if (opcion==4){
        $("#TituloForm").empty();
        $("#TituloForm").append("¿Que rituales religiosos te atraen?");
        $("#textoOp1").empty();
        $("#textoOp1").append("Oracion y adoracion");
        $("#textoOp2").empty();
        $("#textoOp2").append("Meditacion");
        $("#textoOp3").empty();
        $("#textoOp3").append("Canalizar y seguir lo que me ordenan las energias que me rodean");
        $("#textoOp4").empty();
        $("#textoOp4").append("Rituales");
    }
    else if (opcion==5){
        $("#TituloForm").empty();
        $("#TituloForm").append("¿Cuantos textos sagrados debe tener una religion?");
        $("#textoOp1").empty();
        $("#textoOp1").append("Solo uno");
        $("#textoOp2").empty();
        $("#textoOp2").append("Varios");
        $("#textoOp3").empty();
        $("#textoOp3").append("Todo el canon cientifico");
        $("#textoOp4").empty();
        $("#textoOp4").append("Ninguno");
    }
    else if (opcion==6){
        $("#TituloForm").empty();
        $("#TituloForm").append("¿Que tan estricta debe ser una religion?");
        $("#textoOp1").empty();
        $("#textoOp1").append("Estricta al punto donde uno pueda soportarla");
        $("#textoOp2").empty();
        $("#textoOp2").append("Muy estricta, deberia dar mi vida por mi creencia");
        $("#textoOp3").empty();
        $("#textoOp3").append("Nada estricta, todos deberian poder elegir por si mismos");
        $("#textoOp4").empty();
        $("#textoOp4").append("No deberia ser estricta, pero voy a sufrir concecuencias por ello");
    }
    else if (opcion==7){
        $("#TituloForm").empty();
        $("#TituloForm").append("¿Como empezo todo?");
        $("#textoOp1").empty();
        $("#textoOp1").append("Dios creo todo");
        $("#textoOp2").empty();
        $("#textoOp2").append("Los dioses crearon todo");
        $("#textoOp3").empty();
        $("#textoOp3").append("Hubo un Big Bang");
        $("#textoOp4").empty();
        $("#textoOp4").append("El mundo siempre existio");
    }
    else if (opcion==8){
        $("#TituloForm").empty();
        $("#TituloForm").append("¿Crees que existen encarnaciones humanas de un ser o seres divinos?");
        $("#textoOp1").empty();
        $("#textoOp1").append("Una encarnacion");
        $("#textoOp2").empty();
        $("#textoOp2").append("Varias encarnaciones");
        $("#textoOp3").empty();
        $("#textoOp3").append("No hay encarnaciones humanas");
        $("#textoOp4").empty();
        $("#textoOp4").append("No, no creo en seres divinos pero si en seres oscuros");
    }
    else if (opcion==9){
        $("#TituloForm").empty();
        $("#TituloForm").append("¿Por que hay maldad y sufrimiento en este mundo?");
        $("#textoOp1").empty();
        $("#textoOp1").append("Los humanos heredaron la pecaminosidad y nos apartamos del camino");
        $("#textoOp2").empty();
        $("#textoOp2").append("Por que somos seres con errores");
        $("#textoOp3").empty();
        $("#textoOp3").append("Por que tenemos energias malas");
        $("#textoOp4").empty();
        $("#textoOp4").append("Por que tenemos libre albedrio y muchas tentaciones");
    }
    else if (opcion==10){
        $("#TituloForm").empty();
        $("#TituloForm").append("¿Hay que hacer sacrificios por nuestros errores?");
        $("#textoOp1").empty();
        $("#textoOp1").append("No, dios puede perdonarnos cualquier cosa");
        $("#textoOp2").empty();
        $("#textoOp2").append("Si, Acciones para enmendar los errores");
        $("#textoOp3").empty();
        $("#textoOp3").append("Si, Limpiar nuestras energias");
        $("#textoOp4").empty();
        $("#textoOp4").append("No, lo hecho.. hecho esta y debo entender que tendre consecuencias");
    }

    if ($("#op1").is(':checked')) {
      cristianismo++
      ultimaseleccion=1
    }
    else if ($("#op2").is(':checked')) {
      hinduismo++
      ultimaseleccion=2
    }
    else if ($("#op3").is(':checked')) {
      astrologia++
      ultimaseleccion=3
    }
    else if ($("#op4").is(':checked')) {
      misticismo++
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

    $("#op1").prop("checked", false);
    $("#op2").prop("checked", false);
    $("#op3").prop("checked", false);
    $("#op4").prop("checked", false);

    $("#btn_siguiente").attr('disabled', true);
    $("#btn_finalizar").attr('disabled', true);
    })
    
    
    //funciones relacionadas al boton anterior 

    $("#btn_anterior").click(function(){
      opcion=opcion-1;
      if (opcion==1){
        $("#btn_anterior").hide();
      }
      if (opcion<10){
        $("#btn_siguiente").show();
        $("#btn_finalizar").hide();
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
          }
          else if (seleccion1==2) {
            hinduismo--
          }
          else if (seleccion1==3) {
            astrologia--
          }
          else if (seleccion1==4) {
            misticismo--
          }
    }
    else if (opcion==2) {
          if (seleccion2==1) {
            cristianismo--
          }
          else if (seleccion2==2) {
            hinduismo--
          }
          else if (seleccion2==3) {
            astrologia--
          }
          else if (seleccion2==4) {
            misticismo--
          }
    }
    else if (opcion==3) {
          if (seleccion3==1) {
            cristianismo--
          }
          else if (seleccion3==2) {
            hinduismo--
          }
          else if (seleccion3==3) {
            astrologia--
          }
          else if (seleccion3==4) {
            misticismo--
          }
    }
    else if (opcion==4) {
          if (seleccion4==1) {
            cristianismo--
          }
          else if (seleccion4==2) {
            hinduismo--
          }
          else if (seleccion4==3) {
            astrologia--
          }
          else if (seleccion4==4) {
            misticismo--
          }
    }
    else if (opcion==5) {
          if (seleccion5==1) {
            cristianismo--
          }
          else if (seleccion5==2) {
            hinduismo--
          }
          else if (seleccion5==3) {
            astrologia--
          }
          else if (seleccion5==4) {
            misticismo--
          }
    }
    else if (opcion==6) {
          if (seleccion6==1) {
            cristianismo--
          }
          else if (seleccion6==2) {
            hinduismo--
          }
          else if (seleccion6==3) {
            astrologia--
          }
          else if (seleccion6==4) {
            misticismo--
          }
    }
    else if (opcion==7) {
          if (seleccion7==1) {
            cristianismo--
          }
          else if (seleccion7==2) {
            hinduismo--
          }
          else if (seleccion7==3) {
            astrologia--
          }
          else if (seleccion7==4) {
            misticismo--
          }
    }
    else if (opcion==8) {
          if (seleccion8==1) {
            cristianismo--
          }
          else if (seleccion8==2) {
            hinduismo--
          }
          else if (seleccion8==3) {
            astrologia--
          }
          else if (seleccion8==4) {
            misticismo--
          }
    }
    else if (opcion==9) {
          if (seleccion9==1) {
            cristianismo--
          }
          else if (seleccion9==2) {
            hinduismo--
          }
          else if (seleccion9==3) {
            astrologia--
          }
          else if (seleccion9==4) {
            misticismo--
          }
    }
    else if (opcion==10) {
          if (seleccion10==1) {
            cristianismo--
          }
          else if (seleccion10==2) {
            hinduismo--
          }
          else if (seleccion10==3) {
            astrologia--
          }
          else if (seleccion10==4) {
            misticismo--
          }
    }

    $("#op1").prop("checked", false);
    $("#op2").prop("checked", false);
    $("#op3").prop("checked", false);
    $("#op4").prop("checked", false);

    $("#btn_siguiente").attr('disabled', true);
    $("#btn_finalizar").attr('disabled', true);
    })

    //Funciones relacionadas al boton finalizar encuesta

    $("#btn_finalizar").click(function(){
      if ($("#op1").is(':checked')) {
        cristianismo++
        alert ("cristiano:"+cristianismo+" hinduismo:"+hinduismo+" astrologia:"+astrologia+" misticismo: "+misticismo)
        ultimaseleccion=1
      }
      else if ($("#op2").is(':checked')) {
        hinduismo++
        alert ("cristiano:"+cristianismo+" hinduismo:"+hinduismo+" astrologia:"+astrologia+" misticismo: "+misticismo)
        ultimaseleccion=2
      }
      else if ($("#op3").is(':checked')) {
        astrologia++
        alert ("cristiano:"+cristianismo+" hinduismo:"+hinduismo+" astrologia:"+astrologia+" misticismo: "+misticismo)
        ultimaseleccion=3
      }
      else if ($("#op4").is(':checked')) {
        misticismo++
        alert ("cristiano:"+cristianismo+" hinduismo:"+hinduismo+" astrologia:"+astrologia+" misticismo: "+misticismo)
        ultimaseleccion=4
      }
      var religionresultado = {
        cristianismo : cristianismo,
        hinduismo : hinduismo,
        astrologia : astrologia,
        misticismo : misticismo
      }
      
      var maxKey = Object.keys(religionresultado).sort(function (a, b) {
        return religionresultado[a] < religionresultado[b];
      })[0];

      var result = {};
      result[maxKey] = religionresultado[maxKey];
      console.log(result);
      


    })

    //Funcion que activa el boton siguiente y finalizar solo si se selecciona un radio

    $("#op1").click(function(){
      $("#btn_siguiente").attr('disabled', false);
      $("#btn_finalizar").attr('disabled', false);
    })
    $("#op2").click(function(){
      $("#btn_siguiente").attr('disabled', false);
      $("#btn_finalizar").attr('disabled', false);
    })
    $("#op3").click(function(){
      $("#btn_siguiente").attr('disabled', false);
      $("#btn_finalizar").attr('disabled', false);
    })
    $("#op4").click(function(){
      $("#btn_siguiente").attr('disabled', false);
      $("#btn_finalizar").attr('disabled', false);
    })

