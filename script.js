// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...args) => args.filter(arg => arg % 2 === 0)


const findMin = ( ...nums) => nums.reduce((num, next) => num < next ? num : next)

const numbers = [0, 9, 23, 58, 199, 5, -2, -35, 5, 14 ,32]

console.log(findMin(...numbers));


const colors = {
    favorite: 'red',
    leastFavorite: 'purple',
    secondFavortie: 'green'
}

const colorsAgain = {
    leastFavorite: 'orange',
    secondLeastFavorite: 'purple'
}


function mergeObjects(a,b){
    return { ...a, ...b}
}

console.log(mergeObjects(colors, colorsAgain))


const doubleAndReturnArgs = (arr, ...nums) =>{
    const newArr = nums.map(num => num * 2)
    return [...arr, ...newArr]
}


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let rand = Math.floor(Math.random() * (items.length + 1));
    items.splice(rand, 1);
    return items;
}

/** Return a new array with every item in array1 and array2. */

const extendArray = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;

}


/** Combine two objects and return a new object. */

function combine(a,b){
    return { ...a, ...b};
}


/** Return a new object with a modified key and value. */

const combined = {
    dog: "fido",
    cat: "tom",
    mouse: "jerry"
}

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}