import { useEffect, useState } from "react";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          "https://65c23f3af7e6ea59682af8d1.mockapi.io/payments"
        );
        setPayments(response.data);
      } catch (error) {}
    }
    FetchData();
  }, []);
  return (
    <div>
      <h1>Payments</h1>

      {payments > 0 && (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              <p>Amount: {payment.amount}</p>
              <p>Description: {payment.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
