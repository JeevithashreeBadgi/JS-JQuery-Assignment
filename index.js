console.log("working");

//Problem 1
function showhide(){
    var div = document.getElementById("newpost");
    if(div.style.display !== "block"){
        div.style.display = "block";
    }
    else{
        div.style.display = "none";
    }
}



//Problem 2
$("#btn").click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/2",
        type: "GET",
        success: function(data){
            console.log(data);
            document.getElementsByTagName("h1")[0].innerText = data.title;
        },
    })
})