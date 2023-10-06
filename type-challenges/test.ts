// /**
//  * 代码code
//  */

// interface Animal {
//   live(): void;
// }

// interface Dog extends Animal {
//   woof(): void;
// }

// type Example = Dog extends Animal ? number : string;

// type Example2 = RegExp extends Animal ? number : string;

// interface IdLabel {
//   id: number;
// }

// interface NameLabel {
//   name: string;
// }

// // function createLabel(id: number): IdLabel;
// // function createLabel(id: string): NameLabel;
// // function createLabel(id: number | string): IdLabel | NameLabel;
// // function createLabel(id: string | number): IdLabel | NameLabel {
// //   if (typeof id === "string") {
// //     return {
// //       id: 123,
// //     } as IdLabel;
// //   }

// //   if (typeof id === "number") {
// //     return {
// //       name: "张三",
// //     };
// //   }
// // }

// // let obj = createLabel(123);
// // obj.id

// // let ob1j = createLabel('123');
// // ob1j.name;

// type NameOrId<T extends number | string> = T extends number
//   ? IdLabel
//   : NameLabel;

// function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
//   if (typeof idOrName === "string") {
//     return {
//       name: "张三",
//     } as NameOrId<T>;
//   }

//   if (typeof idOrName === "number") {
//     return {
//       id: 123,
//     } as any;
//   }
// }

// let obj = createLabel(123);
// let obj1 = createLabel("123");

// interface IAbleMessage {
//   message: string;
// }

// type MessageOf<T extends { message: unknown }> = T["message"];
// type EmailMessageContents = MessageOf<IAbleMessage>;

// type MessageOf1<T> = T extends { message: unknown } ? T["message"] : never;

// interface Email {
//   message: string;
// }
// interface Dog {
//   bark(): void;
// }

// type EmailMessageContents1 = MessageOf1<Email>;
// type EmailMessageContents2 = MessageOf1<Dog>;

// type Flatten<T> = T extends any[] ? T[number] : T;

// type Str = Flatten<Array<string>>;

// type Num = Flatten<number>;

// type A = Array<string>;
// type AType = A[number];

// type Flatten1<Type> = Type extends Array<infer item> ? item : Type;

// type Str1 = Flatten1<boolean[]>;
// type Num1 = Flatten1<number>;

// type a = Array<string>;
// type b = a extends Array<infer item> ? item : never;

// type GetReturnType<T> = T extends (...args: any[]) => infer Return
//   ? Return
//   : never;

// type Num12 = GetReturnType<() => number>;
// type Str12 = GetReturnType<(x: string) => boolean>;
// type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
// type aaaaa = GetReturnType<string>;
// declare function stringOrNum(x: string): number;
// type get = (a: number, b: string) => boolean[];
// type typa = number;
// let a: number = 123;
// type aaaaaa = typeof a;

// type ToArray<T> = T extends any ? T[] : never;
// // type ToArray<>
// type StrArrOrNumArr = ToArray<string | number>;

// type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

// type aaa = ToArrayNonDist<string | number>;

// let ab: StrArrOrNumArr = [1, 2, 3];

// // ab.push(1);
// // ab.push("12");

// // let abab: aaa = [1, 2, 3];
// // abab.push('123');

// 当你需要提前声明属性的类型时
interface Horse {
  name: string;
  age: number;
}

type OnlyBoolAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolAndHorses = {
  del: true,
  rodney: false,
  aa: {
    name: "123",
    age: 19,
  },
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

type AAAA = Partial<FeatureFlags>;

type CreateMutable<Type> = {
  -readonly [P in keyof Type]: Type[P];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type removeLockedAccount = CreateMutable<LockedAccount>;

// 删除属性中的可选属性
type Concrete<Type> = {
  [P in keyof Type]-?: Type[P];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type ABABAB = Concrete<MaybeUser>;

// type MappedTypeWithNewProperties<T> = {
//   [P in keyof T as NewKeyType]: T[P];
// };

// type MappedTypeWithNewProperties<Type> = {
//   [Properties in keyof Type as NewKeyType]: Type[Properties];
// };

// type Getters<Type> = {
//   [Property in keyof Type as `get${Capitalize<
//     string & Property
//   >}`]: () => Type[Property];
// };

type Getters<Type> = {
  [Property in keyof Type]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

type RemoveKindField<Type> = {
  [P in keyof Type as Exclude<P, "kind">]: Type[P];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindLessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };

type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

// type Config = {
//    square: (event: SquareEvent) => void;
//    circle: (event: CircleEvent) => void;
// }
