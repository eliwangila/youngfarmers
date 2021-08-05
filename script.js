function validate() {
    var n = document.getElementById("n1").value;
    var e = document.getElementById("e2").value;
    var y = document.getElementById("y3").value;
    var p = document.getElementById("p4").value;
    var m = document.getElementById("m5").value;

    //validation required before submiting form
    if (n1.value == '') {
        alert("Please enter Name of the product");
        n1.focus();
        return false;
    }
    if (e2.value == '') {
        alert("Please enter your email");
        e2.focus();
        return false;

    }
    if (y3.value == '') {
        alert("Please enter your number");
        y3.focus();
        return false;
    }
    if (p4.value == '') {
        alert("Please enter your Category");
        p4.focus();
        return false;
    }
    if (m5.value == '') {
        alert("Please enter your product description");
        m5.focus();
        return false;
    } else {
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

function submitForm() {
    $('contactForm[name="contactForm"]').submit();
    $('input[type="text"], textarea').val('');
}
$("#but").click(function(event) {
    event.preventDefault();
    alert("Thank you for your message, we'll get back to you as soon as we can")
    $("#deliver").show();

});



function validate() {
    var n = document.getElementById("kk1").value;
    var e = document.getElementById("k2").value;
    var y = document.getElementById("k3").value;
    var p = document.getElementById("k4").value;
    var m = document.getElementById("k5").value;

    //validation required before submiting form
    if (kk1.value == '') {
        alert("Please enter Name of the product");
        k1.focus();
        return false;
    }
    if (k2.value == '') {
        alert("Please enter your Price");
        k2.focus();
        return false;

    }
    if (k3.value == '') {
        alert("Please enter your Category");
        k3.focus();
        return false;

    }
    if (k4.value == '') {
        alert("Please enter your Title");
        k4.focus();
        return false;
    }
    if (k5.value == '') {
        alert("Please enter your product description");
        k5.focus();
        return false;
    } else {
        alert("Your message has been sent");
        return true;
    };
};

function submitForm() {
    $('contactForm[name="contactForm"]').submit();
    $('input[type="text"], textarea').val('');
}
$("#but").click(function(event) {
    event.preventDefault();
    alert("We have a customer for your goods, we'll share the contact")
    $("#deliver").show();

});