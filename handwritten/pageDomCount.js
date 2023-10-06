/**
 * 统计出DOM元素排行前3个元素
 *
 */

// 1. 统计页面中所有的dom元素，返回dom元素个数最多的3个
// 提示：1. 可以使用 querySelectorAll
// 2. 如果不给你 querySelectorAll 这个api使用，只给你htmldom元素，你怎么做

/**
 * 思路1，获取页面中所有的元素，然后去遍历，统计每个元素出现的次数，最后排序
 */
function getPageDomCount() {
  const map = {};
  const doms = document.querySelectorAll('*');

  for (let i = 0; i < doms.length; i++) {
    const tagName = doms[i].tagName;
    if (!map[tagName]) {
      map[tagName] = 0;
    }
    map[tagName]++;
  }

  console.log('map', map);

  let lastResult = Object.entries(map).sort((a, b) => b[1] - a[1]);
  return lastResult.slice(0, 3);
}

/**
 * 思路2，使用根html标签，深度优先遍历的方式，每一个节点一个节点的统计，直到统计完成所有的个数，最后排序返回
 */
function getPageDomCount1(html) {
  const map = {};

  function getCount(dom) {
    const tagName = dom.tagName;
    if (!map[tagName]) map[tagName] = 0;
    map[tagName]++;

    [...dom.children].forEach((oDom) => {
      getCount(oDom);
    });
  }

  getCount(html);
  console.log('map', map);
  let lastResult = Object.entries(map).sort((a, b) => b[1] - a[1]);
  return lastResult.slice(0, 3);
}

/**
 * 同思路2一样，就是不采用递归，而采用迭代中序优先遍历的方式去写
 */
function getPageDomCount2(html) {
  const map = {};
  const stack = [html];
  while (stack.length) {
    const dom = stack.pop();
    const tagName = dom.tagName;
    if (!map[tagName]) map[tagName] = 0;
    map[tagName]++;

    for (let i = dom.children.length - 1; i >= 0; i--) {
      stack.push(dom.children[i]);
    }
  }

  console.log('map', map);
  let lastResult = Object.entries(map).sort((a, b) => b[1] - a[1]);
  return lastResult.slice(0, 3);
}
