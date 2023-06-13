window.onload = function(){
    popup()
}

function popup(){
    var urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("e");

    if(myParam=="permission"){
        alert("You don't have permission to acess that page");
    }
    else if(myParam=="create"){
        alert("Account Created sucessfuly")
    }
}