// Function to transfer money
function transferMoney() {

// Define the accounts and their initial balances
alert('insert card and press ok');

const pin = prompt("Enter your PIN:");
    if (pin !== "1245") { // example PIN, replace with your actual PIN validation logic
      alert("Invalid PIN. Transaction cancelled.");
return;
    }

let account1 = { name: "John Paul", accountNumber: "1234567890", balance: 1000000, bank: "Access Bank" };
let account2 = { name: "Jane Simon", accountNumber: "9876543210", balance: 50000, bank: "GT Bank" };

  // Step 1: Select the source account
  let sourceAccount = prompt(`Select the source account: ${account1.name} or ${account2.name}`);
  sourceAccount = sourceAccount.toLowerCase() === account1.name.toLowerCase() ? account1 : account2;

  // Step 2: Enter the receiver's account number
  let receiverAccountNumber = prompt(`Enter the receiver's account number`);

  // Step 3: Enter the receiver's bank
  let receiverBank = prompt(`Enter the receiver's bank`);

  // Step 4: Enter the amount to transfer
  let amount = parseFloat(prompt(`Enter the amount to transfer from ${sourceAccount.name} to ${receiverAccountNumber} at ${receiverBank}`));

  // Step 5: Confirm the transaction
  let confirmTransaction = confirm(`Confirm transfer of ${amount} from ${sourceAccount.name} at ${sourceAccount.bank} to ${receiverAccountNumber} at ${receiverBank}`);

  if (confirmTransaction) {
    // Step 6: Check if the source account has sufficient funds
    if (sourceAccount.balance >= amount) {
      // Step 7: Transfer the money
      sourceAccount.balance -= amount;
      // Assume the receiver's account is updated elsewhere

      // Display the new balance
      alert(`${amount} transferred from ${sourceAccount.name} at ${sourceAccount.bank} to ${receiverAccountNumber} at ${receiverBank}`);
      alert(`New balance of ${sourceAccount.name}: ${sourceAccount.balance}`);
    } else {
      alert("Insufficient funds in the source account!");
    }
  } else {
    alert("Transaction cancelled!");
  }
}

// Call the transferMoney function
transferMoney();
