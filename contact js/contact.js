function submitForm() {
    $('contactForm[name="contactForm"]').submit();
    $('input[type="text"], textarea').val('');
  }
$("#but").click(function (event) {
    event.preventDefault();
    alert("Thank you for your message, we'll get back to you as soon as we can")
    $("#deliver").show();

});
