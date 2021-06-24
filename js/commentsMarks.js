$(document).ready(function(){
    let comments=[];
    let recipes=[];
    comments.push({
		user:"jacikot",
		mark:5,
		text:"Glup komentar ahahhaahha aahaaaaaaaahaaa aaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaahahh ahahahah",
        recipe:1
	},
    {
		user:"jacikot",
		mark:2,
		text:"Glup komentar 2",
        recipe:1
	}
    );
    if(localStorage.getItem("comments")==null){
        localStorage.setItem("comments",JSON.stringify(comments));
    }
    else comments=JSON.parse(localStorage.getItem("comments"));
    if(localStorage.getItem("recipes")==null){
        localStorage.setItem("recipes",JSON.stringify(recipes));
    }
    else recipes=JSON.parse(localStorage.getItem("recipes"));
    let current=JSON.parse(localStorage.getItem("current"));
    
    let usersComments=comments.filter(comment=>comment.user==current.username);
    
    for(let i=0;i<usersComments.length;i++){
        let recipe=recipes.find(recipe=>recipe.id==usersComments[i].recipe);
        $("#mybox")
        .append(
            $("<div></div>").addClass("col-12").addClass("p-2").addClass("border").addClass("border-secondary").addClass("rounded").addClass("recent-box-blog")
            .append($("<div class='recent-img'></div>").append("<img class='img-fluid' width='70px' height='70px' src="+recipe.images[0]+ "></img>"))
            .append($("<div></div>").addClass("recent-info").append(
                $("<ul></ul>").append($("<li></li>").append("<i class='zmdi zmdi-account'></i>Recept : <span>"+recipe.name+"</span>"))
                              .append("<li>|</li>")
                              .append("<li><i class='zmdi zmdi-time'></i>Ocena : <span>"+usersComments[i].mark+"</span></li>")
                            
            ).append("<h2>"+usersComments[i].text+"</h2>"))
            .click(function(){
                localStorage.setItem("currentRecipe",JSON.stringify(recipe));
                window.location.href="blog-details.html";
            })
            .attr("style","cursor:pointer")
        );
    }



});