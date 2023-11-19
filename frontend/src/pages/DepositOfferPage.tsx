import AverageDepositColumn from "../components/deposits/AverageDepositColumn.tsx";
import BelowAverageDepositColumn from "../components/deposits/BelowAverageDepositColumn.tsx";
import AboveAverageDepositColumn from "../components/deposits/AboveAverageDepositColumn.tsx";
import InfoBaner from "../components/deposits/InfoBaner.tsx";
import {
  getAboveAverageBusinessDeposit,
  getAboveAverageIndividualDeposit,
  getAverageBusinessDeposit,
  getAverageIndividualDeposit,
  getBelowAverageBusinessDeposit,
  getBelowAverageIndividualDeposit,
} from "../../services/depositOffers.ts";

export default function DepositOfferPage() {
  return (
    <>
      <InfoBaner text={"INDIVIDUAL DEPOSIT OFFERS"} />
      <div className="grid grid-cols-3">
        <BelowAverageDepositColumn
          fetchData={getBelowAverageIndividualDeposit}
        />
        <AverageDepositColumn fetchData={getAverageIndividualDeposit} />
        <AboveAverageDepositColumn
          fetchData={getAboveAverageIndividualDeposit}
        />
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <InfoBaner text={"BUSINESS DEPOSIT OFFERS"} />
      <div className="grid grid-cols-3">
        <BelowAverageDepositColumn fetchData={getBelowAverageBusinessDeposit} />
        <AverageDepositColumn fetchData={getAverageBusinessDeposit} />
        <AboveAverageDepositColumn fetchData={getAboveAverageBusinessDeposit} />
      </div>
    </>
  );
}
