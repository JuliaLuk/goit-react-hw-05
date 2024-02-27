import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPaymentsById } from "../api";

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPayment = await getPaymentsById(paymentId);
        setPayment(fetchedPayment);
      } catch (error) {}
    }
    fetchData(paymentId);
  }, []);
  return (
    <div>
      <h1>PaymentDetailsPage</h1>
      {payment && (
        <div>
          <p>Card Number: {payment.cardNumber}</p>
          <p>Card Type: {payment.cardType}</p>
          <p>Card Owner: {payment.cardOwner}</p>
          <p>
            {payment.isPaid ? "Paid:" : "In Progres"} {payment.amount}$
          </p>
        </div>
      )}
    </div>
  );
}

// "id": "1",
//     "cardNumber": "1234 5678 9012 3456",
//     "cardType": "Visa",
//     "cardOwner": "John Doe",
//     "date": "2024-01-01",
//     "amount": 100,
//     "description": "Payment for groceries",
//     "isPaid": true
