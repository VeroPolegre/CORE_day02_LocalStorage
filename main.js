const submit = document.getElementById("submit");

const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const text = document.getElementById("text");

submit.addEventListener("click", sendUsersInfo);
/*
function sendUserInfo(e) {
  e.preventDefault();
  const user = {
    firstName: firstName.value,
    email: email.value,
    message: message.value,
  };
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));

  const savedUser = JSON.parse(localStorage.getItem("user"));
  console.log(savedUser);

  text.innerHTML = `nombre: ${user.name}, email: ${user.email}, mensaje: ${user.message}`;
}

submit.addEventListener("click", sendUserInfo);
*/
//extra
let users = JSON.parse(localStorage.getItem("users")) || [];

function sendUsersInfo(e) {
  e.preventDefault();
  text.innerHTML = "";
  const userForm = {
    firstName: firstName.value,
    email: email.value,
    message: message.value,
  };
  users.push(userForm);
  localStorage.setItem("users", JSON.stringify(users));
  const savedUsers = JSON.parse(localStorage.getItem("users"));

  for (let i = 0; i < savedUsers.length; i++) {
    //dont forget your index!!!
    text.innerHTML += `nombre: ${savedUsers[i].firstName},<br> email: ${savedUsers[i].email},<br> mensaje: ${savedUsers[i].message}<br><br>`;

    console.log(savedUsers);
  }
}
let userSaved = JSON.parse(localStorage.getItem("userForm"));
submit.addEventListener("click", sendUsersInfo);

// localStorage.clear() always clear and remove to test!!!
/* Another way to iterate the values
  for (let i = 0; i < savedUsers.length; i++) {
         const list = `<ul>
                  <li>${savedUsers[i].firstName}</li>
                  <li>${savedUsers[i].email}</li>
                  <li> ${savedUsers[i].message}</li>
                  </ul>
   text.innerHTLM += list

  console.log(savedUsers);
   }
}*/
