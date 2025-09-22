<h1 align="center"> Challenge Amigo Secreto </h1>
<p align="left">
<img src="https://img.shields.io/badge/STATUS-%20TERMINADO-green">
</p>
<img width="1024" height="1536" alt="Copilot_20250921_183959" src="https://github.com/user-attachments/assets/e646a3fd-995e-4df9-8344-cf6155f7f632" />
Para este challenge se busco implementar lo que se aprendio a lo largo de todos los cursos del programa ONE de Oracle en compañia de alura LATAM.

A grandes rasgos es un proyecto mediante el cual el usuario ingresara una lista de nombres de sus amigos/amigas que se guardaran en una lista en pantalla, donde despues podra sortear estos nombres y de manera aleatoria le dira quien es su amigo secreto sorteado.
<h2> Funcionalidades: </h2>

:hammer:Lista: Una lista que permite al usuario agregar el nombre de sus amigos y va haciendo push a la lista conforme se agregan mas nombres, esta lista distingue si ya se han repetido los nombres y si no se ingresa ningun valor.

:hammer:Funcion que recorre la lista: Esta funcion recorre la lista y va insertando en "li" cada uno de los nombres nuevos que añada el usuario.

:hammer:Funcion que sortea el nombre: Esta funcion que es activada mediante un boton distingue si la lista esta vacia, de no ser asi, tomara un numero aleatorio sorteado por una operacion "Math.floor" y "Math.random" que se encuentre dentro de la lista de numeros permitidos por la lista "(amigos.length)" y a partir del numero mostrara el nombre que este en la posicion que coincida con el numero sorteado.

:hammer:Alertas: Se mostraran alertas cuando los campos ingresados no sean validos o en su defecto cuando esten vacios.


