
var recipesShow=[];
$(document).ready(function(){
    let recipes=JSON.parse(localStorage.getItem("recipes"));
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
        let rec=$("<div id='"+recipes[i].id+"' class='col-lg-4 col-md-6 special-grid recipes "+foodType+"'><div class='gallery-single fix'><img src='"+picture+"' class=img-fluid' style='width:100%; height:200px;' alt='Image'><div class='why-text'><h4>"+recipes[i].name+"</h4><p>Vreme pripreme recepta</p><h5>"+recipes[i].hour+":"+recipes[i].minute+"</h5></div></div></div>");
        recipesShow.push(rec);
        $("#pictures").append(rec);      
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
    function DiffAsc( a, b ) {
        if ( parseInt(a.difficulty) < parseInt(b.difficulty)){
            {             
                var v1 = $('#'+a.id).html(),
                v2 = $('#'+b.id).html();
                $('#'+a.id).html(v2);
                $('#'+b.id).html(v1);
                $('#'+a.id).prop("id", "TEMP");
                $('#'+b.id).prop("id", ""+a.id);
                $('#TEMP').prop("id", ""+b.id); 
                return -1;
            }
       
        }
        if (parseInt(a.difficulty) > parseInt(b.difficulty)){          
          return 1;
        }
        return 0;
      }
      function DiffDesc( a, b ) {
        if ( parseInt(a.difficulty) > parseInt(b.difficulty)){
            {            
            var v1 = $('#'+a.id).html(),
            v2 = $('#'+b.id).html();
            $('#'+a.id).html(v2);
            $('#'+b.id).html(v1);
            $('#'+a.id).prop("id", "TEMP");
            $('#'+b.id).prop("id", ""+a.id);
            $('#TEMP').prop("id", ""+b.id);                   
                return -1;
            }
       
        }
        if (parseInt(a.difficulty) < parseInt(b.difficulty)){   
                
          return 1;
        }
        return 0;
      }
    
      $(document).on("change","select",function(){
        if ($(this).val()==1)
        for (let i=0;i<recipes.length;i++)
        for (let k=i+1;k<recipes.length;k++){
            if (parseInt(recipes[i].difficulty)>parseInt(recipes[k].difficulty)){
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
            }
        }
          else if ($(this).val()==2)    
            for (let i=0;i<recipes.length;i++)
                for (let k=i+1;k<recipes.length;k++){
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
                }
            }
            
            else if ($(this).val()==3 || $(this).val()==4){
                recipes.sort((r1,r2)=>findAvg(r1)-findAvg(r2));
                /*
                let marks=[];
                for (let i=0; i<recipes.length;i++){
                
                }
            
            for (let i=0;i<recipes.length;i++)
            for (let k=i+1;k<recipes.length;k++){
                if (parseInt(recipes[i].mark)<parseInt(recipes[k].difficulty)){
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
                }
            }
            */
        }
        localStorage.setItem("recipes",JSON.stringify(recipes));
    });
     
})