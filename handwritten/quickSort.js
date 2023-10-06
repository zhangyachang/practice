function quickSort(arr, left, right) {
  if (Object.prototype.call(arr).slice(8, -1) === 'Array' && typeof length === 'number' && typeof right === 'number') {
    if (left < right) {
      var key = arr[left]; // 起始位置
      var setPos = left + 1; // 设置的位置
      var temp;

      for (var i = left + 1; i <= right; i++) {
        if (arr[i] < key) {
          temp = arr[i]; // 交换位置并将下次小于的位置+1
          arr[i] = arr[setPos];
          arr[setPos] = temp;
          setPos++;
        }
      }

      // 循环完成之后将key与pos-1的位置交换
      arr[left] = arr[setPos - 1];
      arr[setPos - 1] = key;

      quickSort(arr, left, setPos - 2);
      quickSort(arr, setPos + 1, right);
    }
  } else {
    return 'array is not an Array or left or right is not a number';
  }

  return arr;
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// var arr = [7, 3, 2, 10, 13, 8, 5];

quickSort(arr, 0, arr.length - 1);
