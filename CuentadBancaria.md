Primera Parte: Clase CuentaBancaria
La clase CuentaBancaria es como una representación de una cuenta de banco con algunas propiedades y métodos para hacer cosas como depositar, retirar dinero, ver el saldo y el historial de transacciones.

Propiedades:
titular: Es el nombre de la persona que tiene la cuenta.
saldo: Es el dinero que tienes en la cuenta. Empieza en 0, pero cambia cuando depositas o haces retiros.
historial: Guarda un registro de todas las transacciones que has hecho (como los depósitos y retiros). Cada transacción se guarda como un texto.

---------------------------------------------------------------------------------------------------------------------------------
Métodos:
1-constructor(titular, saldoInicial = 0)
Este es el método que se ejecuta cuando creas una cuenta. 
Aquí se define el titular de la cuenta, el saldo inicial (que empieza en 0 si no dices lo contrario) y el historial de transacciones (que comienza vacío).
------------------------------------------------------------------------------------------------------------------------------------------------------
2-depositar(cantidad)

Aquí es donde agregas dinero a tu cuenta. 
Si la cantidad es mayor que 0, se suma al saldo y se guarda en el historial. 
Si intentas depositar una cantidad negativa o cero, te aparece un mensaje de error.
--------------------------------------------------------------------------------------------------------------------------------------------------------
3- retirar(cantidad)

Este método permite sacar dinero de la cuenta. 
Si tienes suficiente saldo y la cantidad es válida, se resta del saldo y se guarda en el historial. 
Si no tienes suficiente dinero o intentas retirar una cantidad incorrecta, se muestra un error.
---------------------------------------------------------------------------------------------------------------------------------------------------------------
4-consultarSaldo()

Este método te muestra el saldo actual de tu cuenta a través de un mensaje emergente. 
Es como ver cuántos fondos tienes disponibles en el momento.
---------------------------------------------------------------------------------------------------------------------

5-
mostrarHistorial()

Si quieres saber qué transacciones has hecho, 
este método te muestra el historial completo (con depósitos y retiros) en un formato legible.
----------------------------------------------------------------------------------------------------------------------------------------
Segunda Parte: Función mostrarMenu()
Este código te presenta un menú interactivo donde puedes elegir qué acción realizar en tu cuenta (crear cuenta, depositar, retirar dinero, ver saldo, ver historial o salir).

¿Cómo funciona?
El menú te muestra opciones a través de un cuadro de diálogo (con prompt):

1: Crear cuenta bancaria.
2: Depositar dinero.
3: Retirar dinero.
4: Consultar saldo.
5: Ver historial de transacciones.
6: Salir.
Dependiendo de la opción que elijas, se ejecutará una acción diferente:

Opción 1 (Crear cuenta): El sistema te pregunta tu nombre y saldo inicial, y luego crea la cuenta.
Opción 2 (Depositar): Te pide cuánto dinero quieres depositar y lo agrega a tu saldo.
Opción 3 (Retirar): Te pregunta cuánto quieres retirar y lo resta de tu saldo si es válido.
Opción 4 (Consultar saldo): Muestra el saldo actual.
Opción 5 (Historial): Muestra todas las transacciones que has hecho.
Opción 6 (Salir): Te dice "adiós" y termina el programa.
Si eliges una opción incorrecta, te dará un mensaje de error y te pedirá que intentes de nuevo.

Después de realizar cualquier acción (como depositar o retirar), el menú se vuelve a mostrar para que puedas seguir usando la cuenta, hasta que decidas salir.




