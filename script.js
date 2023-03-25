
function register(){
    let emailInput = document.getElementById('emailInput');
    let passwordInput = document.getElementById('passwordInput');
    let fullnameInput = document.getElementById('fullnameInput');
    let countryInput = document.getElementById('countryInput');
    let birthInput = document.getElementById('birthInput')

    let newUser = {
        "email": emailInput.value,
        "password": passwordInput.value,
        "fullname": fullnameInput.value,
        "country": countryInput.value,
        "birthdate": birthInput.value
    };
    let users = [];
    if(localStorage.getItem('user')){
        users = JSON.parse(localStorage.getItem('user'))

    }else{
        users = []
    }
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users));

}


function loadUsers(){
    let user = localStorage.getItem('user');
    if(user!=null){
        user = JSON.parse(user);
    }else{
        user = [];
    }

    return user;
}
