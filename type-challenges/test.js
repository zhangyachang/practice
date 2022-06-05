// interface Person {
//   name: string;
//   age: number;
// }
// let user: Person = {
//   name: 'zyc',
//   age: 123,
// };
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// const req = { url: "https://example.com", method: "GET" };
// const req1 = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method as 'GET' | 'POST');
// handleRequest(req.url, req1.method);
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
}
