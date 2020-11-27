function checkFtn(){
    return new Promise((reject,resolve)=>{
        checks = document.getElementsByClassName("checks");
        
       
            var count = 0;
            for(var i=0;i<checks.length;i++){
                
                if(checks[i].checked){
                   
                    count = count+1;
                    console.log(count);
                    if(count==5){
                        resolve("Successfully selected 5 boxes");
                        alert("sorry only 5 can be selected");
                    }
                    else{
                        console.log("check more boxes")
                        
                    }
                   
                }
                else{
                    
                    reject("not entered");
                    return false;
            }
           
            }
            console.log(count);
        
    })
}
checkFtn().then((msg)=>{
    console.log(msg);
}).catch((msd)=>{
    console.log(msd);
})
