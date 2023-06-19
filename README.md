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