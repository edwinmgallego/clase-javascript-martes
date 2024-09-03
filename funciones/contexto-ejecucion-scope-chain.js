/*
En JavaScript, los contextos de ejecución y la scope chain son conceptos fundamentales que permiten comprender cómo se ejecuta el código y cómo se accede a las variables.

Contexto de ejecución:

Un contexto de ejecución es un entorno en el que se ejecuta el código JavaScript. Contiene información sobre el código que se está ejecutando, como las variables declaradas, las funciones y el objeto global. Cada vez que se invoca una función, se crea un nuevo contexto de ejecución.

Scope Chain:

La scope chain es el mecanismo que utiliza JavaScript para determinar qué variables están disponibles para una instrucción en particular. Se busca en una secuencia de contextos de ejecución hasta encontrar la variable con el nombre correspondiente.

Pasos para la búsqueda en la scope chain:

Objeto de activación actual: Se busca la variable en el objeto de activación del contexto de ejecución actual.
Entorno externo: Si no se encuentra la variable en el objeto de activación actual, se busca en el entorno externo, es decir, en el contexto de ejecución padre.
Repetición: El proceso se repite hasta encontrar la variable o llegar al objeto global.
Variable no definida: Si no se encuentra la variable en ningún contexto de ejecución, se genera un error de referencia. (Que eso fue justo lo que sucedio en el ejemplo final de la clase)
Conclusiones:

Los contextos de ejecución y la scope chain son conceptos esenciales para comprender el funcionamiento del código JavaScript.
Los contextos de ejecución definen el entorno en el que se ejecuta el código, mientras que la scope chain determina qué variables están disponibles para una instrucción en particular.
La comprensión de estos conceptos es fundamental para escribir código JavaScript claro, organizado y libre de errores.




*/