-- Estructura de tabla para la tabla `inventorymovements`
--

CREATE TABLE `inventorymovements` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `movement_type` enum('entry','exit','adjustment') NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
-- Indices de la tabla `inventorymovements`
--
ALTER TABLE `inventorymovements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

  -- AUTO_INCREMENT de la tabla `inventorymovements`
--
ALTER TABLE `inventorymovements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;