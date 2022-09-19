# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  // donde a:8, b:9, c:10
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function (a, b, c) {
    // donde a:8, b:9, c:10 segun argumentos al ejecutar
    b = a; // b=8
    console.log(b); // 8
    b = c; // b=10 (argumento de c)
    var x = 5; // crea var x, luego desaparece
  };
  f(a, b, c);
  console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // 1 => Realmente muestra undefined. No debería var ser hoisted y loggear 1??? Declaration is hoisted. Initialization is not. Hence undefined. (as opposed to an error message)
console.log(baz); // not defined
foo(); // hola
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  // a qué se refiere la condicion? Siempre se ejecuta?

  var instructor = "Franco"; // Conditionals no definen un scope global para var. Se ha vuelto a declarar instructor en el mismo scope global que Tony.
}
console.log(instructor); // Tony.
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function () {
  if (true) {
    var instructor = "Franco"; // Franco permanece en scope local de la funcion.
    console.log(instructor);
  }
})(); // se está ejecutando mediante ()()? Loggea Franco
console.log(instructor); // Loggea Tonny
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The falsh
  console.log(pm); // Reverse Flash
}
console.log(instructor); // The flash
console.log(pm); // Franco

// Conditionals definen un scope local para let, pero no para var
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
/*
6 / "3" muestra 2
"2" * "3" LOGS OUT 6
4 + 5 + "px"  LOG OUT "45px"? NO. LOGS OUT "9px"
"$" + 4 + 5 LOGS OUT "$45"
"4" - 2 LOGS OUT 2
"4px" - 2  LOGS OUT "4px-2"? NO. LOGS OUT NaN
7 / 0 LOGS OUT infinity
{}[0] ??? LOGS OUT undefined
parseInt("09") LOGS OUT 09? Just 9
5 && 2 LOGS OUT TRUE?? Logs out 2 ===> Revisar tabla de la verdad
2 && 5 LOGS OUT 5? Sí, ni idea por qué
5 || 0 LOGS OUT 0? Logs out 5. 5 es truthy
0 || 5 LOGS OUT 0? Logs out 5. Por qué??? 5 es truthy
[3]+[3]-[10] LOGS OUT NaN?? Logs out 23. Concatena, luego la resta hace que se vuelva numero.
3>2>1 LOGS OUT false
[] == ![] LOGS OUT true. Dos objetos no son iguales.
*/
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); // 1? No, realmente devuelve undefined. No aplica hoisting para var?
  console.log(foo()); // 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    //food => false. if no se ejecuta
    var snack = "Friskies";
    return snack;
  }
  return snack; // meow mix
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname; // this.fullname

console.log(test()); // Aurelio de Rosa?? No, retorna undefined. Retorna undefined porque intenta mostar el key fullname pero buscando en el objeto de node
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1); // 1
  setTimeout(function () {
    console.log(2); // Loggea 2 luego de 1s
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0); // loggea 3
  console.log(4); //loggea 4
}

// loggean 1,3,4,2?? Realmente loggea 1,4,3,2. el setTimeout hace que se ejecute más tarde aún si el timer es 0.

printing();
```
