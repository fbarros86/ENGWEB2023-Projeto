var normal
$(function(){
    var tipo=$('.w3-middle').attr('id');
    if(tipo=="N") normal=true
    else normal=false
    check()
    
})

function selectnormveg(element){
    if (element.classList.contains('normal-btn')) {
        normal = true;
    } else {
        normal = false;
    }
    check()
}

function check(){
    if(normal == true){
        $(".normal-btn").addClass("selected-normveg")
        $(".vegan").hide()
        $(".normal").show()
        $(".vegetariano-btn").removeClass("selected-normveg")

    }
    else{
        $(".vegetariano-btn").addClass("selected-normveg")
        $(".normal").hide()
        $(".vegan").show()
        $(".normal-btn").removeClass("selected-normveg")
    }
   
}

