var istatus = document.querySelector("h4");

var btn = document.querySelector("#btn");

var flag=1;

btn.addEventListener("click",function(){
    if(flag == 1){
        istatus.innerHTML ="friend";
        istatus.style.color= "green";
        flag=0;
        btn.innerHTML="Remove friend";
    }else{
        istatus.innerHTML ="Stranger";
        istatus.style.color= "red";
        flag=1;
        btn.innerHTML="Add friend";

    }
    
})