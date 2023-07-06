//ES2015 function
const filterOutOdds = (...arguments) => arguments.filter(v => v % 2 === 0);

//find min
const findMin = (...arguments) => Math.min(...arguments);

//merge objects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//double and return args
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)];

//slice and dice
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }

  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }

  const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  }

  const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  }

  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }

  const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  }