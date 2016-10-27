console.log("------------------");
console.log("OPERADORES LOGICOS");
console.log("------------------\n\n");

/* Asignando una proposición 
   verdadera a las variables
          p  y  q
   locales.
*/
var p = 2 > 1;
var q = 5 < 7;

console.log("==================");
console.log("Operador AND  (&&)");
console.log("==================\n\n");

console.log("*************************");
console.log(p + " AND " + q + " es: " + (p && q));
console.log(p + " AND " + !q + " es: " + (p && !q));
console.log(!p + " AND " + q + " es: " + (!p && q));
console.log(!p + " AND " + !q + " es: " + (!p && !q));
console.log("*************************");

console.log("=================");
console.log("Operador OR  (||)");
console.log("=================\n\n");

console.log("*************************");
console.log(p + " OR " + q + " es: " + (p || q));
console.log(p + " OR " + !q + " es: " + (p || !q));
console.log(!p + " OR " + q + " es: " + (!p || q));
console.log(!p + " OR " + !q + " es: " + (!p || !q));
console.log("*************************");