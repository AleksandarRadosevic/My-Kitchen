
$(document).ready(function(){
    let recipes=JSON.parse(localStorage.getItem("recipes"));
    for (let i=0;i<recipes.length;i++){
        let picture;
        if (recipes[i].images==""){
            picture="images/noImage5.png";
        }
        else {
            picture=recipes[i].images[0];
        }
    $("#pictures").append($("<div class='col-lg-4 col-md-6 special-grid "+recipes[i].type+"'><div class='gallery-single fix'><img src='"+picture+"' class=img-fluid' alt='Image'><div class='why-text'><h4>"+recipes[i].name+"</h4><p>Vreme pripreme recepta</p><h5>"+recipes[i].hour+":"+recipes[i].minute+"</h5></div></div></div>"));
    }
})