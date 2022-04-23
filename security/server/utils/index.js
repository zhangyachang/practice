/**
 * 工具包方法
 */

exports.getString = function () {
  console.log('11111111');
};

exports.fillZero = function (number) {
  if (number < 10) {
    number = `0${number}`;
  }
  return number;
};

exports.getTime = () => {
  const timestamp = new Date();
  const hour = this.fillZero(timestamp.getHours());
  const minute = this.fillZero(timestamp.getMinutes());
  const second = this.fillZero(timestamp.getSeconds());
  return `${hour}:${minute}:${second}`;
};
