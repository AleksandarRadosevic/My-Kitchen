$(document).ready(function(){
    localStorage.setItem("currentRecipe",JSON.stringify( {"name":"Sarma",
    "type":"Glavno jelo",
    "difficulty":"5",
    "owner":"Aleksandar",
    "hour":"1","minute":"30",
    "description":"	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores quo ad maxime nemo. Perferendis quis eligendi quo cum consequuntur quod, maxime exercitationem rem dolore eius quasi tempora maiores totam.Sed possimus ab, unde error porro laborum distinctio mollitia. Facilis magni enim eveniet cumque inventore dolores itaque tempora eius doloremque vero quia, quae vitae harum repellendus dolorem illo reiciendis corporis.Sed ad voluptatum perspiciatis accusamus minima repellat culpa, minus dolores. Rerum, ducimus reiciendis numquam placeat dolorum inventore ipsam quo repudiandae perferendis maiores nostrum unde excepturi quod illum minima porro eum. Odit quis labore qui quo suscipit cupiditate, voluptas aut. Architecto temporibus cum rem asperiores quasi culpa, dolore alias ea, voluptas, et optio laborum! Quis qui culpa neque a minima architecto.Consectetur voluptas nam modi veniam recusandae praesentium blanditiis odio enim iure quas dicta impedit, iste obcaecati doloribus porro eligendi in earum corrupti, quia hic voluptatum. Autem eum aliquid dolorum ducimus.",
    "images":["images/gallery-img-01.jpg","images/gallery-img-02.jpg",
    "images/gallery-img-04.jpg","images/gallery-img-03.jpg","images/gallery-img-02.jpg"
],
    "comments":[{
        "user":"Aleksandar","mark":"5","text":"Mnogo mi se svidja recept super je i jednostavan je!!","time":"11:30 PM"
    },{
        "user":"Misko","mark":"2","text":"Meni je bas bezveze","time":"11:45 PM"
    }
    ],"urlVideo":"https://www.youtube.com/watch?v=vHWruI-stTQ&ab_channel=Mojamalakuhinja"}));
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
    $("#gallery1").append($("<div class='col-sm-6 col-md-4 col-lg-4'><a class='lightbox' href='"+images[i]+"'><img class='img-fluid' src='"+images[i]+"' alt='Gallery Images'></a></div>"));
    	
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
