import { BrowserRouter, Route, Routes } from "react-router-dom";
import BankInfoPage from "./pages/BankInfoPage.tsx";
import DepositOfferPage from "./pages/DepositOfferPage.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/banks" element={<BankInfoPage />} />
        <Route path="/deposits" element={<DepositOfferPage />} />
      </Routes>
    </BrowserRouter>
  );
}
