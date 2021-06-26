$(document).ready(function(){
    let m=-1;
    let recipes=[];
    if(localStorage.getItem("recipes")==null){
        localStorage.setItem("recipes",recipes);
    }
    else recipes=JSON.parse(localStorage.getItem("recipes"));
    let comments=[];
    if(localStorage.getItem("comments")==null){
        localStorage.setItem("comments",comments);
    }
    else comments=JSON.parse(localStorage.getItem("comments"));
    let rec=JSON.parse(localStorage.getItem("currentRecipe"));
    let current=localStorage.getItem("current");
    if(current==""){
        $("#submit_comm").prop("disabled",true);
    }else current=JSON.parse(current);




    $(".stars").click(function(){
        let id=$(this).attr("id");
        m=parseInt(id.substring(1))
        for(let i=1;i<=m;i++){
            $("#s"+i).attr("src","images/star-fill.svg");
        }
        for(let i=m+1;i<=5;i++){
            $("#s"+i).attr("src","images/star.svg");
        }
    });

    $("#submit_comm").click(function(e){
        let body=$("#textarea_com").val();
        
        if(m==-1)m="/";
        let d=new Date();
        let dateText=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear()+". "+d.getHours()+":"+d.getMinutes();
        let comment={
            user:current.username,
            mark:""+m,
            text:body,
            time:dateText,
            recipe:rec.id,
            
        }
        comments.push(comment);
        localStorage.setItem("comments",JSON.stringify(comments));
        rec.comments.push(comment);
        localStorage.setItem("currentRecipe",JSON.stringify(rec));
        for(let i=0;i<recipes.length;i++){
            if(recipes[i].id==rec.id){
                recipes[i]=rec;
            }
        }
        localStorage.setItem("recipes",JSON.stringify(recipes));
        e.preventDefault();
        $(".blog-comment-box").append("<div class='comment-item'><div class='comment-item-left'><img src='images/avt-img.jpg'></div><div class='comment-item-right'><div class='pull-left'><a href='#'>"+comment.user+"</a>&nbsp;&nbsp; "+comment.time+"&nbsp;&nbsp;&nbsp;Ocena: "+comment.mark+"</div><div class='des-l'><p>"+comment.text+"</p></div></div></div>");
        $("#textarea_com").val('');
    });
});