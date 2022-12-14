-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2022 a las 17:57:33
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telcel`
--

CREATE TABLE `telcel` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Telefono` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Asunto` varchar(255) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `telcel`
--

INSERT INTO `telcel` (`ID`, `Nombre`, `Apellidos`, `Telefono`, `Email`, `Asunto`, `Activo`, `Creado`, `Modificado`) VALUES
(1, 'Karla', 'Valladares Etienne', 1010101010, 'karla@gmail.com', 'FORMULARIO', 'S', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'pepe', 'Navarrete', 20202020, 'pepito@gmail.com', 'Atencion al cliente', 'S', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Gabo', 'Montiel', 14141414, 'gabito@gmail.com', 'Recuperación', 'N', '2000-02-02 06:00:00', '2000-01-01 06:00:00'),
(4, 'Maria', 'Gonzales', 50505050, 'maria@gmail.com', 'Spam', 'N', '2000-05-05 05:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tickets`
--

CREATE TABLE `tickets` (
  `id_ticket` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fcreacion` date DEFAULT NULL,
  `prioridad` varchar(255) NOT NULL,
  `usuario_ticket` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tickets`
--

INSERT INTO `tickets` (`id_ticket`, `titulo`, `descripcion`, `fcreacion`, `prioridad`, `usuario_ticket`) VALUES
(1, 'quejas', 'mal servicio', '2022-12-07', 'baja', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `telcel`
--
ALTER TABLE `telcel`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id_ticket`),
  ADD KEY `usuario_ticket` (`usuario_ticket`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `telcel`
--
ALTER TABLE `telcel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id_ticket` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`usuario_ticket`) REFERENCES `telcel` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
