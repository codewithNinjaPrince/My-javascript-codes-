async function fetchData(){
    try{
        let result= await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data=await result.json();
        console.log(data);
    }catch(error){
        console.log("Error:",error)
        console.log("Error:",error.name)
        console.log("Error:",error.message)
        console.log("Error:",error.stack)
    }
}
fetchData();
// let sum=6

function main(){
    let x=10;
    try{
        console.log("the sum is",sum*x)
        return true;
    }
    catch(error){
        console.log("Error:",error)
        return false
    }
    finally{
        console.log("This will always execute, regardless of success or failure.")
    }
}
main()