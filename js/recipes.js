
var avgMarks=[];
var arr=[];
$(document).ready(function(){
    let recipes=JSON.parse(localStorage.getItem("recipes"));
    let lng=JSON.parse(localStorage.getItem("language"));
    function showRecipes(recipes){
        for (let i=0;i<recipes.length;i++){
            arr.push(0);
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
        let rec=$("<div id='"+recipes[i].id+"' class='col-lg-4 col-md-6 special-grid recipes "+foodType+" "+recipes[i].name+" '><div class='gallery-single fix'><img src='"+picture+"' class=img-fluid' style='width:100%; height:200px;' alt='Image'><div class='why-text'><h4>"+recipes[i].name+"</h4><p>"+((lng=="english")?"Recipe preparation time":"Vreme pripreme recepta")+"</p><h5>"+recipes[i].hour+":"+recipes[i].minute+"</h5></div></div></div>");
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
        localStorage.setItem("history",1);
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
    
      $(document).on("change","select",function(){
        if ($(this).val()==1){
        for (let i=0;i<recipes.length;i++){
            if (arr[i]==1) break;
        for (let k=i+1;k<recipes.length;k++){
            if (arr[k]==1) break;
            else if (parseInt(recipes[i].difficulty)>parseInt(recipes[k].difficulty)){              
                let a=recipes[i];
                let b=recipes[k];
                var v1 = $('#'+a.id).html(),
                v2 = $('#'+b.id).html();
                $('#'+a.id).html(v2);
                $('#'+b.id).html(v1);
                $('#'+a.id).prop("id", "TEMP");
                $('#'+b.id).prop("id", ""+a.id);
                $('#TEMP').prop("id", ""+b.id);        
                let temp=recipes[i];
                recipes[i]=recipes[k];
                recipes[k]=temp;
                temp=avgMarks[i];
                avgMarks[i]=avgMarks[k];
                avgMarks[k]=temp;
            }
        }
        
    }
}
          else if ($(this).val()==2) {
            for (let i=0;i<recipes.length;i++){
                if (arr[i]==1) break;
                for (let k=i+1;k<recipes.length;k++){
                if (arr[k]==1) break;
                if (parseInt(recipes[i].difficulty)<parseInt(recipes[k].difficulty)){
                    let a=recipes[i];
                    let b=recipes[k];
                    var v1 = $('#'+a.id).html(),
                    v2 = $('#'+b.id).html();
                    $('#'+a.id).html(v2);
                    $('#'+b.id).html(v1);
                    $('#'+a.id).prop("id", "TEMP");
                    $('#'+b.id).prop("id", ""+a.id);
                    $('#TEMP').prop("id", ""+b.id);        
                    let temp=recipes[i];
                    recipes[i]=recipes[k];
                    recipes[k]=temp;
                    temp=avgMarks[i];
                avgMarks[i]=avgMarks[k];
                avgMarks[k]=temp;
                }
            }      
            }
          }
            else if ($(this).val()==3){
                for (let i=0;i<avgMarks.length;i++){
                    if (arr[i]==1) break;
                for (let k=i+1;k<avgMarks.length;k++){
                    if (arr[k]==1) break;
                if (parseFloat(avgMarks[i])>parseFloat(avgMarks[k])){
                    let a=recipes[i];
                    let b=recipes[k];
                    var v1 = $('#'+a.id).html(),
                    v2 = $('#'+b.id).html();
                    $('#'+a.id).html(v2);
                    $('#'+b.id).html(v1);
                    $('#'+a.id).prop("id", "TEMP");
                    $('#'+b.id).prop("id", ""+a.id);
                    $('#TEMP').prop("id", ""+b.id);        
                    let temp=recipes[i];
                    recipes[i]=recipes[k];
                    recipes[k]=temp;
                    let va=avgMarks[i];
                avgMarks[i]=avgMarks[k];
                avgMarks[k]=va;
                }
            }
        }
    }
        else if ($(this).val()==4){
            for (let i=0;i<avgMarks.length;i++){
                if (arr[i]==1) break;
            for (let k=i+1;k<avgMarks.length;k++){
                if (arr[k]==1) break;
            if (parseFloat(avgMarks[i])<parseFloat(avgMarks[k])){
                let a=recipes[i];
                let b=recipes[k];
                var v1 = $('#'+a.id).html(),
                v2 = $('#'+b.id).html();
                $('#'+a.id).html(v2);
                $('#'+b.id).html(v1);
                $('#'+a.id).prop("id", "TEMP");
                $('#'+b.id).prop("id", ""+a.id);
                $('#TEMP').prop("id", ""+b.id);        
                let temp=recipes[i];
                recipes[i]=recipes[k];
                recipes[k]=temp;
                let va=avgMarks[i];
                avgMarks[i]=avgMarks[k];
                avgMarks[k]=va;
            }
        }
    }
}
        localStorage.setItem("recipes",JSON.stringify(recipes));
        localStorage.setItem("markAvg",JSON.stringify(avgMarks));
    });
    $(document).on("click",".search-btn",function(){
        let text=($("#searchVal").val());
        ($("#searchVal").val(''));
        for (let br=0;br<recipes.length;br++){
            if (new RegExp(text,'i').test(recipes[br]['name'])==false)
                arr[br]=1;
            else arr[br]=0;
        }
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
                i=recipes.length-1;
                while (arr[i]==1){
                    $("#"+recipes[i]['id']).hide();
                    i--;
                }
    });
})