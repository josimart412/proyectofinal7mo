<?php
session_start();
require'conexion.php';


if (!isset($_SESSION['usuario'])){

    header("location: index.html");

}
else
{
  $usuario = ($_SESSION['usuario']);
  $r = "select `id_usuario`, `nombre_completo`, `tipo_usuario`, `id_religion` from `usuarios` WHERE usuario='".$usuario."'";
  $q = mysqli_query($con, $r);
  $d = mysqli_fetch_array($q);
  
  $id_usuario= $d['id_usuario'];
  $nombre_completo = $d['nombre_completo'];
  $tipo_usuario = $d['tipo_usuario'];
  $id_religion = $d['id_religion'];
  
  $r2 = "select * from `religiones` WHERE id_religion='".$id_religion."'";
  $q2 = mysqli_query($con, $r2);
  $d2 = mysqli_fetch_array($q2);
  $religion = $d2['religion'];
  $descripcion = $d2['descripcion'];
  $mision = $d2['mision'];
  $plan = $d2['plan'];
  $vision = $d2['vision'];
  $video = $d2['video'];

  $r3 = "select `peticion1`, `peticion2`, `peticion3`, `peticion4` from `peticiones` WHERE id_religion='".$id_religion."'";
  $q3 = mysqli_query($con, $r3);
  $d3 = mysqli_fetch_array($q3);
  $peticion1 = $d3['peticion1'];
  $peticion2 = $d3['peticion2'];
  $peticion3 = $d3['peticion3'];
  $peticion4 = $d3['peticion4'];
  $dia = date("Y/m/d");

  $r4 = "select * from `mensaje_diario` WHERE id_religion=$id_religion  AND fecha=CURRENT_DATE";
  $q4 = mysqli_query($con, $r4);
  $d4 = mysqli_fetch_array($q4);
  $mensajes = $d4['mensajes'];


  echo "
  
  <script src='https://code.jquery.com/jquery-3.6.0.min.js' integrity='sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=' crossorigin='anonymous'></script>

  <script>

  var id_usuario = '".$id_usuario."';

  var tipo_usuario = '".$tipo_usuario."';

  var id_religion = '".$id_religion."';

  var nombre_completo = '".$nombre_completo."';

  var religion = '".$religion."';

  var descripcion = '".$descripcion."';

  var peticion1 = '".$peticion1."';

  var peticion2 = '".$peticion2."';

  var peticion3 = '".$peticion3."';

  var peticion4 = '".$peticion4."';

  var mision = '".$mision."';

  var plan = '".$plan."';

  var vision = '".$vision."';

  var video = '".$video."';
  

  function cambiarnombre(){
    $('#titulo').html('".$religion."');
    $('#descripcion').html('".$descripcion."');
    $('#peticion1').html('".$peticion1."');
    $('#peticion2').html('".$peticion2."');
    $('#peticion3').html('".$peticion3."');
    $('#peticion4').html('".$peticion4."');
    $('#mision').html('".$mision."');
    $('#plan').html('".$plan."');
    $('#vision').html('".$vision."');
    $('#mensajes').html('".$mensajes."');
    $('#video').prop('href','$video');

  }

  $(document).ready(function() {
        cambiarnombre();
    });


  </script>";
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Dios</title>
  <meta content="" name="description">
  <meta content="" name="keywords">


  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">El buen plan</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Inicio</a></li>
          <li><a class="nav-link scrollto" href="#about">Informacion</a></li>
          <li><a class="nav-link scrollto" href="#services">Peticiones</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Ofrendas</a></li>
          <li><a class="nav-link scrollto" href="#team">Buscar ayuda</a></li>
          <?php
            print "<li class='nav-item'><img src='img/usuario.png' style='height: 20px; width: 20px;'>$_SESSION[usuario]</li>"
          ?>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero">
    <div class="hero-container" data-aos="fade-up" data-aos-delay="150">
      <h1 id="titulo">Titulo</h1>
      <h2 id="descripcion">Descripcion</h2>
      <div class="d-flex">
     
      </div>
    </div>
  </section>
  <!-- End Hero -->



  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row">

          <div class="col-6 video-box align-self-baseline" data-aos="zoom-in" data-aos-delay="100">
            <img src="assets/img/about.jpg" class="img-fluid" alt="">
            <a id="video" href="youtube.com" class="glightbox play-btn mb-4"></a>
          </div>
          <div class="col-lg-6 pt-3 pt-lg-0 content">
            <h3>Mensaje diario:</h3>
            <p class="fst-italic" id="mensajes">
              .
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->



        <!-- ======= ADMIN Section ======= -->
        <section id="admin-panel" class="about-boxes">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="card">
              <img src="assets/img/religiones.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title"><a href="">Gestionar religiones</a></h5>
                <button style="width:100% " id="btn_gestion_religiones" type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal_gestion_religiones">
                  Gestionar
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="card">
              <img src="assets/img/libro.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title"><a>Cargar mensaje diario</a></h5>
                <button style="width:100% " type="button" class="btn btn-danger" data-toggle="modal" id="btn_modal_mensaje" data-target="#modal_mensaje">
                  Cargar
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="card">
              <img src="assets/img/usuarios.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title"><a href="">Gestionar usuarios</a></h5>
                <button style="width:100% " id="btn_gestion_usuarios" type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal_gestion_usuarios">
                  Gestionar
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- end ADMIN Section -->










    <!-- ======= About Boxes Section ======= -->
    <section id="about-boxes" class="about-boxes">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="card">
              <img src="assets/img/manos.png" class="card-img-top">
              <div class="card-icon">
                <i class="ri-brush-4-line"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">Mision</a></h5>
                <p class="card-text" id="mision"></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="card">
              <img src="assets/img/manos2.webp" class="card-img-top">
              <div class="card-icon">
                <i class="ri-calendar-check-line"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">Plan</a></h5>
                <p class="card-text" id="plan"></p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="card">
              <img src="assets/img/manos3.jpg" class="card-img-top">
              <div class="card-icon">
                <i class="ri-movie-2-line"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">Vision</a></h5>
                <p class="card-text" id="vision"></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End About Boxes Section -->



    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Peticiones</h2>
          <p>Encuentra la manera correcta de pedir lo que deseas</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="200">
          <div class="col-md-6">
            <div class="icon-box">
              <i class="bi bi bi-1-circle"></i>
              <h4><a href="#"></a></h4>
              <p id="peticion1"></p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi bi-2-circle"></i>
              <h4><a href="#"></a></h4>
              <p id="peticion2"></p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi bi bi-3-circle"></i>
              <h4><a href="#"></a></h4>
              <p id="peticion3"></p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi bi-4-circle"></i>
              <h4><a href="#"></a></h4>
              <p id="peticion4"></p>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Services Section -->


    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Ofrendas</h2>
          <p>Elije a que ofrecer tu ayuda economica</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">Todos</li>
              <li data-filter=".filter-app">Caridad</li>
              <li data-filter=".filter-card">Religion</li>
              <li data-filter=".filter-web">Institucional</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/pobres.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Caridad</h4>
              <p>Donar a los mas necesitados</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/medicina2.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Institucional</h4>
              <p>Donar dinero a oganizaciones beneficas</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/fe.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Religion</h4>
              <p>Donar dinero para la causa</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Section -->

    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Ayuda</h2>
          <p>Encuentra ayuda en el ambito que necesites</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="fade-up" data-aos-delay="100">
              <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Psicologo</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Asesora financiera</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="pic"><img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>Consejero</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Team Section -->



  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Dewi</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>

  <!-- MODAL RELIGIONES -->


  <div class="modal fade" id="modal_gestion_religiones" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-scrollable">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Gestor de religiones</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body" style="overflow-x: auto ;">
                <div class="col">   
                    <table class="table">
                        <thead>
                            <tr>
                                <th class='tablaReligiones'>ID Religion</th>
                                <th class='tablaReligiones'>Religion</th>
                                <th class='tablaReligiones'>Descripcion</th>
                                <th class='tablaReligiones'>Mision</th>
                                <th class='tablaReligiones'>Plan</th>
                                <th class='tablaReligiones'>Vision</th>
                                <th class='tablaReligiones'>Video</th>
                                <th class='tablaReligiones'>Editar</th>
                                <th class='tablaReligiones'>Borrar</th>
                            </tr>
                        </thead>
                        <tbody  id="tablaReligiones">
                           
                        </tbody>
                    </table>    
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" id="cerrar_modal_religiones">Cerrar</button>
            </div>
          </div>
        </div>
    </div>






   <!-- MODAL USUARIOS -->


   <div class="modal fade" id="modal_gestion_usuarios" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-scrollable">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Usuarios</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="col-2">
                <select class="form-control altura" id="letraUsuarios" value="t" placeholder="ordenar por">
                    <option class="form-control altura" value="t">Seleccione</option>
                    <option class="form-control altura" value="t">Todos</option>
                    <option class="form-control altura" value="a">Administradores</option>
                    <option class="form-control altura" value="u">Usuarios</option>
                </select>
            </div>
            <div class="modal-body" style="overflow-x: auto ;">
                <div class="col">   
                    <table class="table">
                        <thead>
                            <tr>
                                <th class='tablaUsuarios'>ID usuario</th>
                                <th class='tablaUsuarios'>Usuario</th>
                                <th class='tablaUsuarios'>Tipo</th>
                                <th class='tablaUsuarios'>Nombre</th>
                                <th class='tablaUsuarios'>Religion</th>
                                <th class='tablaUsuarios'>Email</th>
                                <th class='tablaUsuarios'>Editar</th>
                                <th class='tablaUsuarios'>Borrar</th>
                            </tr>
                        </thead>
                        <tbody  id="tablaUsuarios">
                           
                        </tbody>
                    </table>    
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
    </div>









       <!-- MODAL MENSAJE DIARIO -->


   <div class="modal fade" id="modal_mensaje" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-scrollable">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cargar mensaje diario</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body" style="overflow-x: auto ;">
                <div class="col">   
                      <!--Formulario mensaje diario-->
    <div class="container">
        <div class="row">
                  <form class="row g-3" method="POST" action="validacionPOST.php" id="formMensaje">
                      <div class="col-12 position-relative">
                      <label for="validationTooltip01" class="form-label"><img src="img/sliders.svg" style="height: 20px; width: 20px;">  religion</label>
                      <select class="form-select" aria-label="Default select example" id="id_mensaje_diario_form" name="id_mensaje_diario_form">
                        <option selected>Seleccionar una religion</option>
                        <option value="1">Cristianismo</option>
                        <option value="2">Hinduismo</option>
                        <option value="3">Astrologia</option>
                        <option value="4">Misticismo</option>
                      </select>
                      </div>
                      <div class="col-12 position-relative">
                          <label for="validationTooltip01" class="form-label"><img src="img/align-justify.svg" style="height: 20px; width: 20px;">  Mensaje</label>
                          <input type="text" class="form-control" value="" id="mensaje_diario_form" name="mensaje_diario_form">
                      </div>
                  </form> 
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-secondary" id="addDataMensaje" data-dismiss="modal">Enviar</button>
            </div>
          </div>
        </div>
    </div>







    <script src="js/funcionesintranet.js"></script>




    <style>
.xd
{
    text-align: center;
}

.iconsize
{
    height: 30px;
    width: 30px;
}

.altura
{
    height: 40px;
}


</style>