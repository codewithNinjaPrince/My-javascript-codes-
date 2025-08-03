let a=document.querySelector(".container")
let b=a.firstElementChild.nextElementSibling


// tagName is only used for HTML elements
// nodeName is used for all nodes{comment, text, element}

// innerHTML is used to get the HTML content inside an element

// a.innerHTML="<h1>Welcome to the container</h1>"
// b.innerHTML="<h2>Welcome to the second element</h2>"

// outerHTML is used to get the HTML content including the element itself

// a.outerHTML="<div class='container'><h1>Welcome to the container</h1></div>"
// b.outerHTML="<h2>Welcome to the second element</h2>"

// textContent is used to get the text content inside an element
// innerText is similar but it is used to get the text content inside an element.

// a.textContent="Welcome to the container"
// b.textContent="Welcome to the second element"

// hidden is used to hide an element
// a.hidden=true
// b.hidden=true

// Attribute methods are used to get, set, or remove attributes from an element

a.hasAttribute("class") // returns true if the element has the attribute
b.hasAttribute("id") // returns false if the element does not have the attribute    
a.getAttribute("class") // returns the value of the attribute               
b.getAttribute("id") // returns null if no attribute and return the value if it exisits
a.setAttribute("id","Prince ") // sets the name and value of the attribute
b.setAttribute("id","Prince2") // sets the name and value of the attribute

//now you can access the attribute id in the container and second element
a.getAttribute("id") // returns "Prince"
b.getAttribute("id") // returns "Prince2"

b.removeAttribute("id") // removes the attribute from the element

a.attributes // returns a NamedNodeMap of all attributes of the element
b.attributes // returns a NamedNodeMap of all attributes of the element 

a.attributes[0] // returns the first attribute of the element
b.attributes[0] // returns the first attribute of the element
a.attributes[0].name // returns the name of the first attribute of the element
b.attributes[0].value // returns the value of the first attribute of the element

let c=document.createElement("div") // creates a new div element
c.id="Prince" // sets the id of the elemet
c.className="box"  // sets the class of the element
c.innerHTML="Box6" // sets the inner HTML of the element

// a.append(c) // appends the new element at the end and inside of the container
// a.prepend(c) // prepends the new element at the beginning of the container
// a.before(c) // inserts the new element before the container
// a.after(c) // inserts the new element after the container
// a.replaceWith(c) // replaces the container with the new element

a.insertAdjacentElement("beforeend", c) // inserts the new element before the container

setInterval(()=>{
    b.style.color="red"
},1000)

function loadscript( src, callback){
    let script=document.createElement("script")
    script.src=src
    script.onload =  ()=> callback(script)
    document.head.append(script)
}
function greet(name, callback){
    console.log(`my name is ${name}`)
    callback();
}


// CALLBACK IN JAVASCRIPT
// A callback is a function that is passed as an argument to another function and is executed after the completion of that function.
// Callbacks are used to handle asynchronous operations in JavaScript.          

// Dummy function to simulate user login
function loginUser(username, password, callback) {
  // Simulating an async login with setTimeout
  setTimeout(() => {
    if (username === "prince" && password === "123") {
      callback({ id: 1, username: "prince" });
    } else {
      console.log("Invalid credentials");
    }
  }, 1000);
}

// Dummy function to simulate fetching profile
function getProfile(userId, callback) {
  setTimeout(() => {
    if (userId === 1) {
      callback({ id: 1, name: "Prince Dixit", age: 21 });
    } else {
      console.log("User not found");
    }
  }, 1000);
}

// Dummy function to simulate fetching posts
function getPosts(profileName, callback) {
  setTimeout(() => {
    callback([
      { title: "First Post", author: profileName },
      { title: "Second Post", author: profileName }
    ]);
  }, 1000);
}

// Using the functions with nested callbacks
loginUser("prince", "123", function(user) {
  getProfile(user.id, function(profile) {
    getPosts(profile.name, function(posts) {
      console.log(posts);
    });
  });
});

let promise1= new Promise(resolve=>{
    setTimeout(()=>resolve("done"),1000)
})
promise.then(alert)


    



//. PROMISE IN JAVASCRIPT
// A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A promise is a way to handle asynchronous operations in JavaScript.

// console.log("Promise Example");
// let promise= new Promise((resolve,reject)=>{
//     setTimeout(()=>
//     console.log("Yes i am done"), 2000)
//     resolve("promise resolved")
// })

// promise.then((a)=>console.log(a)).catch((err)=>console.log(err))


const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Success!");
  } else {
    reject("Error!");
  }
});
myPromise.then((a)=>console.log(a)).catch((err)=>console.log(err))

let promise= new Promise(resolve=>{
    setTimeout(()=>resolve("done"),1000)
})
promise.then(alert)

