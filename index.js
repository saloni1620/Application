function validation(){
    if(document.formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enetr Username*";
        return false;
    }
    else if(document.formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter*";
        return false;
    }
    else if(document.formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.formfill.Password.value!==document.formfill.CPassword.value){
        document.getElementById("result").innerHTML="Password does'n matched";
        return false;
    }
    else if(document.formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter confirm Password";
        return false;
    }
    else if(document.formfill.CPassword.value!== document.formfill.CPassword.value){
        document.getElementById("result").innerHTML="Password must be 6-digits";
        return false;
    }
    else if(document.formfill.Password.value!== document.formfill.CPassword.value){
        popus.classList.add("open-slide")
        return false;
    }
}
var popus=document.getElementById('popus');
function closeSlide(){
    popus.classList.remove("open-slide")
}
    

    

    

