form1 = document.querySelector(".khata-banao>form")
form2 = document.querySelector(".khata-hai>form")

form1.addEventListener("submit", (event) => {
    event.preventDefault()
    let obj = {
        name: form1.fname.value,
        email: form1.email.value,
        pass: form1.pass.value
    }

    fetch("http://localhost:4500/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    }).then((result)=>{
        return result.json()
    }).then((res)=>{
        alert("user has been registered")
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
})

let token = ""

form2.addEventListener("submit", (event) => {
    event.preventDefault()
    let obj = {
        email: form2.email.value,
        pass: form2.pass.value
    }

    fetch("http://localhost:4500/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    }).then((result)=>{
        return result.json()
    }).then((res)=>{
        token = res.token
        sessionStorage.setItem("token",token)
        console.log(token)
        console.log(res)
        alert("user has been logged in")
        
    }).catch((err)=>{
        console.log(err)
    })
})

function cart(){
   let token = sessionStorage.getItem("token")
    if(token){
        location.href="./cart.html"
    }
    console.log(token)
}