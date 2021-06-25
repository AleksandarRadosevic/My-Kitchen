$(document).ready(function(){
    let currentRecipe=JSON.parse(localStorage.getItem("currentRecipe"));
    if (currentRecipe==null){
        alert("Greska");
        return;}
    //set topic
        $("#Topic").text(currentRecipe.name);

    //set gallery
    let images=currentRecipe.images;
    if (images.length==0){
        $("#gallery").hide();
    }
    else {
        $("#gallery").append($("<div class='gallery-box' id='gallery'> <div class='container-fluid'><div class='tz-gallery'><div class='row' id='gallery1'></div></div></div></div>"))
    for (let i=0;i<images.length;i++)
    $("#gallery1").append($("<div class='col-sm-6 col-md-4 col-lg-4'><a class='lightbox' href='"+images[i]+"'><img class='img-fluid' src='"+images[i]+"'style='height:220px;' alt='Gallery Images'></a></div>"));
    	
	baguetteBox.run('.tz-gallery', {
		animation: 'fadeIn',
		noScrollbars: true
	});
    }
    
    //set writer
    $("#writer").text(currentRecipe.owner);
    //time posted
    $("#timeS").text(currentRecipe.hour+":"+currentRecipe.minute);
    //average mark
    let comments=currentRecipe.comments;
    let avg=0;
    let numMarks=0;
    for (let i=0;i<comments.length;i++){
        if (comments[i].mark!=""){
        avg+=parseInt(comments[i].mark);
        numMarks++;
    }
    }
    if (numMarks>0)  avg=avg/numMarks;
    $("#mark").text(avg);
    //difficulty
    $("#diff").text(currentRecipe.difficulty);
    //description
    $("#text").text(currentRecipe.description);
    for (let i=0;i<comments.length;i++){
        $(".blog-comment-box").append("<div class='comment-item'><div class='comment-item-left'><img src='images/avt-img.jpg'></div><div class='comment-item-right'><div class='pull-left'><a href='#'>"+comments[i].user+"</a>&nbsp;&nbsp; "+comments[i].time+"</div><div class='des-l'><p>"+comments[i].text+"</p></div></div></div>");
    }
  
})
