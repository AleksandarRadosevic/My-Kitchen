
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
        
        $("#pictures").append($("<div id='"+recipes[i].id+"' class='col-lg-4 col-md-6 special-grid recipes "+foodType+"'><div class='gallery-single fix'><img src='"+picture+"' class=img-fluid' style='width:100%; height:200px;' alt='Image'><div class='why-text'><h4>"+recipes[i].name+"</h4><p>Vreme pripreme recepta</p><h5>"+recipes[i].hour+":"+recipes[i].minute+"</h5></div></div></div>"));
        //alert(foodType);
        }
      
    }
    showRecipes(recipes);

    $(document).on("click",".recipes",function(){
        let id=$(this).attr('id');
        let recipe=recipes.find(element=>element.id==id);
        localStorage.setItem("currentRecipe",JSON.stringify(recipe));
        window.location.href="blog-details.html";

    });
    function compareDiff( a, b ) {
        if ( parseInt(a.difficulty) < parseInt(b.difficulty)){
          return -1;
        }
        if (parseInt(a.difficulty) < parseInt(b.difficulty)){
          return 1;
        }
        return 0;
      }
    
      $(document).on("change","select",function(){
        recipes.sort(compareDiff);
        $("#pictures").remove();
        $("#pics").append($("<div id='pictures'></div>"));
        show(recipes);
    });
})