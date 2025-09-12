# Register & Login Page (Group Project)

This project is a simple Register/Login system built with HTML, CSS, and JavaScript, connected to a [MockAPI](https://mockapi.io/) backend for user data storage.  
It allows users to register, login, view their profile, and manage account actions such as edit or delete.

<img width="572" height="645" alt="Image" src="https://github.com/user-attachments/assets/71ae8bf9-b040-4332-a79f-f2d6482b9ba1" />
<img width="638" height="458" alt="Image" src="https://github.com/user-attachments/assets/444d8db6-ea61-4319-9598-9a355cb93887" />
---

## 🚀 Features
- Register a new user with unique email (no duplicates allowed).
- Validate email format (@gmail.com, @gmail.co, @gmail.ir) with at least 3 characters before @.
- Login with email and password.
- Display profile details after login.
- Logout and delete account functionality.

---

## 🛠 Methods & Functions Used
This project demonstrates use of several modern JavaScript features:

- `async / await` → Handling asynchronous API requests.  
- `Promise` → Fetch API returns promises for server communication.  
- `fetch()` → Used for GET, POST, and DELETE requests to MockAPI.  
- `Array.prototype.some()` → Checks if an email already exists before registering.  
- `Array.prototype.find()` → Finds a specific user object during login.  
- `String.prototype.includes()` → Validates if email contains specific characters (e.g., @, .com, .ir).  
- `String.prototype.trim()` → Removes extra spaces in user inputs.  
- `String.prototype.toLowerCase()` → Makes email comparison case-insensitive.  
- `String.prototype.indexOf()` → Ensures minimum 3 characters before @ in email.  
- `alert()` → Basic UI feedback for success/error messages.  
- `confirm()` → Used before account deletion for confirmation.  

---

## 🔗 Demo & Repository
- Live Demo: [click to whatch demo](https://hoseinmohammadi-dev.github.io/Register-Login-api/)
  

---
