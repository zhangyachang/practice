const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: null } };

const objectFlat = (source, preKey = '') => {
  let result = {};
  for (let key in source) {
    const value = source[key];
    const isObj = typeof value === 'object' && value !== null;
    const newKey = preKey ? `${preKey}.${key}` : key;

    if (isObj) {
      result = { ...result, ...objectFlat(value, newKey) };
    } else {
      result = { ...result, [newKey]: value };
    }
  }

  return result;
};

// const objectFlat = (obj, preKey = '') => {
// 	return Object.keys(obj).reduce((result, key) => {
// 		const value = obj[key];
// 		const isObj = typeof value === 'object';
// 		const newKey = preKey ? `${preKey}.${key}` : key;

// 		return isObj ? {...result, ...objectFlat(value, newKey)} : {...result, [newKey]: value};
// 	}, {});

// }

console.log(objectFlat(source));
