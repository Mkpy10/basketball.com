function LogIn(){
    Username =  document.getElementById("UserName").value;
 
    localStorage.setItem("Username", Username);
 
    window.location = "indez2.html";
 }