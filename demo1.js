    function validate(){
    let email=document.getElementById("email");
    let pass = document.getElementById("pass");
    function caller(email,pass,callback){
        err= 0;
        if((email.value=="admin")&&(pass.value==12345)){
            
            document.location.href = "item.html";
            err = true;
            callback(email,pass,err);
            alert(err);
            return err;
      
        }
        else{
            err = false
            alert("Access Denied");
            return err;
            
        }
        
    }
    caller(email,pass,function(error){
        console.log(error);
    })
}