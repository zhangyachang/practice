var obj = {
  region: "boe",
  confspace: "default",
  key: "approve_config",
  value: {
    isBoeApprove: false,
  },
};

var obj1 = {
  isBoeApprove: false,
};

console.log(JSON.stringify(JSON.stringify(obj1)));


// /api/template  /api/approve   /api/page
const reg3 = /^(\/api\/template)|^(\/api\/approve)|^(\/api\/page)/;
// |^|(\/api\/page)
const reg1 = /^(\/api)\/[(template)(approve)(page)]/;
const reg = /^\/api\/(template|approve|page)/;

console.log(reg.test('/api/template'))
console.log(reg.test('/api/approve'))
console.log(reg.test('/api/apage'))