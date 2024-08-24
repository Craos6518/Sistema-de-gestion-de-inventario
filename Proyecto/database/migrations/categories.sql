-- Estructura de tabla para la tabla `categories`
--
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- Filtros para la tabla `inventorymovements`
--
ALTER TABLE `inventorymovements`
  ADD CONSTRAINT `inventorymovements_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `inventorymovements_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--