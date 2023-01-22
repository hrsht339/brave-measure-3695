form2 = document.querySelector(".khata-hai>form")
let token = ""



form2.addEventListener("submit", (event) => {
    event.preventDefault()
    let obj = {
        email: form2.email.value,
        pass: form2.pass.value
    }

    fetch("https://easy-nightgown-crab.cyclic.app/adminlogin", {
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
        location.href="./adminadd.html"

    }).catch((err)=>{
        console.log(err)
    })
})


