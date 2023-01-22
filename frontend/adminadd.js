arr=JSON.parse(localStorage.getItem("products"))
// onlyadmin=[]

dusra=document.querySelector(".dusra")
form=document.querySelector(".pehla>form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    obj={
        id: Math.floor(Math.random() * 50) + 50,
        title:form.name.value,
        price:form.price.value,
        description:form.des.value,
        category:form.type.value,
        image:form.image.value,
        
    }
    // console.log(obj)
    arr.push(obj)
    localStorage.setItem("products",JSON.stringify(arr))
    alert("product has been added")
    // display(arr)
})


// function display(arr){
//     for(let i=20;i<arr.length;i++){
//         divs=document.createElement("div")
//         diva=document.createElement("div")
//         i=document.createElement("img")
//         i.src=arr[i].image

//         n=document.createElement("h3")
//         n.innerText=arr[i].title

//         p=document.createElement("p")
//         p.innerText=arr[i].price

//         diva.append(n,p)
//         divs.append(i,diva)
//         dusra.append(divs)
//     }
// }




