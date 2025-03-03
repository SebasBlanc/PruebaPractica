# PruebaPractica

FUNDAMENTOS DE COMPUTACIÓN.

1) 1.	Explica la diferencia entre paralelismo y concurrencia. ¿En qué escenarios se recomienda cada uno?
La diferencia del Paralelismo y la concurrencia, es que el paralelismo ejecuta una sola tarea y la divide en subtareas o  pequeñas fracciones y todas son ejecutadas al mismo tiempo y todas las operaiones estan relacionadas a tal punto que el resultado de los de los procesos puede afectar el resultado final y la concurrencia es cuando se ejecutan diferentes procesos al mismo tiempo y que cada uno de estos procesos no ven afectado al otro 

Ejemplo de Paralelismo: Se puede utilizar cuando haya aplicaciones que requieran procesamiento a gran escala entonces el paralelismo mejora su eficiencia.

Ejemplo concurrencia: Puede ser una aplicacion quedescargue archivos de manera simultanea y que no tenga que esperar que se descargue uno para que el siguiente se descargue. Entonces se puede utilizar en un aplicacion que tenga muchas solicitudes 

2) ¿Qué es la complejidad algorítmica y por qué es importante en el desarrollo de software? Proporciona ejemplos de algoritmos con diferentes complejidades.
La complejidad algorimica es una forma de ver eficiencia de un codigo un algoritmo a la hora de resolver un problema y es importante por que ayuda a que el codigo sea mas limpio, menos pesado haciendolo mas eficiente haciedo quue tenga menos tiempo de ejecucion.
Ejemplos: Uno de los ejemplos de es ciclo for que es lineal o un array que no afecta el tiempo de ejecucion,

3) 	¿Cuál es la diferencia entre arquitectura monolítica y arquitectura basada en microservicios? ¿Cuáles son sus ventajas y desventajas?

   La arquitectura Monolitica es cuando se basa en un diesño donde todo esta unido y la de microservicos es cuando estan divididos entre si y no residen en mismo lugar por ejmplo cuando cuando se comunican una API y se pueden editar de manera independiente.
La ventaja del monolitico es que es mas facil de desarrollar pero la desventaja es que no muy limitada 
Por otro lado la de microservicios es mas complejo de desarrollar, pero es mas escalable y mas facil de realizar cambios.
  

BASES DE DATOS
4) Diferencia entre bases de datos relacionales y NoSQL
  Las bases de datos relaciones son aquellas que en cada tabla hay uan llave primaria y las relacion con las otras tablas se hacen mediante llaves foraneas y la diferencia con las NoSQL es que estan en una sola tabla estan echas para alamcenar gran cantidad de datos sin relacion donde no exiten llaves primareas ni llaves foraneas.

5) ¿Qué es la normalización en bases de datos?
   La normalizacion en las bases de datos es el proceso de de reducir las redundacias entre las tablas haciendo que hayan tablas mas pequeñas pero teniendo relacion entre ellas haciendolas mas eficientes
   La Primera forma: Es que los valores no sean repetidos y ademas cada fila tiene ser unica y no con varios datos en un campo
   La segunda Forma: Tiene si o si que cumplir con la primera forma y ademas en esta forma se tiene que depender si o si de la llave primaria
   La tercera forma: Se tiene que cumplir la segunda Forma y ademas que una llave primaria no depende de otra llave primaria.

6) Consulta SQL para obtener los nombres de clientes que han realizado más de 5 compras en el último año

   select nombre
   from clientes c, compras co
   where c.IDcliente = co.IDcliente
   and YEAR(co.FechaCompra) = 2024
   Group By c.IDliente
   Having Count(co.IDCompra)>5;

SEGURIDAD INFORMARTICA
7) Explica qué es una inyección SQL y cómo se puede prevenir.
  LA Inyeccion SQL es una vulnarabilidad de seguridad web donde mediante el ataque el puede interferir en las consultas sql que tenga una aplicacion por ejemplo en un login donde se aplica el ' or ' 1 = 1.
  Las formas que se pueden prevenir las mas sencilla es teniendo un buen Firewall debido a que bloquean dichas inytecciones sql o haciendo que consultas preparadas para evitar dichos ataques por ejemplo que para poder acceder se ocupe si o si la informacion esperada.

  8)¿Qué medidas tomarías para proteger una API REST de ataques comunes?

  Para poder proteger una API primero que todo seria aplicar medidas contra iyeccion sql, ademas de que haya autorizacion por roles, ademas se puede realizar proteccion de ataques de fuerza bruta que en cierta cantidad de intentos bloquee esa ip temporalmente.


9) ¿Cuál es la diferencia entre hashing y encriptación? ¿En qué casos se usa cada uno?
El hashing es cuando se toma la entrada de datos y la transforma a una cantidad de valores fija, normalmente se puede utilizar a la hora de contraseñas haciendo la comparacion de el hash de entrada que se genera con el que ya se encuenta en la base de datos
Y la encriptacion es cuando los datos se convierten en caracteres y se convierten de forma ilegible y los ejemplos de uso es en transito de datos en protocolos HTTPS o a la hora de encriptar datos sencibles como transacciones o datos personales.




   
