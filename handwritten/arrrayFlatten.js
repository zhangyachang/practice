const flat = (arr) => {
  return arr.reduce((prev, arr) => {
    return prev.concat(Array.isArray(arr) ? flat(arr) : arr);
  }, []);
};

const arr = [1, [2, [3, [4], [5, 6]], [7]], 8];

console.log(flat(arr));
