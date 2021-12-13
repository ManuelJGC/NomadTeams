-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2021 a las 16:43:42
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nomadteams`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comment`
--

INSERT INTO `comment` (`id`, `content`, `user_id`, `post_id`, `created_at`, `updated_at`) VALUES
(1, 'Cuenta conmigo Manuel!', 2, 2, '2021-12-13', '2021-12-13'),
(2, 'Yo también participar!', 4, 2, '2021-12-13', '2021-12-13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `follower`
--

CREATE TABLE `follower` (
  `id` int(11) NOT NULL,
  `user_id_main` int(11) DEFAULT NULL,
  `user_id_second` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `follower`
--

INSERT INTO `follower` (`id`, `user_id_main`, `user_id_second`, `created_at`, `updated_at`) VALUES
(9, 2, 1, NULL, NULL),
(11, 1, NULL, '2021-12-13', '2021-12-13'),
(13, 4, 2, '2021-12-13', '2021-12-13'),
(14, 4, 1, '2021-12-13', '2021-12-13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `tittle` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`id`, `tittle`, `description`, `content`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Idea de proyecto', 'Primera descripción', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 1, '2021-12-13', '2021-12-13'),
(2, 'Tesla requiere 50 ingenieros', 'Ingenieros de todas las ramas para un proyecto de altura 🚀', 'SpaceX se enfrentaba a una presión añadida para tener éxito con el vuelo del miércoles después de que la NASA anunciara que una versión de Starship se utilizará como módulo de aterrizaje lunar cuando la agencia espacial estadounidense vuelva a enviar a humanos a la Luna.', 1, '2021-12-13', '2021-12-13'),
(3, 'Amazonia necesita desarrolladores web', 'Amazonia, una nueva web de compraventa online necesita desarrolladores web', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 2, '2021-12-13', '2021-12-13'),
(4, 'Titulo provisional', 'Descripcion provisional', 'Contenido provisional.', 4, '2021-12-13', '2021-12-13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidos` varchar(200) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `nombre`, `apellidos`, `nickname`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Manuel Jesús', 'González Carmona', 'Manuel', 'manuel@admin.com', '1234', '2021-12-13', '2021-12-13'),
(2, 'Rocío', 'García Martínez', 'Rogama', 'rocio@usuario.com', '1234', '2021-12-13', '2021-12-13'),
(4, 'Sonia', 'Fernandez', 'Miguel', 'miguel@nomad.com', '1234', '2021-12-13', '2021-12-13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_COMMENT_USERS` (`user_id`),
  ADD KEY `FK_COMMENT_POST` (`post_id`);

--
-- Indices de la tabla `follower`
--
ALTER TABLE `follower`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_FOLLOWER_USERS_MAIN` (`user_id_main`),
  ADD KEY `FK_FOLLOWER_USERS_SECOND` (`user_id_second`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_POSTS_USERS` (`user_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `follower`
--
ALTER TABLE `follower`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `FK_COMMENT_POST` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `FK_COMMENT_USERS` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `follower`
--
ALTER TABLE `follower`
  ADD CONSTRAINT `FK_FOLLOWER_USERS_MAIN` FOREIGN KEY (`user_id_main`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_FOLLOWER_USERS_SECOND` FOREIGN KEY (`user_id_second`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK_POSTS_USERS` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
