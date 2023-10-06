type GetTypeByKey<
  T extends any,
  K extends string
> = K extends `${infer P}.${infer R}`
  ? P extends keyof T
    ? GetTypeByKey<T[P], R>
    : never
  : K extends keyof T
  ? T[K]
  : never;

type Test = {
  a?: {
    b: string;
    c: (name: string) => boolean;
    e?: {
      f: number;
    };
  };
  d: number[];
};

type A = GetTypeByKey<Test, "a">;
var a: A = { b: "123", c: () => true };

type B = GetTypeByKey<Test, "d">;

type C = GetTypeByKey<Test, "a.c">;

type F<T extends string> = GetTypeByKey<Test, `${T}.c`>;

type G = F<"d">;

type GetTypeByKey1<T extends any, K extends string> = K extends keyof T
  ? T[K]
  : never;

type Z = GetTypeByKey1<Test, "a">;

type X = GetTypeByKey1<Test, "a.e">;

type FunctionKeys<T extends any> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type IAllJsb = {
  code: number;
  version: string;
  getAppInfo: () => void;
  getAd: () => void;
};

type IAllJsbs = FunctionKeys<IAllJsb>;

type AAA = never | "aaa" | "bb" | "aaa";

type BBB = {
  code: "aa";
}["code"];

// type say = (params: { action: 0 | 1 }) => {
//   code: 0;
//   success: true;
//   appName: "12312";
// };

function say(params: { action: 0 | 1 }) {
  return {
    code: 0,
    success: true,
    appName: "12312",
  };
}

type C1 = ReturnType<typeof say>;

type C2 = Parameters<typeof say>;

// // type debounce<T extends Function, P extends number> = T extends Function
// //   ? T
// //   : any;

// data({ action: "code" });

// type DebounceFunction = (fn: Function, delay: number) => Function;

// type DebounceFunction<T extends any[], R> = (
//   fn: (...args: T) => R,
//   delay: number
// ) => (...args: T) => R;

// function DebounceFunction(fn, delay = 500) {
//   let timer: null | number = null;
//   type IParams = Parameters<typeof fn>;
//   const self = this;
//   return function (params: IParams) {
//     timer && clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.call(self, ...params);
//       timer = null;
//     }, delay);
//   };
// }

// type say11 = (data: { action: number; url: string }, a: string) => boolean;

// type say12 = DebounceFunction<say11, string>;

// // function say11(data: { action: number; url: string }) {}

// // const data = DebounceFunction(say11);

// function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
//   let timeoutId: ReturnType<typeof setTimeout> | null = null;

//   return ((...args: Parameters<T>): ReturnType<T> => {
//     const context = this;

//     clearTimeout(timeoutId!);
//     timeoutId = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);

//     return fn.apply(context, args);
//   }) as T;
// }

// function say11(data: { action: 0 | 1; url: string }) {
//   return true;
// }

// const data = debounce(say11, 500);

type AAAAA<T> = T extends Function ? T : string;

type C111 = AAAAA<() => void>
