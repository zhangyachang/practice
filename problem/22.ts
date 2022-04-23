/*
[1,2]
[1,4]
[1,6]

[3,5]
[7,9]
*/
class RangeList {
  rangelist = []
  add(range) {
    const [rangeMin, rangeMax] = range
    for (let i = 0; i < this.rangelist.length; i++) {
      const min = this.rangelist[i][0]
      for (let j = i; j < this.rangelist.length; j++) {
        const [jmin, jmax] = this.rangelist[j]
        // 在区间内
        if (rangeMin >= min && rangeMax <= jmax) {
          return
        }
        // 大于等于区间
        if (rangeMax >= jmax && rangeMin <= jmax) {
          // 扩大区间
          this.rangelist[j] = [jmin, rangeMax]
        }
      }
    }

    // 不和区间交叉，则为新区间
    this.rangelist.push(range)
    // 排序一下
    this.rangelist.sort((a, b) => a[0] - b[0])
  }

  remove(range) {
    const [rangeMin, rangeMax] = range
    let delIdx = -1
    for (let i = 0; i < this.rangelist.length; i++) {
      const [min, max] = this.rangelist[i]
      // 在右区间内，需要切开
        // [10, 21] [15, 17]
        if (rangeMin > min && rangeMax < max && max > rangeMax) {
        this.rangelist[i] = [rangeMax, max]
        this.rangelist.splice(i, 0, [min, rangeMin])
      } else if (rangeMin >= min && rangeMax <= max) {
        // 在区间内，但有一边重合
        this.rangelist[i] = [rangeMax, max]
      } else if (this.rangelist.length >= 2) {
        for (let j = i + 1; j < this.rangelist.length; j++) {
          const [jmin, jmax] = this.rangelist[j]
          // 如果删除的区间包含了子区间，就删掉
          if (rangeMin < jmin && rangeMax < jmax) {
            this.rangelist[i] = [min, rangeMin]
            this.rangelist[j] = [rangeMax, jmax]
            delIdx = i
            break
          }
        }
      }
    }
    if (delIdx > 0) {
      this.rangelist.splice(delIdx, 1)
    }
  }

  print() {
    let str = '';
    for (const item of this.rangelist) {
      const [min, max] = item
      str += `[${min}, ${max})`;
    }
    console.log(str);
  }
}


const rl = new RangeList();
// Example run
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)
rl.add([3, 1000000000]);
rl.print();