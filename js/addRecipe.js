
$(document).ready(function(){
    let recipes=[];
    if(localStorage.getItem("recipes")==null){
        localStorage.setItem("recipes",JSON.stringify(recipes));
    }
    else recipes=JSON.parse(localStorage.getItem("recipes"));

    let users=JSON.parse(localStorage.getItem("users"));
    let current=JSON.parse(localStorage.getItem("current"));
    
    $("#submit").click(function(){
        $("#nrerror").text("");
        $("#terror").text("");
        $("#herror").text("");
        $("#merror").text("");
        $("#derror").text("");
        let n=$("#nameRecipe").val();
        let t=$("#type").val();
        let h=$("#timeDurationH").val();
        let m=$("#timeDurationM").val();
        let desc=$("#description").val();
        let url=$("#url").val();
        let dif=$("#dif").val();
        let imgs=localStorage.getItem("images");
        if(imgs==null||imgs=="")imgs=[];
        else imgs=JSON.parse(imgs);
        let flag=true;
        if(n==""){
            $("#nrerror").text("Niste uneli ime recepta");
            flag=false;
        }
        if(t==null){
            $("#terror").text("Niste uneli tip recepta");
            flag=false;
        }
        if(h==""){
            $("#herror").text("Niste uneli vreme");
            flag=false;
        }
        if(m==""){
            $("#merror").text("Niste uneli vreme");
            flag=false;
        }
        if(desc==""){
            $("#derror").text("Niste uneli opis");
            flag=false;
        }
        
        if(flag==false)return;
        if(localStorage.getItem("id")==null){
            localStorage.setItem("id",0);
        }
        let idr=parseInt(localStorage.getItem("id"))+1;
        localStorage.setItem("id",idr);
        let recipe={
            id:idr,
            name:n,
            type:t,
            difficulty:dif,
            hour:h,
            minute:m,
            description:desc,
            images:imgs,
            comments:[],
            urlVideo:url,
            owner:current.username
        }
      
        recipes.push(recipe);
        localStorage.setItem("recipes",JSON.stringify(recipes));
        current.recipes.push(recipe);
        localStorage.setItem("current",JSON.stringify(current));
        for(let i=0;i<users.length;i++){
            if(users[i].username==current.username){
                users[i]=current;
                break;
            }
        }
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("images","");
        $(".errorForm").text("Uspesno ste uneli novi recept");
    });

});