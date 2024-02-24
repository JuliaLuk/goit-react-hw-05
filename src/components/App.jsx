import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import HomePage from "../pages/HomePage";
import PaymentsPage from "../pages/PaymentsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
