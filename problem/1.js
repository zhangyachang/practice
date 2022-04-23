// Problem Set below:
// // Task: Implement a class named 'RangeList'
// // A pair of integers define a range, for example: [1, 5). This range
// includes integers: 1, 2, 3, and 4.
// // A range list is an aggregate of these ranges: [1, 5), [10, 11), [100,
// 201)

/** *
 * NOTE: Feel free to add any extra member variables/functions you like.
 */
class RangeList {
  constructor() {
    this.range = [];
  }
  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify
beginning and end of range.
   */
  add(range) {
    // TODO: implement this
    for (let i = range[0]; i < range[1]; i++) {
      this.range[i] = 1; // 有数据的，没有数据的是undefined或者填充为0
    }
  }
  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify
beginning and end of range.
   */
  remove(range) {
    // TODO: implement this
    for (let i = range[0]; i < range[1]; i++) {
      this.range[i] = 0;
    }
  }
  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    // TODO: implement this
    let str = ``;
    let prev = null;
    for (let i = 0; i < this.range.length; i++) {
      // 一段一段的去寻找
      if (this.range[i] === 1) {
        if (prev === null) {
          prev = i;
        }
      } else {
        // 没有数据了
        if (prev !== null) {
          str += `[${prev}, ${i})`;
          prev = null;
        }
      }
    }
    // TODO: 处理最后一段
    if (prev !== null) {
      str += `[${prev}, ${this.range.length})`;
      prev = null;
    }

    console.log(str);
  }
}

// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// // Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// // Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// // Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// // Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// // Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// // Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// // Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// // Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)

rl.add([0, 1000000000]);
rl.print();