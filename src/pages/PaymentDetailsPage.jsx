import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
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
          <div>
            <p>Card Number: {payment.cardNumber}</p>
            <p>Card Type: {payment.cardType}</p>
            <p>Card Owner: {payment.cardOwner}</p>
            <p>
              {payment.isPaid ? "Paid:" : "In Progres"} {payment.amount}$
            </p>
          </div>
          <div>
            <Link to="subpage-a">Subpage A</Link>
            <Link to="subpage-b">Subpage B</Link>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
}
