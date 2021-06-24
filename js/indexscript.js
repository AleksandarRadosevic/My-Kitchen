$(document).ready(function(){
    let users=[{
        username:"jacikot",
        password:"jacikot123"
    }];
    


    if(localStorage.getItem("users")==null){
        localStorage.setItem("users",JSON.stringify(users));
    }
    else users=JSON.parse(localStorage.getItem("users"));
    if(localStorage.getItem("current")!=""){
        let username=JSON.parse(localStorage.getItem("current")).username;
        $(".navbar-nav>li:nth-child(2)").after(
            "<li class='nav-item dropdown'>"+
            "<a class='nav-link dropdown-toggle' href='#' id='dropdown-a' data-toggle='dropdown'>Moj nalog</a>"+
            "<div class='dropdown-menu' aria-labelledby='dropdown-a'>"+
            "<a class='dropdown-item' href='myRecipes.html'>Moji recepti</a>"+
            "<a class='dropdown-item' href='commentsMarks.html'>Komentari i ocene</a>"+
            "<a class='dropdown-item' href='#' id='logout'>Odjavi se</a></div></li>"
            );      
        $(".navbar-nav>li:nth-child(1)").after("<li class='nav-item'><a class='nav-link' href='addRecipe.html'>Dodaj recept</a></li>");
        $(".reglog").hide();
        $(".welcome").html(username.toUpperCase()+",<br>Dobrodošli na<br> Taste the World!");
    } 
    else  {
        $(".reglog").show();
        $(".welcome").html("Dobrodošli na<br> Taste the World!");
    }


    $("#login").click(function(){
        $("#perror").text("");
        $("#uerror").text("");
        let username=$("#username").val();
        let password=$("#password").val();
        let end=false;
        if(username==""){
            $("#uerror").text("Niste uneli korisnicko ime");
            end=true;

        }
        if(password==""){
            $("#perror").text("Niste uneli lozinku");
            end=true;
        }
        if(end)return;
        let user=users.find(user=>user.username==username);
        if(user==null)$("#uerror").text("Korisnik sa datim korisnickim imenom ne postoji");
        else {
            if(user.password!=password) $("#perror").text("Korisnicka lozinka nije ispravna");
            else{
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

   
});
