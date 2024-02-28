import { useEffect, useState } from "react";

import { getPayments } from "../api";
import { PaymentList } from "../components/PaymentList";
import { PageTitle } from "../components/PageTitle";

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
      <PageTitle>Payments</PageTitle>
      {error && <p>OOOOPS! ERROR!</p>}

      {payments.length > 0 && <PaymentList payments={payments} />}
    </div>
  );
}
