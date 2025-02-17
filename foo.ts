// Comments
// Single-line comment

/*
 Multi-line comment
*/

// Keywords & Control Flow
if (true) {
  console.log("If statement");
} else {
  console.log("Else statement");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (false) {
  console.log("While loop");
}

switch ("case") {
  case "case":
    console.log("Switch case");
    break;
  default:
    console.log("Default case");
}

// Functions & Methods
function myFunction(param: string): number {
  return param.length;
}

const arrowFunction = (param: number): string => `Number: ${param}`;

class MyClass {
  property: string = "Hello";

  constructor(public readonly id: number) {}

  method(): void {
    console.log(this.property);
  }
}

// Variables & Constants
let myVar: string = "Variable";
const myConst: number = 42;
var oldVar = "Legacy var";

// Types & Interfaces
type MyType = { id: number; name: string };
interface MyInterface {
  id: number;
  name: string;
}

// Enums
enum MyEnum {
  First = 1,
  Second,
  Third
}

// Objects & Arrays
const myObject: MyType = { id: 1, name: "Test" };
const myArray: number[] = [1, 2, 3];

// Generics
function genericFunction<T>(value: T): T {
  return value;
}

const genericVar = genericFunction<string>("Hello");

// Imports & Exports
import { readFileSync } from "fs";
export const exportedVar = "Exported";
export default MyClass;

// Promises & Async/Await
async function asyncFunction(): Promise<void> {
  const result = await fetch("https://api.example.com");
  console.log(result);
}

// Operators
const sum = 5 + 10;
const difference = 10 - 5;
const product = 5 * 10;
const quotient = 10 / 2;
const remainder = 10 % 3;
const logical = true && false || true;
const comparison = 10 > 5;

// Null & Undefined
const nullable: string | null = null;
const undef: undefined = undefined;

// Try-Catch
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.error(error);
}

// Symbols & BigInt
const uniqueSymbol: symbol = Symbol("unique");
const bigIntNumber: bigint = 9007199254740991n;

// Template Literals
const templateString = `Hello, ${myVar}!`;

// Decorators (if enabled in TS config)
function DecoratorExample(target: any) {
  console.log("Decorator applied");
}

@DecoratorExample
class DecoratedClass {}

// Type Assertions
const someValue: any = "This is a string";
const strLength: number = (someValue as string).length;

// Optional Chaining & Nullish Coalescing
const optional = myObject?.id ?? 0;

// Spread & Rest Operators
const newArray = [...myArray, 4, 5, 6];
function restParams(...args: number[]) {
  console.log(args);
}

restParams(1, 2, 3);
