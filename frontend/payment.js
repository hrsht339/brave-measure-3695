
total=document.querySelector(".nav4>h2")
function addup(){
    arr=JSON.parse(localStorage.getItem("cart"))
    // sum=arr.reduce((acc,curr)=>{
    //     return acc=acc+Number(curr.price)
    // },0)
    total.innerText=`Total price - € ${arr}`
    // return sum
}
addup()


function alerto(){
    alert("Your Order Has Been Placed")
    localStorage.setItem("placed",JSON.stringify(arr))
}