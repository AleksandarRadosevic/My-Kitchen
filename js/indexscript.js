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
        recipes:[{"id":1,
            "name":"Kajgana sa šunkom",
            "type":"1","difficulty":"2",
            "hour":"0",
            "minute":"15",
            "description":"Barenu šunku iseći što sitnije, pa je izmešati sa kiselom pavlakom i senfom. U dubok tanjir izlupati jaja, posoliti i viljuškom masu penasto umutiti. U izmućena jaja dodati pripremljenu šunku. U plitak tiganj staviti ulje, zatim sipati jaja i šunku i mešati na štednjaku, kao svaku kajganu, ali paziti da ostane ređa, jer je tada ukusnija. Sipati u zdelu i služiti.\n",
            "images":["images/barkani-qica-shunka-gabi1.jpg","images/kajgana-sa-sirom-i-sunkom.jpg","images/omlet-ft-1200x900.jpg"],
            "comments":[],
            "urlVideo":"https://www.youtube.com/embed/e8i_AYcrWjo",
            "owner":"jacikot"
            },
            {
                "id":2,
                "name":"Dimnjeni losos sa pirincem",
                "type":"2",
                "difficulty":"10",
                "hour":"3",
                "minute":"30",
                "description":"Potrebni sastojci za pripremu:\n1 glavica crnog luka\n250 grama pirinča po ukusu\n100 mililitara belog vina\n700 mililitara bujona od povrća\n1 kašika maslaca\n100 grama parmezana\n100 grama dimljenog lososa\nSo i začini po ukusu\nPostupak pripreme:\nCrni luk iseckajte na sitno, pa propržite na malo maslinovog ulja.. Kada zamiriše, dodajte pirinač, pa uz stalno mešanje kratko upržite. Kada zrna postanu staklasta, postepeno sipajte vino. Nastavite sa mešanjem dok vino ne ispari.\nSada postepeno dodajte i bujon, kutlaču po kutlaču, i takodje mešajte. Sada samo povremeno mešajte, a narednu kutlaču bujona sipajte tek kada prethodnu upije pirinač. To će potrajati nekih 15ak minuta, pa kada pirinač upije sav bujon, spreman je.\nSklonite sa ringle pa umešajte puter i parmezan, i dobro promešajte da se sve sjedini. Na kraju dodajte seckani losos pa još jednom promešajte. Probajte, pa po ukusu dodajte začine i poslužite dok je toplo.. Neće biti jednako ukusan ako ga pripremite dosta ranije, jer se pirinač pripremljen na ovakav način služi dok je još topao i kremast..",
                "images":["images/GettyImages-636223280.jpg","images/dimljeni-losos.jpg"],
                "comments":[],
                "urlVideo":"",
                "owner":"jacikot"
            },
            {
                "id":3,
                "name":"Cupavci",
                "type":"3",
                "difficulty":"6",
                "hour":"3",
                "minute":"0",
                "description":"Za biskvit:\n3 jajeta\n200 ml ulja\n200 g šećera\n300 g brašna\n1 kesica praška za pecivo\n100 ml mleka\nUmak od čokolade:\n100 g čokolade za kuvanje\n250 g margarina\n200 ml mleka\n1 čaša šećera\nI još:\n200-250 g kokosa\nPripremiti testo: Od jaja odvojiti belanca i žumanaca. Belance dobro istući mikserom, pa dodati šećer, pa još malo mutiti, dodati žumanca. Smanjiti brznu na mikseru i dodati mleko i ulje. Bršno pomešati sa praškom za pecivo, dodati u masu i lagano promešati kašikom da masa ne padne. Pleh 25x30 cm obložite pek papirom. Pecite biskvit na 200 stepeni dok ne porumeni. Prevrnite na žicu i ostavite da se ohladi.\nOhlađeno testo iseći na kocke. Na šporet u dublju šerpicu staviti margarin da se otopi, dodati čokoladu, kada se sve istopi dodajte šećer, pa mleko i ostavite da provri. Sklonite sa vatre. U činiju sipajte kokos.\nUzmite 2 viljuške, jednom ćete umakati kocke u čokoladu i ostaviti malo na viljušci da okapa čokolada nakon umakanja, a drugom ćete posipati kokos. Ređajte na tacnu i stavite u frižider da se ohladi.\n",
                "images":["images/cupavci-sa-kokosom.jpg","images/Čupavci-scaled.jpg"],
                "comments":[],
                "urlVideo":"https://www.youtube.com/embed/00JmYEIlXuM",
                "owner":"jacikot"
                }
        ]
    },{
        username:"aca",
        password:"aca123",
        name:"Aleksandar Radosevic",
        recipes:[]
    },
    {
            username:"user",
            password:"user123",
            name:"User Useric",
            recipes:[]
    }
    ];
    let recipes=[
        {"id":1,
        "name":"Kajgana sa šunkom",
        "type":"1","difficulty":"2",
        "hour":"0",
        "minute":"15",
        "description":"Barenu šunku iseći što sitnije, pa je izmešati sa kiselom pavlakom i senfom. U dubok tanjir izlupati jaja, posoliti i viljuškom masu penasto umutiti. U izmućena jaja dodati pripremljenu šunku. U plitak tiganj staviti ulje, zatim sipati jaja i šunku i mešati na štednjaku, kao svaku kajganu, ali paziti da ostane ređa, jer je tada ukusnija. Sipati u zdelu i služiti.\n",
        "images":["images/barkani-qica-shunka-gabi1.jpg","images/kajgana-sa-sirom-i-sunkom.jpg","images/omlet-ft-1200x900.jpg"],
        "comments":[],
        "urlVideo":"https://www.youtube.com/embed/e8i_AYcrWjo",
        "owner":"jacikot"
        },
        {
            "id":2,
            "name":"Dimnjeni losos sa pirincem",
            "type":"2",
            "difficulty":"10",
            "hour":"3",
            "minute":"30",
            "description":"Potrebni sastojci za pripremu:\n1 glavica crnog luka\n250 grama pirinča po ukusu\n100 mililitara belog vina\n700 mililitara bujona od povrća\n1 kašika maslaca\n100 grama parmezana\n100 grama dimljenog lososa\nSo i začini po ukusu\nPostupak pripreme:\nCrni luk iseckajte na sitno, pa propržite na malo maslinovog ulja.. Kada zamiriše, dodajte pirinač, pa uz stalno mešanje kratko upržite. Kada zrna postanu staklasta, postepeno sipajte vino. Nastavite sa mešanjem dok vino ne ispari.\nSada postepeno dodajte i bujon, kutlaču po kutlaču, i takodje mešajte. Sada samo povremeno mešajte, a narednu kutlaču bujona sipajte tek kada prethodnu upije pirinač. To će potrajati nekih 15ak minuta, pa kada pirinač upije sav bujon, spreman je.\nSklonite sa ringle pa umešajte puter i parmezan, i dobro promešajte da se sve sjedini. Na kraju dodajte seckani losos pa još jednom promešajte. Probajte, pa po ukusu dodajte začine i poslužite dok je toplo.. Neće biti jednako ukusan ako ga pripremite dosta ranije, jer se pirinač pripremljen na ovakav način služi dok je još topao i kremast..",
            "images":["images/GettyImages-636223280.jpg","images/dimljeni-losos.jpg"],
            "comments":[],
            "urlVideo":"",
            "owner":"jacikot"
        },
        {
            "id":3,
            "name":"Cupavci",
            "type":"3",
            "difficulty":"6",
            "hour":"3",
            "minute":"0",
            "description":"Za biskvit:\n3 jajeta\n200 ml ulja\n200 g šećera\n300 g brašna\n1 kesica praška za pecivo\n100 ml mleka\nUmak od čokolade:\n100 g čokolade za kuvanje\n250 g margarina\n200 ml mleka\n1 čaša šećera\nI još:\n200-250 g kokosa\nPripremiti testo: Od jaja odvojiti belanca i žumanaca. Belance dobro istući mikserom, pa dodati šećer, pa još malo mutiti, dodati žumanca. Smanjiti brznu na mikseru i dodati mleko i ulje. Bršno pomešati sa praškom za pecivo, dodati u masu i lagano promešati kašikom da masa ne padne. Pleh 25x30 cm obložite pek papirom. Pecite biskvit na 200 stepeni dok ne porumeni. Prevrnite na žicu i ostavite da se ohladi.\nOhlađeno testo iseći na kocke. Na šporet u dublju šerpicu staviti margarin da se otopi, dodati čokoladu, kada se sve istopi dodajte šećer, pa mleko i ostavite da provri. Sklonite sa vatre. U činiju sipajte kokos.\nUzmite 2 viljuške, jednom ćete umakati kocke u čokoladu i ostaviti malo na viljušci da okapa čokolada nakon umakanja, a drugom ćete posipati kokos. Ređajte na tacnu i stavite u frižider da se ohladi.\n",
            "images":["images/cupavci-sa-kokosom.jpg","images/Čupavci-scaled.jpg"],
            "comments":[],
            "urlVideo":"https://www.youtube.com/embed/00JmYEIlXuM",
            "owner":"jacikot"
            }
    ];
    
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
    if(localStorage.getItem("current")!=""&&localStorage.getItem("current")!=null){
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
