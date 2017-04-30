/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-signup-btn');
  
  //Set Stripe public key.
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  
  //When user clicks form submit btn,
  submitBtn.click(function(event){
    
  //prevent default submission behaviour.    
  event.preventDefault();
  
  //Collect Credit Card fields.
  var ccNum = $('#card-number').val(),
      cvcNum = $('#card-code').val(),
      expMonth = $('#card-month').val(),
      expYear = $('#card-year').val();
      
  //Send a card info to Stripe.
  Stripe.createToken({
    number: ccNum,
    cvc: cvcNum,
    exp_month: expMonth,
    exp_year: expYear
  }, stripeResponseHandler);
  
  });    


  //Stripe will return with card token.
  //Inject card token as hidden field into form.
  //Submit form to our Rails app.
});