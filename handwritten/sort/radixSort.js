function radixSort(arr, maxDigit) {
  let mod = 10;
  let dev = 1;
  let counter = [];
  const length = arr.length;

  for (let i = 0; i < maxDigit; i++, mod *= 10, dev *= 10) {
    for (let j = 0; j < length; j++) {
      let bucket = parseInt((arr[j] % mod) / dev);
      if (!counter[bucket]) {
        counter[bucket] = [];
      }

      counter[bucket].push(arr[j]);
    }

    // 把值取出来
    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      if (counter[j]) {
        while (counter[j].length) {
          arr[pos] = counter[j].shift();
          pos++;
        }
      }
    }
  }

  return arr;
}

console.log('基数排序');
var arr = [3, 44, 38, 5, 2, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [10, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(radixSort(arr, 2));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(radixSort(arr1, 2));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47s, 48, 50]
