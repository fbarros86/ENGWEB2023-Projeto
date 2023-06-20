var normal
$(function(){
    console.log("ENTROU")

    normal=true
    check()
    
})

function select(){
   
}

function check(){
    if(normal == true){
        $(".normal-btn").add(".selected-normveg")
    }
    else{
        $(".vegetariano-btn").add(".selected-normveg")
    }
   
}

