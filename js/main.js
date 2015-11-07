function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$('form').on('submit', function(evt){
  evt.preventDefault();

  success = function(){
    $('.form').addClass('-fade-out')
    $('.main__title').html('Thank you')
    $('.field__input').remove()
  }

  var email = $('#entry_1656576003').val();
  if (email !== "" && validateEmail(email)) {
    $('.loader').show()
    $('.form__submit').hide()
    $.ajax({
      url: "https://docs.google.com/a/ifyoumakeit.com/forms/d/1m2gfIHsJdjFfWCbQmssWF8HRdKZdT8XiJtp57ROVtpo/formResponse",
      data: {"entry.1656576003" : email},
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: success,
        200: success
      }
    });
  } else {
      $('.field').addClass('-error')
      $('.error-msg').show().html('Please enter a valid email address.')
  }
});
