-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20221125.2e001c186a
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2022 a las 18:03:21
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `santuario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caracteristicas`
--

CREATE TABLE `caracteristicas` (
  `id_religion` int(11) NOT NULL,
  `caracteristica` varchar(150) COLLATE utf8_bin NOT NULL,
  `descripcion` varchar(1000) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consejos`
--

CREATE TABLE `consejos` (
  `id_consejo` int(11) NOT NULL,
  `id_religion` int(11) NOT NULL,
  `tema` varchar(100) COLLATE utf8_bin NOT NULL,
  `consejo` varchar(1000) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje diario`
--

CREATE TABLE `mensaje diario` (
  `id_religion` int(11) NOT NULL,
  `mensaje` varchar(1000) COLLATE utf8_bin NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peticiones`
--

CREATE TABLE `peticiones` (
  `id_peticion` int(11) NOT NULL,
  `id_religion` int(11) NOT NULL,
  `peticion1` varchar(600) COLLATE utf8_bin NOT NULL,
  `peticion2` varchar(600) COLLATE utf8_bin NOT NULL,
  `peticion3` varchar(600) COLLATE utf8_bin NOT NULL,
  `peticion4` varchar(600) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `peticiones`
--

INSERT INTO `peticiones` (`id_peticion`, `id_religion`, `peticion1`, `peticion2`, `peticion3`, `peticion4`) VALUES
(1, 1, 'El escuchara tus plegarias incluso si no lo sigues, pero es mas probable que les responda a aquellos que se acercan a El. Si nunca has leido la palabra de Dios o no has seguido a Jesus, seria bueno empezar a hacerlo antes de pedirle algo. Aprende a escuchar y a obedecer lo que Dios te pide.', 'Cuando reces, no pidas algo inmediatamente. Es mejor alabar a Dios y agradecerle por lo que ha hecho por ti. Alabalo por ser amoroso y poderoso. Agradecele por guiarte y bendecirte. Comenzar de esta manera le demuestra a Dios que es mas que solo alguien a quien le pides cosas.', 'Despues de crear una relacion con Dios, es importante asegurarte de estar en buenos terminos con El. Si estas viviendo en pecado o has cometido pecados recientemente, estas alejado de Dios. Debes confesarte y darle la espalda al pecado. Esto arreglara tu conexion con El.', 'Se honesto con Dios acerca de tus sentimientos. Dios sabe todo lo que piensas y sientes, asi que no tiene caso que lo ocultes. Mientras pides lo que deseas, se completamente honesto sobre tus pensamientos y sentimientos. La honestidad abrira los oidos de Dios a tus plegarias.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `religiones`
--

CREATE TABLE `religiones` (
  `id_religion` int(11) NOT NULL,
  `religion` varchar(50) COLLATE utf8_bin NOT NULL,
  `descripcion` varchar(1500) COLLATE utf8_bin NOT NULL,
  `mision` varchar(500) COLLATE utf8_bin NOT NULL,
  `plan` varchar(500) COLLATE utf8_bin NOT NULL,
  `vision` varchar(500) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `religiones`
--

INSERT INTO `religiones` (`id_religion`, `religion`, `descripcion`, `mision`, `plan`, `vision`) VALUES
(1, 'Cristianismo', 'El apóstol Pablo define el evangelio como \"poder de Dios para la salvación de todos los que creen\". (Romanos 1:16). Esto significa que el evangelio es algo que Dios hace para salvarnos, y también es algo de lo que somos responsables de creer. La palabra evangelio significa \"buenas noticias\" y se repite casi 100 veces en el Nuevo Testamento. De hecho, se podría decir que toda la Biblia se centra en esta buena noticia. El Antiguo Testamento nos prepara para ello y lo presagia. Los cuatro evangelios (Mateo, Marcos, Lucas y Juan) nos dicen las buenas noticias, y el resto de la Biblia está escrita para aquellos que han creído en ella.', 'Su mision es mostrar al mundo como sera el Reino de Dios y continuar con la mision de Jesus. La mision de la iglesia es mostrar a la gente el amor de Dios y decirles que es posible tener una relacion con El.', 'El plan de felicidad de Dios: Su obra y Su gloria es ?llevar a cabo la inmortalidad y la vida eterna del hombre? (Moises 1:39). La inmortalidad es vivir para siempre con un cuerpo fisico resucitado.', 'Ser una iglesia que honre a Dios, con cristianos comprometidos y unidos que amen a la comunidad, para alcanzar a todas las almas posibles a traves de la predicacion del Evangelio de Jesucristo (No solo de manera oral).');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(25) COLLATE utf8_bin NOT NULL,
  `tipo_usuario` varchar(5) COLLATE utf8_bin NOT NULL,
  `nombre_completo` varchar(150) COLLATE utf8_bin NOT NULL,
  `id_religion` int(11) NOT NULL,
  `email` varchar(150) COLLATE utf8_bin NOT NULL,
  `password` varchar(150) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `tipo_usuario`, `nombre_completo`, `id_religion`, `email`, `password`) VALUES
(1, 'admin', 'a', 'admin', 1, 'admin@mail.com', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peticiones`
--
ALTER TABLE `peticiones`
  ADD PRIMARY KEY (`id_peticion`);

--
-- Indices de la tabla `religiones`
--
ALTER TABLE `religiones`
  ADD PRIMARY KEY (`id_religion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peticiones`
--
ALTER TABLE `peticiones`
  MODIFY `id_peticion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `religiones`
--
ALTER TABLE `religiones`
  MODIFY `id_religion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
