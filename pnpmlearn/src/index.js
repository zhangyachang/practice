const axios = require("axios");

axios("http://www.baidu.com")
  .then((res) => {
    console.log("res", res.headers);
  })
  .catch((e) => {
    console.log("e", e);
  });
