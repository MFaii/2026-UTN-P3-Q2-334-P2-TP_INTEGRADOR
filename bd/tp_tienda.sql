-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 05-11-2026 a las 01:39:52
-- Versión del servidor: 8.0.46-0ubuntu0.24.04.4
-- Versión de PHP: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp_tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `category` enum('tv','celulares','notebooks','monitores') COLLATE utf8mb4_general_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `category`, `price`, `active`) VALUES
(1, 'Smart TV LED 43\" Philips', 'https://images.fravega.com/f500/76d7d96f4008f59be310bf262455474f.jpg', 'tv', 499000.00, 1),
(2, 'Smart TV Noblex HD 32\"', 'https://images.fravega.com/f500/7d36e4db93dcd89e187808eb5ff84c41.jpg', 'tv', 279000.00, 1),
(3, 'Smart TV TCL 65\" QLED', 'https://images.fravega.com/f500/8b78222151e257edfe74d0e6fb114a51.jpg', 'tv', 1299000.00, 1),
(4, 'Smart TV Samsung QLED 4K UHD 65\"', 'https://images.fravega.com/f500/c3359ca9155c1352bd078116afe18491.jpg', 'tv', 1399000.00, 1),
(5, 'Smart TV Samsung 50\" LED 4K Crystal UHD', 'https://images.fravega.com/f500/7f5361a66917eb266870f62a3c414a6a.jpg', 'tv', 719000.00, 1),
(6, 'Motorola G67 4GB 256GB', 'https://images.fravega.com/f500/052ecf92c1a0fd1e935257a0eb4a9063.png', 'celulares', 499000.00, 1),
(7, 'Xiaomi Redmi Note 14 128GB', 'https://images.fravega.com/f500/b45298b1de55bcf757554bb5c6a0e77a.jpg', 'celulares', 419000.00, 1),
(8, 'Motorola G06 NFC 4GB 64GB', 'https://images.fravega.com/f500/572ba780d46aa20c7eb793ecfd29acaf.png', 'celulares', 219000.00, 1),
(9, 'Samsung A37 5G 8GB 256GB', 'https://images.fravega.com/f500/f3cd34c8570dde1b143ba2600b580dbb.jpg', 'celulares', 859000.00, 1),
(10, 'Xiaomi Redmi Note 17 5G 6GB 256GB', 'https://images.fravega.com/f500/7346685cff2ee158e5b5cfca78cfce48.jpg', 'celulares', 799000.00, 1),
(11, 'Monitor Gaming Gigabyte Edge FHD', 'https://images.fravega.com/f500/f29896f5948ffabb41be0e83a32a38f4.jpg', 'monitores', 319000.00, 1),
(12, 'Monitor Gamer Lenovo Legion 27QD', 'https://images.fravega.com/f500/dd84df712bb7b555e57b6509ecd8f883.png', 'monitores', 609000.00, 1),
(13, 'Monitor Samsung Gamer 27 FHD', 'https://images.fravega.com/f500/bee78c11d4938cebf56d27bb83ffce12.jpg', 'monitores', 249000.00, 1),
(14, 'Monitor Gamer Acer Nitro 27 FHD', 'https://images.fravega.com/f500/cc17d7bd0db695be7194489cfdcd8a20.jpg', 'monitores', 379000.00, 1),
(15, 'Monitor Noblex 25 Full HD IPS', 'https://images.fravega.com/f500/12e387146cde7fa57edee3ed0d931542.jpg', 'monitores', 165000.00, 1),
(16, 'Notebook Philco N4500 16GB 128GB', 'https://images.fravega.com/f500/c531fec829747504a82c47268923392a.jpg', 'notebooks', 974000.00, 1),
(17, 'Notebook Acer Aspire Lite 15 16GB,512GB', 'https://images.fravega.com/f500/c8df20baeeba1d885ccdb238fc393564.jpg', 'notebooks', 1799000.00, 1),
(18, 'Notebook HP 15.6 RYZEN 5 8GB 512GB', 'https://images.fravega.com/f500/cdaa0862225b50aa22cc270d6020d449.jpg', 'notebooks', 1149000.00, 1),
(19, 'Notebook Lenovo V15 16GB 1TB', 'https://images.fravega.com/f500/8bf0b3e0aa1a9e9d661b0afc53cde7c0.jpg', 'notebooks', 2801000.00, 1),
(20, 'Notebook HP 14 Intel core5 8GB 512GB', 'https://images.fravega.com/f500/0da36b6c5a00466826dce2dc459540e6.jpg', 'notebooks', 1449000.00, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
