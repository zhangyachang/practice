/**
 * 只是实现一个大致思路（代码略有误差），采用了数组作为缓存的方式，这种可能性能会稍微查一些。
 * 
 * 1. 可采用Map结构
 * 2. 可以使用双向链表。虚拟表头 虚拟表尾。
 */

class Node {
  constructor(id, value) {
    this.id = id;
    this.value = value;
    this.timer = null;
  }
}

class Cache {
  constructor(maxCount, time) {
    this.cacheList = [];
    this.maxCount = maxCount;
    this.time = time;
  }

  get(id) {
    let target = null;
    for (let i = 0; i < this.cacheList.length; i++) {
      if (this.cacheList[i].id === id) {
        target = this.cacheList[i];
        break;
      }
    }

    // 如果获取了之后，需要更新到第一位
    this.set(id, target);
    return target && target.value;
  }

  set(id, value) {
    // 设置的时候判断是否存在
    let flag = false;
    for (let i = 0; i < this.cacheList.length; i++) {
      if (this.cacheList[i].id === id) {
        // 存在即删除
        let node = this.cacheList.splice(i, 1);
        clearTimeout(node.timer);
        flag = true;
        break;
      }
    }

    let node = new Node(id, value);
    // 过期删除
    node.timer = setTimeout(() => {
      this.delete(id);
    }, this.time);

    // 不存在
    if (!flag) {
      // 判断是否超出了长度
      if (this.cacheList.length >= this.maxCount) {
        // 删除最后一项
        let node = this.cacheList.pop();
        clearTimeout(node.timer);
        this.cacheList.unshift(node);
      } else {
        // 没有超出
        this.cacheList.unshift(node);
      }
      return;
    }

    // 存在
    this.cacheList.unshift(node);
  }

  delete(id) {
    for (let i = 0; i < this.cacheList.length; i++) {
      if (this.cacheList[i].id === id) {
        this.cacheList.splice(i, 1);
        break;
      }
    }
  }
}