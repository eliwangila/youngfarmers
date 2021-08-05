function validate(){
    var n=document.getElementById("n1").value;  
    var e=document.getElementById("e2").value;  
    var y=document.getElementById("y3").value;  
    var p=document.getElementById("p4").value;
    var m=document.getElementById("m5").value;

    //validation required before submiting form
if(n1.value==''){
    alert("Please enter Name of the product");
    n1.focus();
    return false;
}
if(e2.value==''){
    alert("Please enter your email");
    e2.focus();
    return false; 

}
if(y3.value==''){
    alert("Please enter your number");
    y3.focus();
    return false;
}
if(p4.value==''){
    alert("Please enter your Category");
    p4.focus();
    return false;
}
if(m5.value==''){
    alert("Please enter your product description");
    m5.focus();
    return false;
}
else{
    alert("Your message has been sent");
    return true;
};
};

// $(document).ready(function () {
//     var isFormValid = true;

//     function checkFormValidity(form){
//         isFormValid = true;
//         $(form).find(".check-validity").each(function(){
//             var fieldVal = $.trim($(this).val());
//             if(!fieldVal){
//                 isFormValid = false;
//             }
//         });
//     }


//     //option A
//     $("#form").submit(function (e) {
//         checkFormValidity("#form");
//         if(isForm === ""){
//             alert("Submit Form Submitted!!! :D");
//         }else{
//             alert("Form is not valid :(");
//         }
//         e.preventDefault();
//     });
// });