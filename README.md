# Hero App (Firebase (Authenticate) + Bootstrap + localStorage + Custom hooks + Private and Public Router)

Este proyecto se basa en una aplicacion que obtiene de una bases de datos fake, ciertos superhero y mediante la autenticacion nos permite elegir nuestros heroes favoritos. Si no tenemos un usuario vamos a poder registrarnos, tambien podemos buscar nuestros superheroes favoritos. Utilizamos el localStorage para almacenar los heroes que nos gusten. 

# Construido con 🛠️
* React.js
* React Router DOM v6
* Hooks --> useMemo, useReducer, useContext y mas..
* Custom hooks
* Boostrap
* localStorage
* React Toastify
* Firebase

# Funcionalidades ⚙️

## Validacion de el formulario
A la hora de crear un usuario las contraseñas deben coincidir, no se puede enviar el formulario vacio. A la hora de buscar un usuario no se puede realizar la busqueda si el campo no esta vacio.

## Autenticacion
La autenticacion esta realzida con Firebase, nos podemos registrar con nuestro 
email y tan solo una contraseña mayor a 6 digitos, para poder iniciar sesion cuantas veces querramos. 

## Multiples Usuarios
Como cada navegador contiene su propio localStorage podemos iniciar sesion en diferentes navegadores y tener nuestros propios heroes como favoritos. Si bien
esto mismo se deberia hacer mediante una bases de datos y que cada usuario pueda tener sus propios superheroes cada vez que inicie sesion, si necesidad de usar el localStorage ya que en este proyecto solo se usa el localStorage para un unico usuario.

## Saludo de bienvenida
Para ver el mensaje de "Hola, nombre 👋" se realiza con una funcion que recibe como argumento el email con el que se registro. A este email lo convertimos en un array para poder separarlo por el @, una vez realizado se separa en dos por un lado el nombre y el otro el dominio del email, luego se elimina el dominio del mail asi quedandonos con el nombre para convertirlo y devolverlo como un string. 

## Filtrar un heroe
Para filtar un heroe se utiliza varias cosas, desde el useNavigate para quedarnos con el metodo navigate para redirigir al usuario a la ubicacion de ese superheroe buscado, tambien utlizamos el useLocation para quedarno con el query y poder pasarlo como argumento a la funcion que filtra dicho heroe buscado. Como la funcion filtrar hace que se renderize el componente solo lo va a realizar cuando el query cambie, es por eso que se utiliza el useMemo para que memorize el calulo correcto en cada render. 

## Navegacion 
Cada link nos redirige exclusivamente a un componente que se encarga de renderizarse para mostrar dicho contenido.  

## Rutas privada y Rutas publicas
Las rutas fueron creada para que un usuario solo y solo si tenga que iniciar sesion para ver todo el contenido de la app (Privadas). 
En caso que el usuario no este registrado o no haya iniciado sesion 
solo podra ver el comoponente login y el register. 

## Funciones y variables globales 
Sea creado un contexto para poder reutilizar variables, funciones de manera global en todos los componentes que se necesiten, este contexto (AuthContext) no es mas que un componente que recibe un objeto llamado value que contiente variables y funciones. En el contexto se encuentran las funciones del login, registrar y logout de firebase entre tantas mas. 

## Agregar o eliminar un Heroe
Esta funcionalidad se realiza mediante una funcion reducer que nos permite mediante un tipo de accion realizar determinada tarea. Luego con el useReducer tambien utilizamos una funcion que cuando inicia la aplicacion consulte el localStorage para consultar si este usuario contiene herores como favoritos.

## Toastify 
Gracias a una bibioteca de react [React Toastify](https://fkhadra.github.io/react-toastify/introduction) nos permite crear personalizar alertas de diferentes manera, ya sea para cuando se realiza correctamente, o quizas cuando damos un mensaje de alerta, entre tantas.  

## Resposive
Esta aplicacion esta diseñada para que se pueda usar desde cualquier dispositivo. 

# ACLARACION IMPORTANTE ⛔️
Si bien un proyecto para poner en practica mis conocimientos, se podran encontrar ciertas fallas, tambien como aclare mas adelante se puede inicar un unico usuario por navegador ya que utilizo el localStorage para guardar los heroes favoritos, esto se puede crear con una base de datos y que cada usuario obtenga un arreglo con cada uno de los objetos con informacion de sus heroes favoritos

# Deploy 👨‍💻
# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);
