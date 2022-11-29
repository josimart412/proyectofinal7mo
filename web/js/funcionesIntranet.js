    $("#cerrar_sesion").click(function(){
        window.location.href = "cerrar_s.php";
    });
      
      
      
      //Funcion para cargar tabla de administrador

      function cargarTablaUsuarios()
    {   
        $("#tablaUsuarios").empty()
        var letra = $("#letraUsuarios").val()
        if (letra != ""){
            $.ajax({
            url: "BackendUsuarios.php", //action
            type: "POST", //method
            data: {"letraUsuarios": letra },
            //dataType: "json",
            success: function(respuesta){
                
                var box = JSON.parse(respuesta)
                console.log("tablaUsuarios:",box)

                $.each(box, function(key, value){
                    //console.log("Respuesta: " + respuesta)
                    console.log("Key: " , key)
                    console.log("Value: " , value)

                    $("#tablaUsuarios").append("<tr id='fila"+key+"'  >"+
                    "<td class='tablaUsuarios'>"+value.id_usuario+"</td>"+
                    "<td class='tablaUsuarios'>"+value.usuario+"</td>"+
                    "<td class='tablaUsuarios'>"+"<select disabled class='form-control altura' id='tipo_usuario"+key+"'><option class='form-control altura' value='0'>Seleccione</option><option class='form-control altura' value='a'>Administrador</option><option class='form-control altura' value='u'>Usuario</option></select></td>"+
                    "<td class='tablaUsuarios'>"+value.nombre_completo+"</td>"+ 
                    "<td class='tablaUsuarios'>"+"<select disabled class='form-control altura' id='religion_form"+key+"'><option class='form-control altura' value='0'>Seleccione</option><option class='form-control altura' value='1'>Cristianismo</option><option class='form-control altura' value='2'>Hinduismo</option><option class='form-control altura' value='3'>Astrologia</option><option class='form-control altura' value='4'>Misticismo</option></select></td>"+
                    "<td class='tablaUsuarios'>"+value.email+"</td>"+
                    "<td class='xd'>"+"<button class='btn btn-sm btn-info text-center'  id='edit"+key+"' data-toggle='modal' data-target='#modal_EB'>"+"<img class='iconsize xd' src='img/editar.png'>"+"</button>"+"</td>"+
                    "<td class='xd'>"+"<button class='btn btn-sm btn-danger text-center'  id='delete"+key+"' data-toggle='modal' data-target='#modal_EB'>"+"<img class='iconsize xd' src='img/tacho.png'>"+"</td>"+
                    "</tr>")
                    
                    $("#tipo_usuario"+key+"").val(value.tipo_usuario)
                    $("#religion_form"+key+"").val(value.id_religion)
                    key = key + 1
                    
                })
                
            }
            
        })
        }
        
    }




          //Funcion para cargar tabla de administrador

          function cargarTablaReligiones()
          {   
              $("#tablaReligiones").empty()
                  $.ajax({
                  url: "BackendReligiones.php", //action
                  type: "POST", //method
                  data: {"letraUsuarios": "a" },
                  //dataType: "json",
                  success: function(respuesta){
                      
                      var box = JSON.parse(respuesta)
                      console.log("tablaUsuarios:",box)
      
                      $.each(box, function(key, value){
                          //console.log("Respuesta: " + respuesta)
                          console.log("Key: " , key)
                          console.log("Value: " , value)
      
                          $("#tablaReligiones").append("<tr id='fila"+key+"'  >"+
                          "<td class='tablaReligiones'>"+value.id_religion+"</td>"+
                          "<td class='tablaReligiones'>"+value.religion+"</td>"+
                          "<td class='tablaReligiones'>"+value.descripcion+"</td>"+
                          "<td class='tablaReligiones'>"+value.mision+"</td>"+
                          "<td class='tablaReligiones'>"+value.plan+"</td>"+
                          "<td class='tablaReligiones'>"+value.vision+"</td>"+
                          "<td class='tablaReligiones'>"+value.video+"</td>"+
                          "<td class='xd'>"+"<button class='btn btn-sm btn-info text-center'  id='edit"+key+"' data-toggle='modal' data-target='#modal_EB'>"+"<img class='iconsize xd' src='img/editar.png'>"+"</button>"+"</td>"+
                          "<td class='xd'>"+"<button class='btn btn-sm btn-danger text-center'  id='delete"+key+"' data-toggle='modal' data-target='#modal_EB'>"+"<img class='iconsize xd' src='img/tacho.png'>"+"</td>"+
                          "</tr>")
                          
                          $("#tipo_usuario"+key+"").val(value.tipo_usuario)
                          $("#religion_form"+key+"").val(value.id_religion)
                          key = key + 1
                          
                      })
                      
                  }
                  
              })
              
              
          }


    

    $("#letraUsuarios").change(function(){
      cargarTablaUsuarios();
  });

  $("#btn_gestion_usuarios").click(function(){
    cargarTablaUsuarios();

  });


  $("#btn_modal_mensaje").click(function(){
    
    $('#mensaje_diario_form').val('');	

  });


  $("#btn_gestion_religiones").click(function(){
    cargarTablaReligiones();

  });
  


  //cargar mensaje diario de cada religion

  $("#addDataMensaje").click(function(){

    var datos = $('#formMensaje').serializeArray();
    //console.log("datos:",datos)
        $.ajax({
            type:"POST",
            url:"BackendMensaje_Add.php",
            data: datos,
            success:function(r){
                if(r == 1)
                {
                    alert("agregado con exito");
                    $("#ordenarNomb").val(nombreCompleto.value)
                    cargarTabla();
                    $("#myModal").modal('hide')
                }else
                {
                    alert("Verifique que los campos sean correctos");
                }
            }
        })
    })