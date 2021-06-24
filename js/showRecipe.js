function showRecipe(){

   let currentRecipe=JSON.parse("currentRecipe");
   if (currentRecipe==null){
       alert("Greska");
       return;}

   let topic=document.getElementById("Topic");

   topic.innerHTML=currentRecipe["name"];
}