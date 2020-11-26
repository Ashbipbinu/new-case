    function validate(){
    let email=document.getElementById("email"); 
    console.log(email.value);
    let pass = document.getElementById("pass"); 
    console.log(pass.value);
    
    function caller(email,pass){
        return new Promise((resolve,reject)=>{
            if((email.value=="admin")&&(pass.value==12345)){

                resolve("entered if");
                document.location.href = "item.html"
                
                return true
            }
            else{
                reject("entered else");
                alert("hot")
                return false;
            }
        })
    
    }
    caller(email,pass).then((msg)=>{
        console.log(msg);
        console.log("entered then");
       
    }).catch((msd)=>{
        console.log(msd);
        console.log("entered catch")
        
    })
}