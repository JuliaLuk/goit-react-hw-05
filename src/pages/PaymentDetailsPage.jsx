import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getPaymentsById } from "../api";
import { PageTitle } from "../components/PageTitle";
import { BackLink } from "../components/Backlink";

export default function PaymentDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  // console.log("PaymentDetailsPage: ", backLinkRef);
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
      <PageTitle>Payment details</PageTitle>
      <BackLink href={backLinkRef.current ?? "/payments"}>
        BACK to all payments
      </BackLink>

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
          <div style={{ display: "flex", gap: 10 }}>
            <Link to="subpage-a">Subpage A</Link>
            <Link to="subpage-b">Subpage B</Link>
          </div>
          <Suspense fallback={<b>Loading page...</b>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}
