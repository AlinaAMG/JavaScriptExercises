
// 4)

const btnLogin = document.querySelector(".login");
const nameInput = document.querySelector(".input-name");
const passWInput = document.querySelector(".input-passw");

btnLogin.addEventListener("submit", function () {
    const nameValue = nameInput.value.trim();
    const passValue = passWInput.value.trim();
   
    if (nameValue === "" || passValue === "") {
         alert("Please fill in with correct data!")
    } else if (passValue.length < 6) {
        alert("Password must to have at least 6 characters")
    } else  {
        alert("Your data was send.Thank you!");
        nameInput.value = "";
        passWInput.value = "";
    
    }

})

