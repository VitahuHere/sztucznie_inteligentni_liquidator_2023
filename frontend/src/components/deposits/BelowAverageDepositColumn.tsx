import InfoBox from "./InfoBox.tsx";
import { useEffect, useState } from "react";
import { BankDepositAverageRate } from "../../../types/bank.ts";
import BankAverageDepositBlock from "./BankAverageDepositBlock.tsx";

export default function BelowAverageDepositColumn({
  fetchData,
}: {
  fetchData: () => Promise<BankDepositAverageRate[]>;
}) {
  const [banks, setBanks] = useState<BankDepositAverageRate[]>([]);
  useEffect(() => {
    fetchData().then((data) => setBanks(data));
  }, [fetchData]);

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <InfoBox text={"Banks below Average Deposit"} />
      <table className="w-2/3">
        <thead>
          <tr>
            <th className="text-2xl">Bank</th>
            <th className="text-2xl">Average</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((bank) => (
            <BankAverageDepositBlock
              name={bank.bank__name}
              average={bank.average_rate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
