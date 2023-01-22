arr=JSON.parse(localStorage.getItem("products"))
cards=document.querySelector(".cards-men")
arr=arr.filter((elem)=>{
    // console.log(elem)
    return elem.category==="electronics"
    
})
console.log(arr)
cards=document.querySelector(".cards-men")

function display(arr){
    cards.innerHTML=null
    arr.forEach((elem)=>{
        divs=document.createElement("div")

        image=document.createElement("img")
        image.src=elem.image
        image.addEventListener("click",()=>{
            localStorage.setItem("individual",JSON.stringify(elem))
            location.href="individual.html"
        })

        title=document.createElement("h4")
        title.innerText=elem.title

        des=document.createElement("p")
        des.innerText=elem.description

        price=document.createElement("h4")
        price.innerText=`€ ${elem.price}`

        button=document.createElement("button")
        button.innerText="Add To Cart"
        button.addEventListener("click",()=>{
            cartelem(elem)
        })

        divs.append(image,title,des,price,button)
        cards.append(divs)
    })
}

function cartelem(elem){
    // cart=JSON.parse(localStorage.getItem("cart"))||[]
    // cart.push(elem)
    // localStorage.setItem("cart",JSON.stringify(cart))
    fetch("https://easy-nightgown-crab.cyclic.app/addproduct",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            "Authorization" : sessionStorage.getItem("token"),
            "id": sessionStorage.getItem("id")
        },
        body: JSON.stringify(elem)
    }).then((res)=>{
        return res.json()
    }).then((result)=>{
        alert(JSON.stringify(result))
    }).catch((err)=>{
        alert(err)
    })

}



function search(){
bar=document.querySelector(".navbar input").value
// console.log(bar)
farr=arr.filter((elem)=>{
    return elem.title.includes(bar)
})
// console.log(farr)
display(farr)
}

function sort(){
    bar=document.querySelector("#sort").value
    sarr=arr.slice(0)
        if(bar=="low to high"){
            sarr.sort((a,b)=>{ return Number(a.price)-Number(b.price)})
                display(sarr)
        }
        else if(bar=="high to low"){
            sarr.sort((a,b)=>{ return Number(b.price)-Number(a.price)})
                display(sarr)
        }
        else if(bar===""){
            display(arr)
        }
   
    
}

display(arr)