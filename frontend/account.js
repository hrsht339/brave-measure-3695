form1 = document.querySelector(".khata-banao>form")
form2 = document.querySelector(".khata-hai>form")


let loggeruser = document.querySelector(".pehlakebaad>h4")
let mail = sessionStorage.getItem("email")
console.log(loggeruser,mail)
loggeruser.innerText=mail


form1.addEventListener("submit", (event) => {
    event.preventDefault()
    let obj = {
        name: form1.fname.value,
        email: form1.email.value,
        pass: form1.pass.value
    }

    fetch("https://easy-nightgown-crab.cyclic.app/register", {
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

    fetch("https://easy-nightgown-crab.cyclic.app/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    }).then((result)=>{
        return result.json()
    }).then((res)=>{
        token = res.token
        id = res.id
        email = res.email
        sessionStorage.setItem("token",token)
        sessionStorage.setItem("id",id)
        sessionStorage.setItem("email",email)
        console.log(token)
        console.log(res)
        alert(JSON.stringify(res))
        
    }).catch((err)=>{
        console.log(err)
    })
})

function cart(){
   let token = sessionStorage.getItem("token")
    if(token){
        location.href="./cart.html"
    }
    else{
        alert("login first")
    }
    console.log(token)
}

