#Mi Proyecto
Este proyecto es una aplicación web desarrollada en Node.js que utiliza el framework Express para manejar las solicitudes del cliente. La aplicación cuenta con tres rutas principales:` /user, /book y /library`, las cuales son manejadas por los routers userRouter, bookRouter y libraryRouter, respectivamente.

##Instrucciones de instalación
Para comenzar a utilizar el proyecto, sigue estos pasos:

Clona el repositorio en tu máquina local.
Ejecuta `npm install` para instalar las dependencias del proyecto.
Ejecuta `npm start` para iniciar el servidor en el puerto especificado en el código.
Base de datos
Este proyecto utiliza una base de datos SQLite para almacenar y recuperar información. La conexión con la base de datos se establece utilizando el módulo Sequelize y los datos se almacenan en el archivo ./TPdatabase.sqlite.

La función initializeDB se encarga de sincronizar los modelos con la base de datos y autenticar la conexión. Si todo funciona correctamente, se muestra un mensaje indicando que la conexión a la base de datos se ha establecido correctamente.

##Autenticación
La autenticación en este proyecto se realiza mediante tokens JWT (JSON Web Tokens). Se utiliza el módulo Passport en conjunto con el módulo Passport JWT para implementar la autenticación mediante tokens.

Se define una estrategia de autenticación JWT que extrae el token del encabezado de autorización como un token Bearer y lo verifica utilizando una clave secreta. También se definen dos middlewares para validar la autenticación de los usuarios:

jwtValidMDW: Utiliza la estrategia de autenticación JWT para validar el token del usuario.
validateAuthMDW: Verifica si el usuario autenticado es un administrador y, en caso contrario, devuelve un mensaje de error indicando que no está autorizado.


##Rutas
###Ruta /user
El userRouter define varias rutas para manejar las operaciones CRUD (crear, leer, actualizar y eliminar) de los usuarios. También define una ruta /login para permitir a los usuarios iniciar sesión y recibir un token JWT.

POST `/user:` Crea un nuevo usuario. Requiere autenticación.
GET `/user:` Obtiene una lista de todos los usuarios.
GET `/user/:id:` Obtiene información sobre un usuario específico por su ID.
PUT `/user/update/:id:` Actualiza la información de un usuario específico por su ID. Requiere autenticación.
DELETE `/user/delete/:id: `Elimina un usuario específico por su ID. Requiere autenticación.
POST `/user/login:` Permite a un usuario iniciar sesión y recibir un token JWT.

###Ruta /library
El libraryRouter define varias rutas para manejar las operaciones CRUD de las librerias, así como una ruta para crear un libro a partir de una biblioteca.

POST` /library:` Crea una nueva biblioteca. Requiere autenticación.
POST `/library/:id/book`: Crea un nuevo libro a partir de una biblioteca específica por su ID. Requiere autenticación.
GET `/library:` Obtiene una lista de todas las librerias que cumplen con ciertos criterios.
PUT /`library/update/:id: `Actualiza la información de una biblioteca específica por su ID. Requiere autenticación.
DELETE `/library/delete/:id:` Elimina una biblioteca específica por su ID. Requiere autenticación.

###Ruta /book
El bookRouter define varias rutas para manejar las operaciones CRUD de los libros.

POST `/book:` Crea un nuevo libro. Requiere autenticación.
GET `/book:` Obtiene una lista de todos los libros que cumplen con ciertos criterios.
PUT `/book/update/:id:` Actualiza la información de un libro específico por su ID. Requiere autenticación.
DELETE` /book/delete/:id:` Elimina un libro específico por su ID. Requiere autenticación.


##Controladores
La aplicación cuenta con tres controladores principales: bookController, libraryController y userController, los cuales contienen la lógica para manejar las solicitudes a las rutas `/book`, `/library` y `/user,` respectivamente.

###Controlador bookController
**createBook:** Crea un nuevo libro utilizando el servicio bookService.
**getBooksByCriteria**: Obtiene una lista de todos los libros que cumplen con ciertos criterios utilizando el servicio bookService.
**updateBookById:** Actualiza la información de un libro específico por su ID utilizando el servicio bookService.
**deleteBookById:** Elimina un libro específico por su ID utilizando el servicio bookService.

###Controlador libraryController

**createLibrary**: Crea una nueva biblioteca utilizando el servicio libraryService.
**getLibrariesByCriteria**: Obtiene una lista de todas las librerias que cumplen con ciertos criterios utilizando el servicio libraryService.
**updateLibraryById**: Actualiza la información de una biblioteca específica por su ID utilizando el servicio libraryService.
**deleteLibraryById:** Elimina una biblioteca específica por su ID utilizando el servicio libraryService.
**createBookFromLibrary**: Crea un nuevo libro a partir de una biblioteca específica por su ID utilizando el servicio libraryService.

###Controlador userController
**createUser**: Crea un nuevo usuario utilizando el servicio userService.
**getUsers:** Obtiene una lista de todos los usuarios utilizando el servicio userService.
**getUserById:** Obtiene información sobre un usuario específico por su ID utilizando el servicio userService.
**updateUserById: **Actualiza la información de un usuario específico por su ID utilizando el servicio userService.
**deleteUserById:** Elimina un usuario específico por su ID utilizando el servicio userService.


##Servicios
La aplicación cuenta con tres servicios principales: `bookService`, `libraryService` y `userService`, los cuales contienen la lógica para interactuar con la base de datos y realizar operaciones CRUD en los libros, librerias y usuarios, respectivamente.

###Servicio bookService
*createBook:* Crea un nuevo libro utilizando el proveedor bookProvider.
*getBooksByCriteria:* Obtiene una lista de todos los libros que cumplen con ciertos criterios utilizando el proveedor bookProvider.
*updateBookById*: Actualiza la información de un libro específico por su ID utilizando el proveedor bookProvider.
*deleteBookById*: Elimina un libro específico por su ID utilizando el proveedor bookProvider.

###Servicio libraryService
*createLibrary*: Crea una nueva biblioteca utilizando el proveedor libraryProvider.
*getLibrariesByCriteria*: Obtiene una lista de todas las librerias que cumplen con ciertos criterios utilizando el proveedor libraryProvider.
*updateLibraryById*: Actualiza la información de una biblioteca específica por su ID utilizando el proveedor libraryProvider.
*deleteLibraryById*: Elimina una biblioteca específica por su ID utilizando el proveedor libraryProvider.
*createBookFromLibrary*: Crea un nuevo libro a partir de una biblioteca específica por su ID utilizando el proveedor libraryProvider.

###Servicio userService
El servicio de usuarios permite crear, buscar, actualizar y eliminar usuarios en la base de datos. También permite validar el inicio de sesión de un usuario. Los métodos disponibles son:

*populateTableUser*: Puebla la tabla de usuarios con datos iniciales.
*createUser:* Crea un nuevo usuario en la base de datos.
*getAllUser: *Obtiene todos los usuarios de la base de datos.
*getUsersById:* Obtiene el usuario con el ID especificado de la base de datos.
*updateUserById*: Actualiza el usuario con el ID especificado en la base de datos.
*deleteUserById:* Elimina el usuario con el ID especificado de la base de datos.
*loginValidate: *Valida el inicio de sesión del usuario con las opciones especificadas.


##Proveedores
Este proyecto incluye varios proveedores para interactuar con la base de datos y manejar libros, librerias y usuarios.

###Proveedor de libros
El proveedor de libros permite crear, buscar, actualizar y eliminar libros en la base de datos. Los métodos disponibles son:

createBook: Crea un nuevo libro en la base de datos.
getBooksByCriteria: Busca libros en la base de datos según los criterios especificados.
updateBookById: Actualiza el libro con el ID especificado en la base de datos.
deleteBookById: Elimina el libro con el ID especificado de la base de datos.

###Proveedor de librerias
El proveedor de librerias permite crear, buscar, actualizar y eliminar librerias en la base de datos. Los métodos disponibles son:

createLibrary: Crea una nueva biblioteca en la base de datos.
getLibrariesByCriteria: Busca librerias en la base de datos según los criterios especificados.
getLibraryById: Obtiene la biblioteca con el ID especificado de la base de datos.
updateLibraryById: Actualiza la biblioteca con el ID especificado en la base de datos.
deleteLibraryById: Elimina la biblioteca con el ID especificado de la base de datos.

###Proveedor de usuarios
El proveedor de usuarios permite crear, buscar, actualizar y eliminar usuarios en la base de datos. También permite validar el inicio de sesión de un usuario. Los métodos disponibles son:

populateTableUser: Puebla la tabla de usuarios con datos iniciales.
createUser: Crea un nuevo usuario en la base de datos.
getAllUser: Obtiene todos los usuarios de la base de datos.
getUsersById: Obtiene el usuario con el ID especificado de la base de datos.
updateUserById: Actualiza el usuario con el ID especificado en la base de datos.
deleteUserById: Elimina el usuario con el ID especificado de la base de datos.
loginValidate: Valida el inicio de sesión del usuario con las opciones especificadas.