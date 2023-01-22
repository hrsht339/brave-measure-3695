arr=[]
fetch("https://fakestoreapi.com/products").then((result)=>{
    return result.json()
}).then((res)=>{
    arr=res
    localStorage.setItem("products",JSON.stringify(arr))
}).catch((error)=>{console.log(error)})