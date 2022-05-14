interface Person {
  name: string;
  age: number;
  sex: {};
}

let obj: Person = {
  name: "张三",
  age: 1,
  sex: {},
};

// interface AppOrder {
//   name: string;
//   age: number;
// }

// let a: undefined | AppOrder;
// let a: string[] = ["1", 2, 3];

// 稍微了解一些内容
let a: number = 123;

for (let i = 0; i < 10; i++) {
  console.log("i - ", i);
}

// function formatParams(type: string) {
//   const url = "https://www.baidu.com?name=z&age=123&c#hash";
//   const [origin, search] = url.split("?");
//   const [params, hash] = search.split("#");
//   let result = {
//     origin,
//     hash,
//   };

//   let formatParams = params.split("&");
//   for (let i = 0; i < formatParams.length; i++) {
//     let item = formatParams[i];
//     const [key, value = ""] = item.split("=");
//     result[key] = value;
//   }

//   return result;
// }
