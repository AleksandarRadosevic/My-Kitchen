var avgMarks=[];
$(document).ready(function(){
    let current=JSON.parse(localStorage.getItem("current"));
    let recipes=current.recipes;
    function showRecipes(recipes){
        for (let i=0;i<recipes.length;i++){
            let picture;
            let foodType;
            if (recipes[i].images==""){
                picture="images/noImage5.png";
            }
            else {
                picture=recipes[i].images[0];
            }
            if (recipes[i].type==1){
                foodType="appetizer";  
            }
            else if (recipes[i].type==2){
                foodType="mainFood"; 
            }
            else if (recipes[i].type==3)
            {
                foodType="desert";    
            }
            else if (recipes[i].type==4){
                foodType="snack";    
            }
        let rec=$("<div id='"+recipes[i].id+"' class='col-lg-4 col-md-6 special-grid recipes "+foodType+"'><div class='gallery-single fix'><img src='"+picture+"' class=img-fluid' style='width:100%; height:200px;' alt='Image'><div class='why-text'><h4 id='htrash'>"+recipes[i].name+"<img src='images/trash-fill.svg' class='delete' id='A"+recipes[i].id+"' name='trash' style='cursor: pointer;'></h4><p>Vreme pripreme recepta</p><h5>"+recipes[i].hour+":"+recipes[i].minute+"</h5></div></div></div>");
        $("#pictures").append(rec);      
        let comments=recipes[i].comments;
        let numMarks=0;
        let avg=0;
        for (let j=0;j<comments.length;j++){
            if (/^\/$/.test(comments[j].mark)==false){
            avg+=parseInt(comments[j].mark);
            numMarks++;
        }
        }
        if (numMarks>0)  avg=avg/numMarks;
        else avg=-1;
        avgMarks.push(avg);
        }
      
    }
    showRecipes(recipes);

    $(document).on("click",".recipes",function(){
        let id=$(this).attr('id');
        let recipe=recipes.find(element=>element.id==id);
        localStorage.setItem("currentRecipe",JSON.stringify(recipe));
        window.location.href="blog-details.html";

    });
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
    
      $(document).on("click",".delete",function(){
        let str=($(this).attr('id'));
        let v="";
        for (let i=1;i<str.length;i++)
            v=v+str[i];
        let id=parseInt(v);
        $("#"+id).remove();
        let i;
        for (i=0;i<recipes.length;i++)
            if(recipes[i].id==id)
                break;
                if (i > -1) {
                    recipes.splice(i, 1);
                }
        let recs=JSON.parse(localStorage.getItem("recipes"));
        for (i=0;i<recs.length;i++)
        if(recs[i].id==id)
            break;
            if (i > -1) {
                recs.splice(i, 1);
            }
        localStorage.setItem("recipes",JSON.stringify(recs));
        localStorage.setItem("current",JSON.stringify(current));
        let users=JSON.parse(localStorage.getItem("users"));
        for (let i=0;i<users.length;i++){
            if(users[i]['username']==current['username'])
                {
                    users[i]['recipes']=current['recipes'];
                }
        
        }
        localStorage.setItem('users',JSON.stringify(users));
        e.preventDefault();
        
      });
     
})