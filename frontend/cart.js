
let arr
fetch("https://easy-nightgown-crab.cyclic.app/cart",{
    method:"POST",
    headers:{
        'Content-Type': 'application/json',
        "Authorization" : sessionStorage.getItem("token"),
        "id": sessionStorage.getItem("id")
    }
}).then((result)=>{
    return result.json()
}).then((res)=>{
    arr = res.products
    display(arr)
    console.log(arr)
}).catch((err)=>{
    console.log(err)
})



// arr=JSON.parse(localStorage.getItem("cart"))

cards=document.querySelector(".cards-men")
total=document.querySelector(".nav4>h2")

function display(arr){
    cards.innerHTML=null
    arr.forEach((elem,i)=>{
        divs=document.createElement("div")

        image=document.createElement("img")
        image.src=elem.image

        title=document.createElement("h4")
        title.innerText=elem.title

        des=document.createElement("p")
        des.innerText=elem.description

        price=document.createElement("h4")
        price.innerText=`€ ${elem.price}`

        button=document.createElement("button")
        button.innerText="Remove"
        button.addEventListener("click",()=>{
            remove(i,elem)
        })

        divs.append(image,title,des,price,button)
        cards.append(divs)
    })
    addup(arr)
}


function addup(arr){
    
    sum=arr.reduce((acc,curr)=>{
        return acc=acc+Number(curr.price)
    },0)
    total.innerText=`Total price - € ${sum}`
    localStorage.setItem("cart",sum)
}
function remove(i,elem){
    arr.splice(i,1)
    localStorage.setItem("cart",JSON.stringify(arr))
    addup(arr)
    display(arr)

console.log(elem.title)

    fetch("https://easy-nightgown-crab.cyclic.app/deleteproduct",{
        method:"DELETE",
        headers:{
            'Content-Type': 'application/json',
            "Authorization" : sessionStorage.getItem("token"),
            "id": sessionStorage.getItem("id"),
            "productid": elem.id
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

// display(arr)
let loggeruser = document.querySelector(".pehlakebaad>h4")
let mail = sessionStorage.getItem("email")
console.log(loggeruser,mail)
loggeruser.innerText=mail