# **Ejercicio de entrega de NodeJs**

## Enunciado
Se requiere una API REST que permita manejar librerías y los libros asociados a cada una de las librerías. Utilizar Node.Js Express, Sequelize y Passport como la infraestructura para crear el servicio. Usar SQLlite como motor de base de datos.

## Entidades
### Libreria
* Descripción: Una librería puede tener desde 0 a muchos libros.
* Ruta: /library
* Acciones
  * Crear librería (AUTH)
  * Obtener una librería: debe traer también todos los libros
  * Obtener todas las librerías: debe traer también todos los libros
  * Modificar una librería (AUTH)
  * Eliminar una librería (**) (AUTH)
  * Agregar un libro nuevo (*) (AUTH)
* Entidad

  <table>    
    <tbody>
      <tr>
        <td>id</td>
        <td>int</td>
        <td>El identificador de la librería</td>
      </tr>
      <tr>
        <td>name</td>
        <td>String</td>
        <td>Nombre de la librería. Eg: El Librote</td>
      </tr>
      <tr>
        <td>location</td>
        <td>String</td>
        <td>Dirección física de la librería. Eg: Av. Libertador 1460</td>
      </tr>
      <tr>
        <td>telefono</td>
        <td>String</td>
        <td>Número de teléfono. Eg: 3514563344</td>
      </tr>
    </tbody>
  </table>

### Libro
* Descripción: Un libro tiene todos los datos del mismo, puede pertenecer a una librería o no y representan la instancia (copia) de un libro. Puede haber más de un libro con los mismos datos, excepto el id que es único para esa instancia.
* Ruta: /book
* Acciones
  * Crear libro (*) (AUTH)
  * Obtener un libro en particular
  * Obtener todos los libros
  * Modificar un libro (AUTH)
  * Eliminar un libro (**) (AUTH)
* Entidad

  <table>    
    <tbody>
      <tr>
        <td>id</td>
        <td>int</td>
        <td>El identificador de este libro en particular</td>
      </tr>
      <tr>
        <td>isbn</td>
        <td>int</td>
        <td>Este identificador es único en todo el mundo y representa el libro, la versión del autor y el año de edición</td>
      </tr>
      <tr>
        <td>titulo</td>
        <td>String</td>
        <td>Título del libro</td>
      </tr>
      <tr>
        <td>autor</td>
        <td>String</td>
        <td>Autor del libro</td>
      </tr>
      <tr>
        <td>year</td>
        <td>String</td>
        <td>Año de edición del libro</td>
      </tr>
      <tr>
        <td>library</td>
        <td>int</td>
        <td>El identificador de la librería en donde este libro se encuentra</td>
      </tr>
    </tbody>
  </table>

(*): Para crear un libro, pueden hacerlo de las dos formas:
  * Haciendo que la librería tenga un método para agregar un libro nuevo
  * Crear un libro directamente con /book y enviar el id de la librería
(**) El borrado, siempre de forma lógica. Esto quiere decir que no borramos de la base de datos si no que marcamos que fué borrado

### Usuario
* Descripción: Un usuario del sistema. Estos usuarios van a ser creados en la base de datos cuando se inicia el sistema
* Ruta: /user
* Acciones
  * Login
* Entidad (A definir)
Debe existir un usuario con name: admin y password: admin

### Puntos a evaluar:
* Que la API permite hacer un CRUD de librerías
* Que la API permite hacer un CRUD de libros
* Que las acciones marcadas con (AUTH) sólo se puedan ejecutar si el usuario está autenticado
* Definir y crear la entidad de Usuario
* Describir el proceso de desarrollo. (Cómo fueron fueron creados los archivos y por qué)
* Bonus:
  * Que haya validación de las entidades al momento de crearse/actualizarse


## Descripción del proceso de desarrollo
Para llevar adelante este ejercicio realicé los siguientes pasos que detallo a continuación:
<ol>
  <li>
    Instalación de las dependencias del proyecto y creación del servidor
  </li>
  <li>
    Creación del modelo User, su ruteo, controlador, service y provider y la conexión a la Base de Datos
  </li>
  <li>
    Implementación del login de usuario devolviendo un token en caso de ser exitoso
  </li>
  <li>
    Creación del modelo Book, su ruteo, controlador, service y provider y la conexión a la Base de Datos. Protegiendo las rutas de create, update y delete para que solo puedan ser utilizadas por usuarios logueados.
  </li>
  <li>
    Creación del modelo Library, su ruteo, controlador, service y provider y la conexión a la Base de Datos. Protegiendo las rutas de create, update y delete para que solo puedan ser utilizadas por usuarios logueados.
  </li>
  <li>
    Moviendo el ruteo, controlador, service y provider de User al de Auth
  </li>
</ol>
 
### Estructura del proyecto
A continuación se define una breve descripción de las carpetas del proyecto y sus archivos:
* <b>/src</b>: esta es la carpeta principal del proyecto donde se encuentran las demás que serán detalladas a posteriori. También aquí se encuentra el archivo principal del proyecto (app.js) que contiene la creación del servidor y sus configuraciones.
* <b>/config</b>: en esta carpeta se encuentra un único archivo llamado db-config.js que contiene la configuración necesaria para conectar el proyecto con la base de datos.
* <b>/controllers</b>: en esta carpeta se encuentran los archivos controllers del proyecto (auth, book y library) los cuales se encargan de manejar la respuesta de la api.
* <b>/middleware</b>: en esta carpeta se encuentra un archivo que funciona como middleware (auth.mdw.js) que se utiliza para proteger las rutas en las que se requiera estar logueado para utilizarlas.
* <b>/models</b>: en esta carpeta se encuentra un archivo por cada modelo de las entidades del proyecto (book.js , library.js , user.js).
* <b>/providers</b>: en esta carpeta se encuentran los archivos providers del proyecto (auth, book y library) los cuales se encargan de realizar la llamada a la base de datos.
* <b>/routes</b>: en esta carpeta se encuentran los archivos con el ruteo del proyecto (auth, book y library) los cuales se encargan de definir las rutas del proyecto, definiendo los métodos permitidos y la protección de algunos de ellos para que solamente puedan ser accedidos por un usuario logueado.
* <b>/services</b>:en esta carpeta se encuentran los archivos services del proyecto (auth, book y library) los cuales se encargan de la lógica del negocio.

### API endpoints

`POST /user`

Se utiliza para realizar el login de usuario.
Devuelve un token.
Se debe enviar en el body las propiedades:

    name: 'admin',
    password: 'admin'

---

`GET /library`

Lista todas las bibliotecas registradas en la base de datos.

---

`GET /library/id`

Lista los datos de la biblioteca cuyo id coincide con el valor que se envía en la url.

---

`POST /library`

Se utiliza para crear una biblioteca. Solamente permitido para los usuarios que han realizado un login exitoso y que tienen un token vigente.

Se debe enviar en el header la propiedad:

    Authorization: 'bearer '+ token

y en el body las propiedades:

    name: '', (string)
    location: '', (string)
    phone: '' (string)

---

`PUT /library/id`

Se utiliza para crear actualizar una biblioteca cuyo id coincide con el valor que se envía en la url. Solamente permitido para los usuarios que han realizado un login exitoso y que tienen un token vigente.

Se debe enviar en el header la propiedad:

    Authorization: 'bearer '+ token

y en el body las propiedades:

    name: '', (string)
    location: '', (string)
    phone: '' (string)

---

`DELETE /library/id`

Realiza el borrado lógico de la biblioteca cuyo id coincide con el valor que se envía en la url. Solamente permitido para los usuarios que han realizado un login exitoso y que tienen un token vigente.

Se debe enviar en el header la propiedad:

    Authorization: 'bearer '+ token

---

`GET /book`

Lista todos los libros registrados en la base de datos mostrando en qué biblioteca se encuentran.

---
`GET /book/id`

Lista los datos del libro cuyo id coincide con el valor que se envía en la url.

---

`POST /book`

Se utiliza para crear un libro. Solamente permitido para los usuarios que han realizado un login exitoso y que tienen un token vigente.

Se debe enviar en el header la propiedad:

    Authorization: 'bearer '+ token

y en el body las propiedades:

    isbn: '', (int)
    titulo: '', (string)
    autor: '', (string)
    year: '', (string(4))
    library: '' (int)

---

`PUT /book/id`

Se utiliza para crear actualizar un libro cuyo id coincide con el valor que se envía en la url. Solamente permitido para los usuarios que han realizado un login exitoso y que tienen un token vigente.

Se debe enviar en el header la propiedad:

    Authorization: 'bearer '+ token

y en el body las propiedades:

    isbn: '', (int)
    titulo: '', (string)
    autor: '', (string)
    year: '', (string(4))
    library: '' (int)

---

`DELETE /book/id`

Realiza el borrado lógico del libro cuyo id coincide con el valor que se envía en la url. Solamente permitido para los usuarios que han realizado un login exitoso y que tienen un token vigente.

Se debe enviar en el header la propiedad:

    Authorization: 'bearer '+ token

---