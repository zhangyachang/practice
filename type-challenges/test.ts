// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   }
// }

// function printAll(strs: string | string[] | null) {
//   // !!!!!!!!!!!!!!!!
//   //  DON'T DO THIS!
//   //   KEEP READING
//   // !!!!!!!!!!!!!!!!
//   if (strs) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   }
// }

// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     // x 和 y 都是string类型
//     x.toLowerCase();
//     y
//   } else {
//     x
//     y
//   }
// }

// function logVal(x: Date | string) {
//   if (x instanceof Date) {
//     // Date
//     x
//   } else {
//     // string
//     x
//   }
// }

// let x = Math.random() < 0.5 ? 10 : 'hello world!';
// // x string | number

// x = 1;
// // x
// x // number
// // console.log(x)

// x = 'goodbye!';

// // string
// x

// x = false;

// type Fish = { swim(): void };
// type Bird = { fly(): void };

// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }

//   return animal.fly();
// }

// let a: number | string = 'aaa';

// class Person {
//   constructor() {

//   }
// }

// let user = new Person();

// if (user instanceof Person) {

// }

// type Fish = {
//   swim(): void;
// }

// type Bird = {
//   fly(): void;
// }

// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }

// function getSmallPet(): Fish | Bird {
//   return {
//     fly() {

//     }
//   }
// }

// let pet = getSmallPet();

// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

// interface Shape {
//   kind: 'circle' | 'square',
//   radius?: number,
//   sideLength?: number;
// }

// function handleShape(shape: Shape) {
//   if (shape.kind === 'circle') {

//   }
// }

// function getArea(shape: Shape) {
//   if (shape.kind === 'circle') {
//     return Math.PI * shape.radius ** 2;
//   }
// }

// interface Circle {
//   kind: 'circle';
//   radius: number;
// }

// interface Square {
//   kind: 'square',
//   sideLength: number,
// };

// type Shape = Circle | Square;

// function greeter(fn: (a: string) => void) {
//   fn('hello world');
// }

// type DescribeFunction = {
//   description: string;
//   (someArg: number): boolean;
// }

// function doSomething(fn: DescribeFunction) {
//   console.log(fn.description + 'returned' + fn(6));
// }

// // interface CallOrConstruct {
// //   new(s: string): Date,
// //   (n?: number): number,
// // };

// interface SomeObject {
//   name: string;
//   age: number;
// }

// type someConstructor = {
//   (s: string): number;
//   new (s: string): SomeObject;
// }

// function fn(ctor: someConstructor) {
//   return new ctor('hello');
// }

// // let user = new

// function firstElement(arr: any[]) {
//   return arr[0];
// }

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }

// // s is of type 'string'
// const s = firstElement(["a", "b", "c"]);
// s

// // n is of type 'number'
// const n = firstElement([1, 2, 3]);

// // u is of type undefined
// const u = firstElement([])

// u

// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum } as Type;
//     // Type '{ length: number; }' is not assignable to type 'Type'.
//     // '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
//   }
// }

// // 'arr' gets value { length: 6 }
// const arr = minimumLength([1, 2, 3], 6);
// // and crashes here because arrays have
// // a 'slice' method, but not the returned object!
// console.log(arr.slice(0));

// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(6));
// }

// const zzz = function () {
//   return false;
// }
// zzz.description = '111';
// doSomething(zzz);

// const koa = require('koa');

// koa.listen(3000, () => {
//   console.log('服务已经启动');
// });

// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any | string) {
//   return x.length;
// }

// // function len(x: any[] | string) {
// //   return x.length;
// // }

// len(Math.random() > 0.5 ? 'hello' : [0]);

// interface User {
//   admin: string,
// }
// interface DB {
//   filterUsers(filter: (this: User) => boolean): User[];
// }

// const db = getDB();
// const admins = db.filterUsers(() => this.admin);

// function fn(x: string | number) {
//   if (typeof x === "string") {
//     // do something
//   } else if (typeof x === "number") {
//     // do something else
//   } else {
//     x; // has type 'never'!
//   }
// }

// function doSomething(f: (...args: number[]) => void) {
//   f(1, 2, 3);
// }

// // Array
// interface MyArray {
//   sort<T>(): T[],
//   length: number,
// }

// let sum = [1, 2, 3, 4, 5].reduce((a, b) => {
//   return a + b;
// }, 0);
// console.log('sum', sum);

// type voidFunc = () => void;

// function f1(): void {
//   // return '124';
//   // return undefined;
//   return false;
// };

// interface Person {
//   name: string;
//   age: number;
// }

// interface ReadonlyPerson {
//   readonly name: string;
//   readonly age: number;
// }

// let writablePerson: ReadonlyPerson = {
//   name: "Person McPersonface",
//   age: 42,
// };

// // works
// let readonlyPerson: Person = writablePerson;

// console.log(readonlyPerson.age); // prints '42'
// writablePerson.age++;
// console.log(readonlyPerson.age); // prints '43'

// interface StringArray {
//   [index: number]: string;
// }

// const myArray: StringArray = ['11'];

// const secondItem = myArray[1];

// interface Animal {
//   name: string;
// }
// interface Dog extends Animal {
//   breed: string;
// }

// // interface NoOkay {
// //   [x: number | string]: Animal | Dog,
// //   // [x: string]: Dog,
// // }

// interface NumberDictionary {
//   readonly [index: string]: number | string,
//   length: number,
//   name: string,
// }

// interface BasicAddress {
//   name?: string;
//   street: string;
//   city: string;
//   country: string;
//   postalCode: string;
// }

// type AddressWithUnit = BasicAddress & {
//   unit: string;
//   name: number;
// }

// let a: AddressWithUnit = {
//   // name: throw Error('报错'),
//   // unit: '你好',

// }

// interface Colorful {
//   color: string;
// }

// interface Circle {
//   radius: number;
// }

// interface ColorfulCircle extends Colorful, Circle { }

// const cc: ColorfulCircle = {
//   color: 'red',
//   radius: 42,
// }

// interface Colorful {
//   color: string;
// }
// interface Circle {
//   radius: number;
// }

// type ColorfulCircle = Colorful & Circle;

// function draw(circle: Colorful & Circle) {

// }

// draw({ color: 'red', radius: 100, });

// draw({ color: "red", radius: 42 });

// interface Colorful {
//   color: string;
// }

// interface ColorfulSub extends Colorful {
//   color: number
// }

// interface Box {
//   contents: any;
// }

// interface Box {
//   contents: unknown;

// }

// let x: Box = {
//   contents: 'hello world',
// };

// if (typeof x.contents === 'string') {
//   console.log(x.contents.toLowerCase());
// }

// console.log((x.contents as String).toLowerCase());

// interface NumberBox {
//   contents: number;
// }

// interface StringBox {
//   contents: string;
// }

// interface BooleanBox {
//   contents: boolean;
// }

// interface Box<T> {
//   contents: T,
// }

// function setContents(box: StringBox, newContent: string): void;
// function setContents(box: NumberBox, newContent: number): void;
// function setContents(box: BooleanBox, newContent: boolean): void;
// function setContents<T>(box: Box<T>, newContent: T): void {
//   box.contents = newContent;
// }

// let box: Box<string>;

// interface Array1<Type> {
//   length: number,

//   pop(): Type | undefined,

//   push(...item: Type[]): number,
// }

// let a: ReadonlyArray<string> = [1, 2, 4,];
// let c: readonly string[] = ['1', '3', '4'];
// let b: Array1<string> = ['1', '2', '4'];

// // a[1] = 3;
// // a.push(4);

// function doStuff(values: ReadonlyArray<string>) {
//   const copy = values.slice();
//   console.log(`The first value is ${values[0]}`);

//   // ...but we can't mutate 'values'.
//   values.push("hello!");
// }

// let x: readonly string[] = [];
// let y: string[] = [];

// x = y;
// y = x;

// type StringNumberPair = [string, number];

// function doSomething(pair: StringNumberPair) {
//   const a = pair[0];
//   // a
// }

// interface StringNumberPair1 {
//   length: 2,
//   0: string,
//   1: number,

//   slice(start?: number, end?: number): Array<string | number>,
// }

// type StringNumberBooleans = [string, number, ...boolean[]];
// type StringBooleansNumber = [string, ...boolean[], number];
// type BooleansStringNumber = [...boolean[], string, number];

// const a: StringNumberBooleans = ['hello', 1];
// const b: StringNumberBooleans = ['hello', 1, false];

// console.log(b.length);

// type StringNumberPair = [string, number];
// const d: StringNumberPair = ['1', 1];
// console.log(d.length); // (property) length: 2

// function readButton(...args: [string, number, boolean[]]) {

// }

// let point = [1, 3] as const;

// function distanceFromOrigin([x, y]: [number, number]) {
//   return Math.sqrt(x ** 2 + y ** 2);
// }

// distanceFromOrigin(point);

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// // Error: indexing with a numeric string might get you a completely separate type of Animal!
// interface NotOkay {
//   [x: number]: Dog;
//   [x: string]: Animal;
//   // 'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.
// }

// type Person = {
//   name: string;
// }

// class Human implements Person {
//   age: number;
//   name: string;
// }

// let user: Human = {
//   name: '111',
//   age: 123,
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// identity(123);

// function identity<T>(arg: T) {
//   return arg;
// }

// function identity(arg: number): number;
// function identity<T>(arg: T): T {
//   return arg;
// }

// identity(111);

// class Person {
//   name: string;

//   constructor(name) {
//     this.name = name;
//   }
// }

// function say(name: string) {}

// const id<T> = (arg: T): T => arg;
// function id<T>(params: T): T {
//   return params;
// }

// id<number>(123);

// const id: <T>(id: T) => T = function (arg) {
//   return arg;
// };

// id<number>(123);

// enum Sex {
//   Man,
//   Woman,
//   UnKnow,
// }
// interface Person {
//   name: string;
//   sex: Sex;
//   age: number;
// }

// // interface MarketPerson {
// //   name?: string;
// //   sex?: Sex;
// //   age?: number;
// //   phone: string;
// // }

// type MarketPerson = Partial<Person> & { phone: string };

// let user: MarketPerson = {
//   phone: "1508",
// };

// function Partial(Type) {
//   type ans = {};
//   for (let key of Type) {
//     ans[key] = makeOptional(Type, key);
//   }

//   return ans;
// }

// type PartialedPerson = Partial(Person)

// type Partial1<T> = {
//   [key in keyof T]?: T[key];
// };

// // type Partial<T> = {
// //     [P in keyof T]?: T[P];
// // };

// function id1<T, U>(arg1: T, arg2: U): U {
//   return arg2;
// }

// // type P = [number, string, boolean];
// type P = [string];
// type Q = Date;

// type R = [Q, ...P]; // A rest element type must be an array type.

// type Lucifer<T> = LeetCode;

// type LeetCode<T = {}> = {
//   name: T;
// };

// let aaa: LeetCode<string>; //ok
// let bbb: Lucifer<string>;

// interface Sizeable {
//   size: number;
// }

// function trace<T extends Sizeable>(arg: T): T {
//   console.log(arg.size); // Error: Property 'size doesn't exist on type 'T'
//   return arg;
// }

// // trace({
// //   size: 100,
// // });

// const aaaaa: number[] = [11];

// type FC<P = {}> = FunctionComponent<P>;

// type PropsWithChildren<T> = {};
// type ReactElement<T, U> = {};

// interface FunctionComponent<P = {}> {
//   (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
//   defaultProps: Partial<P>;
//   displayName?: string;
// }

// type DeepPartial<T> = T extends Function
//   ? T
//   : T extends object
//   ? { [P in keyof T]?: DeepPartial<T[P]> }
//   : T;

// type a<T> = Partial<T>;

type MyReturnType<T> = {};

type ReturnType1<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;

type Func<T = number> = (a: T) => T;

const foo: ReturnType1<Func<string>> = '123';
