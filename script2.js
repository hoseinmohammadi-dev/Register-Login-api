 const API = 'https://68c3f89d81ff90c8e61ac7b0.mockapi.io/Users'

    const LogBtn = document.querySelector('.LogBtn')
    const LoginBox = document.querySelector('.Login')
    const ProfileBox = document.querySelector('.Profile')
    const editBox = document.querySelector('.edit-box')
    const regChange = document.querySelector(".edit-box > button")

    let CurrentUser = null

    async function getAllUsers() {
        const res = await fetch(API)
        if (!res.ok) throw new Error("Error receiving users ❌")
        return res.json()
    }


    LogBtn.addEventListener('click', async () => {

        const email = document.querySelector('.email').value.trim().toLowerCase()
        const pass = document.querySelector('.password').value

        if (email == '' || pass == '') {
            alert('fill your email and password')
            return
        }
        try {
            const users = await getAllUsers()

            const user = users.find(
                u => (u.Email || '').toLowerCase() === email && (u.Password || '') === pass
            );

            if (user) {
                CurrentUser = user

                alert('Login successful ✅')

                LoginBox.style.display = 'none'
                ProfileBox.style.display = 'flex'
                editBox.style.display = 'none'
                ShowData(user)

            } else {
                alert('wrong !!!!')
            }

        } catch (err) {
            console.error(err);

        }
    })

    function ShowData(user) {
        document.getElementById('FullName').textContent = 'FullName :' + user.FullName
        document.getElementById('Email').textContent = 'Email :' + user.Email
        document.getElementById('Password').textContent = 'Password :' + user.Password
        document.getElementById('Age').textContent = 'Age :' + user.Age
    }


    function myEdit() {
        editBox.style.display = 'block'
        document.querySelector('.edit-box input[type="text"]').value = CurrentUser.FullName
        document.querySelector('.edit-box input[type="email"]').value = CurrentUser.Email
        document.querySelector('.edit-box input[type="password"]').value = CurrentUser.Password
        document.querySelector('.edit-box input[type="number"]').value = CurrentUser.Age
    }

    regChange.addEventListener('click', async () => {
        const newFullName = document.querySelector('.edit-box input[type="text"]').value;
        const newEmail = document.querySelector('.edit-box input[type="email"]').value;
        const newPassword = document.querySelector('.edit-box input[type="password"]').value;
        const newAge = document.querySelector('.edit-box input[type="number"]').value;

        try {
            const res = await fetch(`${API}/${CurrentUser.id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    FullName: newFullName,
                    Email: newEmail,
                    Password: newPassword,
                    Age: newAge
                })
            });
            if (!res.ok) throw new Error("Error updating user");
            const updatedUser = await res.json();

            CurrentUser = updatedUser;
            ShowData(updatedUser);

            editBox.style.display = 'none';

            alert('User updated!✅');
        } catch (err) {
            console.error(err);
            alert('Failed to update user!❌');
        }
    })

    // Exit
    function myExit() {
        CurrentUser = null
        LoginBox.style.display = 'flex'
        ProfileBox.style.display = 'none'
        document.querySelector('.email').value = null;
        document.querySelector('.password').value = null
    }
    // Exit

    // mydel
    async function myDel() {
        if (!confirm("Do you want to clear your account")) return;

        try {
            await fetch(`${API}/${CurrentUser.id}`, { method: "DELETE" });
            alert("delete user❌");
            myExit();

        } catch (err) {
            console.error(err);
            alert("wrong❌");
        }
    }
    // mydel
