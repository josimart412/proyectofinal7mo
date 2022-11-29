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
                    "<td class='xd'>"+"<button class='btn btn-sm btn-info text-center'  id='edit"+key+"' data-dismiss='modal' data-toggle='modal' data-target='#modal_EB'>"+"<img class='iconsize xd' src='img/editar.png'>"+"</button>"+"</td>"+
                    "<td class='xd'>"+"<button class='btn btn-sm btn-danger text-center'  id='delete"+key+"' data-dismiss='modal' data-toggle='modal' data-target='#modal_EB'>"+"<img class='iconsize xd' src='img/tacho.png'>"+"</td>"+
                    "</tr>")

                    $("#edit"+key).on("click", function(){
                        console.log(value)
                        cargarFormEdit(value)
                    })

                    $("#delete"+key).on("click", function(){
                        console.log(value)
                        cargarFormDelete(value)
                    })
                    
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
                          "<td class='xd'>"+"<button class='btn btn-sm btn-info text-center'  id='edit2"+key+"' data-dismiss='modal' data-toggle='modal' data-target='#modal_E'>"+"<img class='iconsize xd' src='img/editar.png'>"+"</button>"+"</td>"+
                          "</tr>")
                          
                          $("#edit2"+key).on("click", function(){
                            console.log(value)
                            cargarFormEdit2(value)
                        })

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






    function cargarFormDelete(value)
    {
        $("#deleteData").show()
        $("#editData").hide()
                    

        console.log("value: ", value)

        $("#id_usuario_av").val(value.id_usuario)
        $("#id_usuario_av").attr('placeholder', value.id_usuario) 
        $("#id_usuario_av").attr('readonly', true)
        
        $("#usuario_av").val(value.usuario)
        $("#usuario_av").attr('placeholder', value.usuario)
        $("#usuario_av").attr('readonly', true)
        
        $("#nombre_completo_av").val(value.nombre_completo)
        $("#nombre_completo_av").attr('placeholder', value.nombre_completo) 
        $("#nombre_completo_av").attr('readonly', true)
        
        $("#email_av").val(value.email)
        $("#email_av").attr('placeholder', value.email) 
        $("#email_av").attr('readonly', true)
        
        $("#religion_av").val(value.id_religion)
        $("#religion_av").attr('placeholder', value.id_religion) 
        $("#religion_av").attr('disabled', true)

        $("#tipo_usuario_av").val(value.tipo_usuario)
        $("#tipo_usuario_av").attr('placeholder', value.tipo_usuario) 
        $("#tipo_usuario_av").attr('disabled', true)


    }





    function cargarFormEdit(value)
    {
        
        //$("#ordenarNomb").val('')
        $("#editData").show()
        $("#deleteData").hide()

        console.log("xd",value)
        
        $("#id_usuario_av").val(value.id_usuario)
        $("#id_usuario_av").attr('placeholder', value.id_usuario) 
        $("#id_usuario_av").attr('readonly', true)
        
        $("#usuario_av").val(value.usuario)
        $("#usuario_av").attr('placeholder', value.usuario) 
        $("#usuario_av").attr('readonly', false)
        
        $("#nombre_completo_av").val(value.nombre_completo)
        $("#nombre_completo_av").attr('placeholder', value.nombre_completo) 
        $("#nombre_completo_av").attr('readonly', false)
        
        $("#email_av").val(value.email)
        $("#email_av").attr('placeholder', value.email) 
        $("#email_av").attr('readonly', false)
        
        $("#religion_av").val(value.religion)
        $("#religion_av").attr('placeholder', value.religion) 
        $("#religion_av").attr('readonly', false)

        $("#tipo_usuario_av").val(value.tipo_usuario)
        $("#tipo_usuario_av").attr('placeholder', value.tipo_usuario) 
        $("#tipo_usuario_av").attr('readonly', false)

    }

    function cargarFormEdit2(value)
    {
        
        //$("#ordenarNomb").val('')
        $("#editData2").show()

        console.log("xd",value)
        
        $("#id_religion_e").val(value.id_religion)
        $("#id_religion_e").attr('placeholder', value.id_religion) 
        $("#id_religion_e").attr('readonly', true)
        
        $("#religion_e").val(value.religion)
        $("#religion_e").attr('placeholder', value.religion) 
        $("#religion_e").attr('disabled', true)
        
        $("#video_e").val(value.video)
        $("#video_e").attr('placeholder', value.video) 
        $("#video_e").attr('readonly', false)
        
        $("#descripcion_e").val(value.descripcion)
        $("#descripcion_e").attr('placeholder', value.descripcion) 
        $("#descripcion_e").attr('readonly', false)
        
        $("#mision_e").val(value.mision)
        $("#mision_e").attr('placeholder', value.mision) 
        $("#mision_e").attr('readonly', false)

        $("#plan_e").val(value.plan)
        $("#plan_e").attr('placeholder', value.plan) 
        $("#plan_e").attr('readonly', false)

        $("#vision_e").val(value.vision)
        $("#vision_e").attr('placeholder', value.vision) 
        $("#vision_e").attr('readonly', false)

        

    }



    
    function confirmEdit()
    {
    var editarDatos = $("#formAV").serializeArray();
        //console.log("editarDatos: ", editarDatos)
        $.ajax({
        url: "BackendUsuarios_Edit.php",
        type: "POST",
        data: editarDatos,
        success: function(r)
        {
            if (r == 1) 
                {

                alert("datos modificados con exito")
                $("#ordenarNomb").val(nombreCompletoAV.value)
                cargarTabla()
                $("#modalAV").modal('hide')

                }
                else{ alert("error en la actualizacion de datos")}
            }
        })

    }



    function confirmEdit2()
    {
    var editarDatos = $("#formEV").serializeArray();
        //console.log("editarDatos: ", editarDatos)
        $.ajax({
        url: "BackendReligiones_Edit.php",
        type: "POST",
        data: editarDatos,
        success: function(r)
        {
            if (r == 1) 
                {
                alert("datos modificados con exito")
                $("#ordenarNomb").val(nombreCompletoAV.value)
                cargarTabla()
                $("#modalAV").modal('hide')

                }
                else{ alert("error en la actualizacion de datos")}
            }
        })

    }



    function confirmDelete()
    {
        var eliminarDatos = $("#formAV").serializeArray();
        //console.log("editarDatos: ", eliminarDatos)
        $.ajax({
        url: "BackendUsuarios_Delete.php",
        type: "POST",
        data: eliminarDatos,
        success: function(r){
            if (r == 1) 
                {
                
                alert("datos Eliminados")
                cargarTabla()
                $("#modalAV").modal('hide')
                
                }
            }
        })
    }


    $("#editData").on("click", function(){confirmEdit()});
    $("#editData2").on("click", function(){confirmEdit2()});
    $("#deleteData").on("click", function(){confirmDelete()});
