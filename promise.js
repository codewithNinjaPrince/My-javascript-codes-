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