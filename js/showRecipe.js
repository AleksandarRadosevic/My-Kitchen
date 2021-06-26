
 
$(document).ready(function(){
   
    let currentRecipe=JSON.parse(localStorage.getItem("currentRecipe"));
    if (currentRecipe==null){
        alert("Greska");
        return;}
    //set topic
        $("#Topic").text(currentRecipe.name);
        if (currentRecipe.urlVideo!="")
        $("#video").append("<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='"+currentRecipe.urlVideo+"'></frame></div>");
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
        if (/^\/$/.test(comments[i].mark)==false){
        avg+=parseInt(comments[i].mark);
        numMarks++;
    }
    }
    if (numMarks>0)  avg=avg/numMarks;
    $("#mark").text(parseFloat(avg).toFixed(2));
    //difficulty
    $("#diff").text(currentRecipe.difficulty);
    //description
    $("#text").text(currentRecipe.description);
    for (let i=0;i<comments.length;i++){    
        $(".blog-comment-box").append("<div class='comment-item'><div class='comment-item-left'><img src='images/avt-img.jpg'></div><div class='comment-item-right'><div class='pull-left'><a href='#'>"+comments[i].user+"</a>&nbsp;&nbsp; "+comments[i].time+"&nbsp;&nbsp;&nbsp;Ocena: "+comments[i].mark+"</div><div class='des-l'><p>"+comments[i].text+"&nbsp;&nbsp;&nbsp;&nbsp;</p></div></div></div>");
    }
  
})

function saveToPdf(){
    var doc = new jsPDF();
    let text="";
    let allPages=[];
    let currentRecipe=JSON.parse(localStorage.getItem("currentRecipe"));
    //calculate mark
    let numMarks=0;
    let comments=currentRecipe.comments;
    let avg=0;
    for (let i=0;i<comments.length;i++){
        if (comments[i].mark!=""){
        avg+=parseInt(comments[i].mark);
        numMarks++;
    }
    }
    let nLine=1;
    let nPages=1;
    if (numMarks>0)  avg=avg/numMarks;
    localStorage.setItem("texa",JSON.stringify(currentRecipe.description));
    for (let i=0;i<currentRecipe.description.length;i++){
            if (i>70*nLine && i<90*nLine && currentRecipe.description[i]==' '){
                text=text+'\n';
                nLine++;
                if ((i>1950*nPages && i<2050*nPages && nPages==1) || ((i>2350*nPages && i<2450*nPages && nPages!=1)))
                {
                    allPages.push(text);
                    text="";
                    nPages++;
                }
            }
            else {
                if (currentRecipe.description[i]=='č'|| currentRecipe.description[i]=='ć')
                text=text+'c';
                else if (currentRecipe.description[i]=='đ'){
                    text=text+"d";
                    text=text+"j";
                }
                else if (currentRecipe.description[i]=='š')
                    text=text+'s';
                else  text=text+currentRecipe.description[i];
            }
            }
    
    doc.text(currentRecipe.name,80,10);
    doc.text('Vlasnik recepta: '+currentRecipe.owner,5,20);
    doc.text('Vreme spremanja '+currentRecipe.hour+":"+currentRecipe.minute,5,30);
    doc.text('Prosecna ocena: '+avg,5,40);
    allPages.push(text);
    for (let i=0;i<allPages.length;i++){
        if (i==0) doc.text(allPages[i],5,50);
        else
        doc.addPage().text(allPages[i],5,25);
    }
    
    doc.save(currentRecipe.name);
    

}