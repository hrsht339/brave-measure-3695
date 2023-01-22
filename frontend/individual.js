arr=JSON.parse(localStorage.getItem("individual"))

cards=document.querySelector(".cards-indi")

function display(arr){
    divs=document.createElement("div")

        image=document.createElement("img")
        image.src=arr.image
        // image.addEventListener("click",()=>{
        //     localStorage.setItem("individual",JSON.stringify(elem))
        //     location.href="individual.html"
        // })
        diva=document.createElement("div")

        title=document.createElement("h4")
        title.innerText=arr.title

        des=document.createElement("p")
        des.innerText=arr.description

        price=document.createElement("h4")
        price.innerText=`€ ${arr.price}`

        button=document.createElement("button")
        button.innerText="Add To Cart"
        button.addEventListener("click",()=>{
            cartelem(arr)
        })
        diva.append(title,des,price,button)
        divs.append(image,diva)
        cards.append(divs)
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
display(arr)