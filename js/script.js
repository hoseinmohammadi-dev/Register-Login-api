const API = "https://68c3f89d81ff90c8e61ac7b0.mockapi.io/Users"

const inp = document.querySelectorAll('.box>input')
const regBtn = document.getElementById('regBtn')


regBtn.addEventListener('click', async () => {
    ///////////// check inp value//////////////
    let flag = 0
    inp.forEach((val) => val.value == "" && flag++)
    if (flag > 0) {
        alert('fill your all information')
        return
    }

    const data = {
        FullName: inp[0].value,
        Email: inp[1].value,
        Password: inp[2].value,
        Age: inp[3].value,
        role: document.querySelector('.box>select').value
    }

    if (
        !data.Email.includes("@gmail.com") ||
        data.Email.indexOf("@") < 3
    ) {
        alert("invalid email ❌");
        return;
    }

    // check duplicate email before POST
    try {
        const listRes = await fetch(API)
        if (!listRes.ok) throw new Error('failed to fetch users')
        const users = await listRes.json()
        const exists = users.some(u => u.Email && u.Email.toLowerCase() === data.Email.toLowerCase())
        if (exists) {
            alert("this email has already been recorded ❌")
            return
        }
    } catch (err) {
        console.error(err)
        alert('error email❌')
        return
    }

    alert('successfull✅')

    try {
        const res = await fetch(API, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (!res.ok) throw new Error('failed to save❌')
        await res.json()
        alert("you added to data base✅")
    } catch (error) {
        console.error(error)
        alert("try again")
    }
})