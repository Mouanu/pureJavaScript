
const arr1 = ["freer","bkvnnkdf","bgjk"]

const arr2 = [ "vfkdbvf","fberkbvkdvfvnj",["fujh","ghjul",["bfhbe","hvk"]]]

// arr1.push(arr2) // push a original array k change kore day

// console.log(arr1) // [ 'freer', 'bkvnnkdf', 'bgjk', [ 'vfkdbvf', 'fberkbvkdvfvnj' ] ]

// const t = arr1.concat(arr2) // original arr1 change hoy na , returns a new array
// limitation of concat
        // [   ekhane sudhu 2 jon k add kora jay]

// console.log(t) [ 'freer', 'bkvnnkdf', 'bgjk', 'vfkdbvf', 'fberkbvkdvfvnj' ]


// ****************************
// spread operator

// Advantage of spread operator --> multiple jinis k add kora jay [...arr1, ...arr2, ...arr3,...arr4] like this
const arr3 = [...arr1, ...arr2]

//console.log(arr3) ///[ 'freer', 'bkvnnkdf', 'bgjk', 'vfkdbvf', 'fberkbvkdvfvnj' ]

const arr4 = [1,2,3,4,[2,3,4],9,[1,2,[4,5,8]]]

//const usable = arr4.flat(Infinity) // it will flat the array

// console.log(usable)


//console.log(Array.isArray("feiufnikew")) // false , no it is  not an array

// Array.from will create an array from the given one
//console.log(Array.from("feiufnikew"))  // [
//   'f', 'e', 'i', 'u',
//   'f', 'n', 'i', 'k',
//   'e', 'w'
// ]


// INTERING
//console.log(Array.from({name:"Mouli"})) // [], return empty array bcz it can't directly change the thing


let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]


// exercise on the above



// function mergeArray(arr1,arr2,arr3,arr4){
//     // flat each array
//  const arr = [...arr1.flat(Infinity),...arr2.flat(Infinity),...arr3.flat(Infinity),...arr4.flat(Infinity)]
//  console.log(arr)
// }

// mergeArray(arr1,arr2,arr3,arr4)


//  [[1, 2], [3, [4, 5]], 6]


const p = [...[1,2],...[3,[4,5]],...[6]]

//console.log(p.flat(Infinity))

const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

const arr = Array.from(arrayLike);
console.log(arr); // ["a", "b", "c"]





/*


Great question, Anushila — this one confuses a lot of people at first, but I’ll break it down **super clearly** with examples.

---

## 💡 What is an "Array-like object"?

An **array-like object** is an object that:

1. ✅ Has a **`length` property** that’s a non-negative integer.
2. ✅ Has **numerical keys (like `"0"`, `"1"`, `"2"`, etc.)** representing indexed elements.
3. ❌ But it’s **not actually an array** — it doesn’t inherit from `Array.prototype`.

---

### ✅ Example of an array-like object:

```js
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};
```

You can convert it to a real array:

```js
const arr = Array.from(arrayLike);
console.log(arr); // ["a", "b", "c"]
```

---

## 🔄 Real-life array-like objects

| Object                                              | Why it’s array-like             |
| --------------------------------------------------- | ------------------------------- |
| `arguments` object inside a function                | Has `.length` and indexed items |
| `NodeList` from `document.querySelectorAll()`       | Looks like an array, but isn’t  |
| Custom objects like `{ 0: "x", 1: "y", length: 2 }` | Structured like an array        |

---

### ❌ Not array-like

This won’t work:

```js
Array.from({ name: "Mouli" }) // → []
```

Because:

* No `.length` property
* No indexed values
* Not iterable either

---

### 🗣 Interview way to explain it:

> “An array-like object is any object with a `length` property and numeric keys like `0`, `1`, `2`, etc.
> It’s not a real array, but I can convert it to one using `Array.from()` or `Array.prototype.slice.call()`.”

---

Would you like to try turning this into your own words once?
Or shall we go ahead with the **final question (#7)** now? 😄


*/