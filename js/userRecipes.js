var avgMarks=[];
$(document).ready(function(){
    let current=JSON.parse(localStorage.getItem("current"));
    let lng=JSON.parse(localStorage.getItem("language"));
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
        let rec=$("<div id='"+recipes[i].id+"' class='col-lg-4 col-md-6 special-grid recipes "+foodType+"'><div class='gallery-single fix'><img src='"+picture+"' class=img-fluid' style='width:100%; height:200px;' alt='Image'><div class='why-text'><h4 id='htrash'>"+recipes[i].name+"<img src='images/trash-fill.svg' class='delete' id='A"+recipes[i].id+"' name='trash' style='cursor: pointer;'></h4><p>"+((lng=="english")?"Recipe preparation time":"Vreme pripreme recepta")+"</p><h5>"+recipes[i].hour+":"+recipes[i].minute+"</h5></div></div></div>");
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
        localStorage.setItem("history",0);
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
      $(document).on("click",'.cardsClass',function(){
        //get searched recipes or get all recipes
        arr=JSON.parse(localStorage.getItem("markSearch"));
        if (arr==null || arr==""){
           // alert ("tu");
            for (let i=0;i<recipes.length;i++)
            arr.push(0);
        }
        //show All
        for (let br=0;br<recipes.length;br++){
                $("#"+recipes[br]['id']).show();
            }
            //get type of recipe
        let text1=$(this).attr('id');
        let text;
        let isSet=0;
        if (text1=='t1'){
            //apetizer
            text=1;
        }
        else if (text1=='t2'){
            //main food
            text=2;
        }
        else if (text1=='t3'){
            //desert
            text=3;
        }
        else if (text1=='t4'){
            //snack
            text=4;
        }
        else if (text1=='allS'){
            isSet=1;
        }
        else return;

        if (isSet==1){                    
           for (let i=0;i<recipes.length;i++){
                arr[i]=0;
            }
            localStorage.setItem("showT",JSON.stringify(arr));
        }
        else {          
            for (let i=0;i<recipes.length;i++){
                if (parseInt(recipes[i].type)!=text){
                    arr[i]=1;            
                }
               
            }
            //sort now 
        for (let i=0;i<recipes.length;i++){
            for (let j=i+1;j<recipes.length;j++){
                if (arr[i]>arr[j]){
                    let a=recipes[i];
                    let b=recipes[j];
                    var v1 = $('#'+a.id).html(),
                    v2 = $('#'+b.id).html();
                    $('#'+a.id).html(v2);
                    $('#'+b.id).html(v1);
                    $('#'+a.id).prop("id", "TEMP");
                    $('#'+b.id).prop("id", ""+a.id);
                    $('#TEMP').prop("id", ""+b.id);        
                    let temp=recipes[i];
                    recipes[i]=recipes[j];
                    recipes[j]=temp;
                    temp=avgMarks[i];
                    avgMarks[i]=avgMarks[j];
                    avgMarks[j]=temp;
                    temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
                }            
                }
            }
                i=recipes.length-1;
                while (arr[i]==1){
                    if (arr[i]==1)
                    $("#"+recipes[i]['id']).hide();
                    i--;
                    if (i<0)break;
                }

                localStorage.setItem("recipes",JSON.stringify(recipes));
                localStorage.setItem("markAvg",JSON.stringify(avgMarks));
                localStorage.setItem("showT",JSON.stringify(arr));
    });
})