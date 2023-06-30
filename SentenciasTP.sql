/*-----Tabla libraries!!!!*/

INSERT INTO libraries(name, location, telefono, createdAt, updatedAt)
VALUES
    ('El señalador furioso', 'Calle Falsa 123', 08005556666, '2023-06-28 19:25:26.415 +00:00', '2023-06-28 19:25:26.415 +00:00'),
    ('Indice Veloz', 'Av Siempre Viva 526', 08001110800, '2023-06-28 19:27:59.474 +00:00', '2023-06-28 19:27:59.474 +00:00'),
    ('Prologo Imprudente', 'Batalla del Nacional B 3242', 080025252626, '2023-06-28 19:30:35.547 +00:00', '2023-06-28 19:30:35.547 +00:00');



/*-----Tabla books!!!!*/
INSERT INTO books
(isbn, titulo, autor, "year", libraryId, createdAt, updatedAt, deletedAt)
VALUES
  (9789878206356, 'El Principito', 'Antoine de Saint-Exupepery', '1943', 1, '2023-06-29 11:08:16.149 +00:00', '2023-06-29 11:08:16.149 +00:00', NULL),
  (9789877673364, 'Cuentos de la Selva', 'Horacio Quiroga', '1918', 1, '2023-06-29 11:08:16.149 +00:00', '2023-06-29 11:08:16.149 +00:00', NULL),
  (9789876749381, 'La Tortuga Gigante', 'Horacio Quiroga', '1918', 1, '2023-06-29 11:08:16.149 +00:00', '2023-06-29 11:08:16.149 +00:00', NULL),
  (9789500768085, 'Libro de Sueños', 'Jorge Borges', '1941', 2, '2023-06-29 11:08:16.149 +00:00', '2023-06-29 11:08:16.149 +00:00', NULL),
  (9789500767149, 'Libro de Seres imaginarios', 'Jorge Borges', '1943', 2, '2023-06-29 11:08:16.149 +00:00', '2023-06-29 11:08:16.149 +00:00', NULL),
  (9789878266862, 'El examen + divertido', 'Julio Cortazar', '1950', 2, '2023-06-29 11:08:16.149 +00:00', '2023-06-29 11:08:16.149 +00:00', NULL),
  (9789504945673, 'Radiocine', 'Alejandro Dolina', '1997', NULL, '2023-06-29 11:08:16.149 +00:00', '2023-06-29 11:08:16.149 +00:00', NULL),
  (9789875808546, 'Cronicas del Angel Gris', 'Alejandro Dolina', '1997', NULL, '2023-06-29 11:08:16.149 +00:00', '2023-06-29 11:08:16.149 +00:00', NULL),
  (9789875808553, 'Bar del Infierno', 'Alejandro Dolina', '2005', NULL, '2023-06-29 11:08:16.149 +00:00', '2023-06-29 11:08:16.149 +00:00', NULL);






