// Import React, styling, and necessary libraries
import React, { useState } from "react";
import "./transaction.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Define the Transaction component
const Transaction = () => {
  // State for wallet address and amount
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (walletAddress.length === 0) {
      toast.error("Wallet address field cannot be empty");
      return;
    }

    const isValidEthAddress = walletAddress.match(/^0x[a-fA-F0-9]{40}$/);
    if (!isValidEthAddress) {
      toast.error("Please enter a valid Ethereum address.");
      return;
    }

    // Check if the amount is within a valid range
    const parsedAmount = await Number(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0 || parsedAmount > 10000) {
      toast.error("Enter amount between 0 and 10000");
      return;
    }

    const userData = { walletAddress, amount: parsedAmount };

    try {
      // Initialize Firestore
      const db = getFirestore();

      // Add data to the "transactions" collection
      const docRef = await addDoc(collection(db, "transactions"), userData);

      toast.success("Transaction submitted successfully");
    } catch (error) {
      toast.error("Transaction Failed");
    }
  };

  // JSX rendering of the Transaction component
  return (
    <section id="transaction">
      {/* Form for wallet address and amount input */}
      <form onSubmit={handleSubmit}>
        <label>
          Wallet Address:
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

// Export the Transaction component
export default Transaction;
