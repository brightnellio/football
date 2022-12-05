function payWithPaystack(e) {
    e.preventDefault();
    let handler = PaystackPop.setup({
    key: 'pk_live_3c839c493345d0a9f1729845519db70dc75cc257', // Replace with your public key 


      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      customerid: document.getElementById("customerid").value,
      orderid: document.getElementById("orderid").value,
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),
      currency: 'GHS',
      pdate: document.getElementById("pdate").value,
      // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function() {
        alert('Window closed.');
      },
      callback: function(response) {
      let message = 'Payment complete! Reference: ' + response.reference;

      // alert (message);

        window.location = `../actions/process_payment.php?email=${document.getElementById("email-address").value}&amount=${document.getElementById("amount").value}&reference=${response.reference}&customerid=${document.getElementById("customerid").value}&pdate=${document.getElementById("pdate").value}&submit=true`;

      }
      });
    handler.openIframe();
    }
    