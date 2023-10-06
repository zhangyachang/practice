// interface IdLabel {
//   id: number /* some fields */;
// }
// interface NameLabel {
//   name: string /* other fields */;
// }

// type NameOrId<T extends number | string> = T extends number
//   ? IdLabel
//   : NameLabel;

// function createLabel11111<T extends number | string>(
//   idOrName: T
// ): T extends number ? IdLabel : NameLabel {
//   if (typeof idOrName === "string") {
//     return { name: "张三" } as NameOrId<T>;
//   }

//   return { id: 123 } as any;
// }

// // createLabel11111('123').name;
// // createLabel11111(123).id;

// // createLabel11111('123').name;
// // createLabel11111('123').name;

// let arr = [1, 2, 3, 4, 5, 5, 6, 76, 7, 7];
// let dirc = {};
// let result = []; // 结果
// for (let i = 0; i < arr.length; i++) {
//   if (dirc[arr[i]]) {
//     // 如果存在，那么就是重复项
//     result.push(arr[i]);
//   } else {
//     // 不存在，那么把它放到配置中
//     dirc[arr[i]] = 1;
//   }
// }
