var goods =document.querySelector(".goods");
var str='';
$.ajax({
    type: "get",
    url: "./data.json",
    dataType: "json",
    success: function(res){
        for(var i =0;i<res.data.length;i++){
            str+=`<div class="card good" style="width: 16rem;" id="${i}">
                <img class="card-img-top" src="${res.data[i].图片}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">${res.data[i].标题}</p>
                    <span>${res.data[i].itempri}</span>
                </div>
            </div>`
            goods.innerHTML= str
        }
    } 
})
$(".goods").on("click",".good",function(){
    var id = $(this).attr("id");
    console.log(id)
    location.href = "./html/good.html?id="+id;
})
