$(document).ready(function(){
    let users=[{
        username:"jacikot",
        password:"jacikot123",
        name:"Jana Toljaga",
    }];
    if(localStorage.getItem("users")==null){
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("current","");
    }
    else users=JSON.parse(localStorage.getItem("users"));
    if(localStorage.getItem("current")!=""){
        let name=JSON.parse(localStorage.getItem("current")).name;
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
        $(".welcome").html(name+",<br>Dobrodošli na<br> Taste the World!");
    } 
    else  {
        $(".reglog").show();
        $(".welcome").html("Dobrodošli na<br> Taste the World!");
    }

    // $("#f").on("change",function(){
    //     let filepaths=this.value.split("\\");
    //     let filename=filepaths[filepaths.length-1];
    //     alert(filename);
	// 	document.getElementById("images").innerText+=" "+filename;
    // });

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
                    name:ns
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

   
});
