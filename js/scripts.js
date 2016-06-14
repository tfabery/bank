//====================BackEnd=====================
function Account(name, initial) {
  this.name = name;
  this.balance = initial;
}

Account.prototype.transaction = function(deposit, withdraw) {
  this.balance = this.balance + deposit - withdraw;
}
//====================FrontEnd====================
$(function() {
  var newAccount;
  var paymentArray = window.location.hash.substring(1).split('-');
  $("input#withdraw").val(paymentArray[0]);
  $("input#name").val(paymentArray[1]);
  $("input#initial").val(paymentArray[2]);

if (paymentArray.length === 3) {
  function submitSignUp(event) {
    event.preventDefault();
    // console.log('hey');
    var name = $("input#name").val();
    var initial = parseFloat($("input#initial").val());
    newAccount = new Account(name, initial);

    $(".result").show();
    $(".result h2").text(newAccount.name + ", your balance is: ");
    $("#balance").text("$" + newAccount.balance.toFixed(2));
    $("input#name").val('');
    $("input#initial").val(1000000);
  }

  function submitTransaction(event) {
    event.preventDefault();
    var deposit = parseFloat($("input#deposit").val());
    var withdraw = parseFloat($("input#withdraw").val());
    newAccount.transaction(deposit, withdraw);
    $(".result").show();
    $(".result h2").text(newAccount.name + ", your balance is: ");
    $("#balance").text("$" + newAccount.balance.toFixed(2));
    $("input#deposit").val(0);
    $("input#withdraw").val(0);
  }

  $('.signup-form').submit(submitSignUp(event));
  $('.withdraw-form').submit(submitTransaction(event));
}

  $('.signup-form').submit(function(event) {
    event.preventDefault();
    // console.log('hey');
    var name = $("input#name").val();
    var initial = parseFloat($("input#initial").val());
    newAccount = new Account(name, initial);

    $(".result").show();
    $(".result h2").text(newAccount.name + ", your balance is: ");
    $("#balance").text("$" + newAccount.balance.toFixed(2));
    $("input#name").val('');
    $("input#initial").val(1000000);
  });

  $('.withdraw-form').submit(function(event) {
    event.preventDefault();
    var deposit = parseFloat($("input#deposit").val());
    var withdraw = parseFloat($("input#withdraw").val());
    newAccount.transaction(deposit, withdraw);
    $(".result").show();
    $(".result h2").text(newAccount.name + ", your balance is: ");
    $("#balance").text("$" + newAccount.balance.toFixed(2));
    $("input#deposit").val(0);
    $("input#withdraw").val(0);
  });
});
