//====================BackEnd=====================
function Account(name, initial) {
  this.name = name;
  this.balance = initial;
}

Account.prototype.transaction = function(deposit, withdraw) {
  return this.balance + deposit - withdraw;
}
//====================FrontEnd====================
$(function() {
  var newAccount;

  $('.signup-form').submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var initial = parseFloat($("input#initial").val());
    newAccount = new Account(name, initial);

    $(".result").show();
    $(".result h2").prepend(name + ", your balance is: ");
    $("#balance").text("$" + newAccount.balance.toFixed(2));
    $("input#name").val('');
    $("input#initial").val(1000000);
  });

  $('.withdraw-form').submit(function(event) {
    event.preventDefault();
    var deposit = parseFloat($("input#deposit").val());
    var withdraw = parseFloat($("input#withdraw").val());
    newAccount.balance = newAccount.transaction(deposit, withdraw);
    $("#balance").text("$" + newAccount.balance.toFixed(2));
    $("input#deposit").val(0);
    $("input#withdraw").val(0);
  });
});
