window.onload = function(){
    popup();
}

function popup(){
    var urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("info");

    if(myParam=="permission"){
        alert("You don't have permission to acess that page");
    }
    else if(myParam=="create"){
        alert("Account Created sucessfuly")
    }
    else if(myParam=="logout"){
        alert("Logged out sucessfuly")
    }
    else if(myParam=="notuser"){
        alert("The user must not be an Admin")
    }
    else if(myParam=="notadmin"){
        alert("The user must be an Admin")
    }
    else if(myParam=="session"){
        alert("The session ended, please Login again")
    }
    else if(myParam=="wrong"){
        alert("The username or password you introduced was incorrect. Please try again.")
    }
}