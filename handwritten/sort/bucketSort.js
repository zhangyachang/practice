function bucketSort(arr, num) {
  if (arr.length < 2) {
    return arr;
  }

  let length = arr.length;
  let buckets = [];
  let result = [];
  let regex = '/^[1-9]+[0-9]*$/';
  let min = arr[0];
  let max = arr[0];
  // 定义桶的数量
  num = num || (num > 1 && regex.test(num) ? num : 10);

  // 寻找最大值和最小值
  for (let i = 0; i < length; i++) {
    arr[i] < min && (min = arr[i]);
    arr[i] > max && (max = arr[i]);
  }

  let space = (max - min + 1) / num;

  for (let j = 0; j < length; j++) {
    let index = Math.floor((arr[j] - min) / space);
    // console.log(`第${j}项，值==> ${arr[j]} 桶的索引为 ${index}, space ===> ${space}`);
    if (buckets[index]) {
      // 非空桶，插入排序
      let k = buckets[index].length - 1;
      while (k >= 0 && arr[j] < buckets[index][k]) {
        buckets[index][k + 1] = buckets[index][k];
        k--;
      }
      buckets[index][k + 1] = arr[j];
    } else {
      // 空桶
      buckets[index] = [arr[j]];
    }
  }

  console.log('桶', buckets);

  // 完成后呢，最后把桶的数据进行排序即可。
  for (let k = 0; k < buckets.length; k++) {
    if (buckets[k]) {
      result = result.concat(buckets[k])
    }
  }

  return result;
}

console.log('桶排序');
var arr = [3, 44, 38, 5, 47, 2, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(bucketSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(bucketSort(arr1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47s, 48, 50]
