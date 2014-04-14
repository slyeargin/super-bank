(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize() {
    $('.btn').click(getAmount);
  }

  var balance = 1000;
  var amt;
  var fee;

  function getAmount() {
    var op = $(this).data('op');
    amt = $('#amount').val() * 1;
    switch(op){
      case 'deposit':
        balance = deposit(amt, balance);
        break;
      case 'withdraw':
        balance = withdrawal(amt, balance);
        if (balance < 0) {
          fee = 50;
          balance -= fee;
        }
        break;
    }

    $('#display > span').text(balance);
    printLedger(fee, op, amt, balance);
  }

  function deposit(amt, balance) {
    balance += amt;
    return balance;
  }

  function withdrawal(amt, balance) {
    balance -= amt;
    return balance;
  }

  function printLedger(fee, op, input, balance) {
    var $tr = $('<tr>');
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>');
    $td1.addClass('fee').text(fee);
    $td2.addClass('deposit');
    $td3.addClass('withdraw');
    $td4.addClass('balance').text(balance);
    switch(op){
      case 'deposit':
        $td2.text(amt);
        break;
      case 'withdraw':
        $td3.text(amt);
        break;
    }
    $tr.append($td1, $td2, $td3, $td4);
    $('#ledger > table > tbody').append($tr);
  }


})();
