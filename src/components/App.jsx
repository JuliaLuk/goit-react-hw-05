import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import HomePage from "../pages/HomePage";
import PaymentsPage from "../pages/PaymentsPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentDetailsPage from "../pages/PaymentDetailsPage";
import { SubpageA } from "./SubpageA";
import { SubpageB } from "./SubpageB";

export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
          <Route path="subpage-a" element={<SubpageA />} />
          <Route path="subpage-b" element={<SubpageB />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
