document.getElementById("tip-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the values from the input fields
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);
    
    // Calculate the tip and total
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    
    // Display the results
    document.getElementById("tip-amount").textContent = tipAmount.toFixed(2);
    document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
    });
    
    