$(document).ready(function(){
    function findAvg(recipe){
        let sum=0;
        let cnt=0;
        for(let i=0;i<recipe.comments.length;i++){
            if(recipe.comments[i].mark!="/"){
                sum+=parseInt(recipe.comments[i].mark);
                cnt++;
            }
        }
        if(cnt==0)return 0;
        return sum/cnt;
    }
    let users=[{
        username:"jacikot",
        password:"jacikot123",
        name:"Jana Toljaga",
        recipes:[]
    }];
    let recipes=[];
    
    if(localStorage.getItem("recipes")==null){
        localStorage.setItem("recipes",JSON.stringify(recipes));
    }
    else recipes=JSON.parse(localStorage.getItem("recipes"));
    recipes.sort((r1,r2)=>findAvg(r2)-findAvg(r1));

    if(localStorage.getItem("users")==null){
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("current","");
    }
    else users=JSON.parse(localStorage.getItem("users"));
    if(localStorage.getItem("current")!=""){
        let name=JSON.parse(localStorage.getItem("current")).name;
        $(".navbar-nav>li:nth-child(2)").after(
            "<li class='nav-item dropdown'>"+
            "<a class='nav-link dropdown-toggle' href='#' id='acc' data-toggle='dropdown'>Moj nalog</a>"+
            "<div class='dropdown-menu' aria-labelledby='acc'>"+
            "<a class='dropdown-item' href='myRecipes.html' id='myrec'>Moji recepti</a>"+
            "<a class='dropdown-item' href='commentsMarks.html' id='comm'>Komentari i ocene</a>"+
            "<a class='dropdown-item' href='#' id='logout'>Odjavi se</a></div></li>"
            );      
        $(".navbar-nav>li:nth-child(1)").after("<li class='nav-item'><a id='addR' class='nav-link' href='addRecipe.html' >Dodaj recept</a></li>");
        $(".reglog").hide();
        $(".welcome").html(name+",<div id='welcome'></div>");
    } 
    else  {
        $(".reglog").show();
        $(".welcome").html("<div id='welcome'></div>");
    }

    $("#login").click(function(){
        $("#perror").text("");
        $("#uerror").text("");
        let username=$("#username").val();
        let pass=$("#password").val();
        let end=false;
        if(username==""){
            $("#uerror").text("Niste uneli korisnicko ime");
            end=true;

        }
        if(pass==""){
            $("#perror").text("Niste uneli lozinku");
            end=true;
        }
        if(end)return;
        let user=users.find(user=>user.username==username);
        if(user==null)$("#uerror").text("Korisnik sa datim korisnickim imenom ne postoji");
        else {
            if(user.password!=pass) $("#perror").text("Korisnicka lozinka nije ispravna");
            else{
                localStorage.setItem("current",JSON.stringify(user));
                window.location.href="index.html";

            }
        }

    });


    $("#register").click(function(){
        $("#perrorReg").text("");
        $("#uerrorReg").text("");
        $("#nerrorReg").text("");
        $("#cperrorReg").text("");
        let usrname=$("#usernameReg").val();
        let pass=$("#passwordReg").val();
        let ns=$("#nameReg").val();
        let confirm=$("#cpasswordReg").val();
        let end=false;
        if(usrname==""){
            $("#uerrorReg").text("Niste uneli korisnicko ime");
            end=true;

        }
        if(pass==""){
            $("#perrorReg").text("Niste uneli lozinku");
            end=true;
        }

        if(ns==""){
            $("#nerrorReg").text("Niste uneli ime i prezime");
            end=true;
        }
        if(confirm==""){
            $("#cperrorReg").text("Niste uneli potvrdu lozinke");
            end=true;
        }
        if(end)return;
        if(usrname.length<6){
            $("#uerrorReg").text("Korisnicko ime mora biti duze od 6 karaktera");
            return;
        }
        if(pass.length<6){
            $("#perrorReg").text("Lozinka mora biti duza od 6 karaktera");
            return;
        }
        let user=users.find(user=>user.username==usrname);
        if(user!=null)$("#uerrorReg").text("Korisnik sa datim korisnickim imenom vec postoji");
        else {
            if(pass!=confirm){
                $("#cperrorReg").text("Sifre se ne poklapaju");
                
            }
            else{
                let user={
                    username:usrname,
                    password:pass,
                    name:ns,
                    recipes:[]
                };
                users.push(user);
                localStorage.setItem("users",JSON.stringify(users));
                localStorage.setItem("current",JSON.stringify(user));
                window.location.href="index.html";
            }
        }

    });



    $("#logout").on("click",function(){

        users="";
        localStorage.setItem("current","");
        window.location.href="index.html";
    });
   
    if(recipes.length>=3){
        $("#best").append($("<div class='col-sm-12 col-md-4 col-lg-4'></div>").append($("<a class='lightbox'></a>").click(function(){
                    localStorage.setItem("currentRecipe",JSON.stringify(recipes[0]));
                    window.location.href="blog-details.html";
                }).append("<img class='img-fluid img_index'  src='"+recipes[0].images[0]+"' alt='Gallery Images'>")).append("<h1 class='text-center'>"+recipes[0].name+"</h1>"))
                .append($("<div class='col-sm-6 col-md-4 col-lg-4'></div>").append($("<a class='lightbox'></a>").click(function(){
                    localStorage.setItem("currentRecipe",JSON.stringify(recipes[1]));
                    window.location.href="blog-details.html";
                }).append("<img class='img-fluid img_index' src='"+recipes[1].images[0]+"' alt='Gallery Images'>")).append("<h1 class='text-center'>"+recipes[1].name+"</h1>"))
                .append($("<div class='col-sm-6 col-md-4 col-lg-4'></div>").append($("<a class='lightbox'></a>").click(function(){
                    localStorage.setItem("currentRecipe",JSON.stringify(recipes[2]));
                    window.location.href="blog-details.html";
                }).append("<img class='img-fluid img_index' height='500px' src='"+recipes[2].images[0]+"' alt='Gallery Images'>")).append("<h1 class='text-center'>"+recipes[2].name+"</h1>"));
    }
    

   
});
