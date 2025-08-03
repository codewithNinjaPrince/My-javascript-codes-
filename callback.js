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

let promise= new Promise(resolve=>{
    setTimeout(()=>resolve("done"),1000)
})
promise.then(alert)
