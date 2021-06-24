$(document).ready(function(){
    if(localStorage.getItem("current")==""){
        $("#btnabout").attr("href","index.html").text("Registrujte se danas");
    }
    else{
        $("#btnabout").attr("href","addRecipe.html").text("Dodajte svoj recept");
    }
});