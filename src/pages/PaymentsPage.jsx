import { useEffect, useState } from "react";

import { getPayments } from "../api";
import { Link } from "react-router-dom";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    async function FetchData() {
      try {
        const fetchPayments = await getPayments({
          abortController: controller,
        });
        setPayments(fetchPayments);
        // setPayments((prevPayments) => [...prevPayments, ...fetchPayments]);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    }
    FetchData();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h1>Payments</h1>
      {error && <p>OOOOPS! ERROR!</p>}

      {payments.length > 0 && (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id}>
              <p>Amount: {payment.amount}</p>
              <p>Description: {payment.description}</p>
              <Link to={`/payments/${payment.id}`}>Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
