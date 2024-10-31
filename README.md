# darkmode-ejercicio

En este ejercicio el estado de mi aplicacion debera manejar el cambio de light mode a darkmode.
Para poder hacerlo funcionar deberemos:

1- Crear un modelo que tenga un atributo booleano llamado darkmode y un atributo string llamado text

2- Crear un pinia store que implemente el modelo anterior, definir como estado inicial:
- darkmode: false
- text: "LightMode"

3- Crear una accion que cambie el estado de:
- darkmode de falso a verdadero o viceversa
- text: si darkmode es true el texto deberia ser "DarkMode", si es falso "LightMode"

Una vez creado el store, definido el estado inicial y la accion:
En el componente App.vue
- importar el store, almacenarlo en una variable con reactive.
- implementar la directiva v-bind:class en el div con clase wrapper, usando una sintaxis javascript que agregue 'dark' si darkmode de la store es true, o '' (texto vacio) si es false.
- implementar la directiva @click en el button para que cuando se haga click se ejecute la accion del store.

En el componente HomeView:
implementar la directiva v-bind:class en el h1 usando sintaxis javascript para agregar 'dark' o 'light' dependiendo si el darkmode de la store es verdadero o falso (obviamente hay que importar el store creado, asignarlo a una variable reactiva). Ademas asignar el texto de la store (atributo text) al contenido del h1