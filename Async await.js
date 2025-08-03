function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    })
}

console.log("loading modules")
console.log("do something else")
console.log("load data")

// let data= getData()

// console.log(data)
// console.log("process data")


// data.then((x)=>{
//     console.log(x)
//     console.log("process data")
//     console.log("task2")
// })


async function main() {
    console.log("hey i am working ")
    let data = await getData();// wait for the promise to resolve
    console.log(data); // this will not work unitl the promise is resolved and then prints the value of data 
    console.log("working on it ")
}

main()

async function fetchData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
