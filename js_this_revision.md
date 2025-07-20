# JavaScript `this` – Quick Revision

## ✅ Why can’t we just use `username` inside the object method?
- Because `username` is a **property**, not a variable.
- It’s not in the **function’s lexical scope**.
- Using just `username` gives: ❌ `ReferenceError: username is not defined`

---

## ✅ Why do we use `this.username`?
- `this` refers to the **object** that is calling the function.
- So `this.username` accesses the correct value dynamically.
- Works even if method is reused in another object.

---

## 🧠 Example:

```js
const user = {
  username: "Mou",
  welcomeMessage: function() {
    console.log(`${this.username}, Welcome to the website`);
  }
};

user.welcomeMessage(); // ✅ "Mou, Welcome to the website"
```

---

## ⚠️ If you wrote:
```js
console.log(`${username}, Welcome`);
```
➡️ JS would look for a variable called `username`, not a property → ❌ Error