//07 lista primitivos
let tipoPrimitivos = ["string", "number", "bigint", "boolean", "undefined", "symbol", "null"];

console.log(tipoPrimitivos);

//08 var p cada primitivo
let str = "texto";
let num = 42;
let bigi = 100n;
let booo = false;
let undef = undefined;
let sym = Symbol("id");
let nuuu = null;

console.log(str, num, bigi, booo, undef, sym, nuuu);

//09 symbol com typeof
let symb = Symbol("meuSimbolo");

if (typeof symb === "symbol") {
  console.log("É um símbolo!");
}