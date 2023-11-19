import { useState } from "react";
import { AverageDepositRate } from "../../../types/bank.ts";

export default function DepositAverageBox({
  fetchData,
}: {
  fetchData: () => Promise<AverageDepositRate>;
}) {
  const [average, setAverage] = useState(0);
  fetchData().then((data) => setAverage(data.normal_interest_rate__avg));

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <h1 className="text-3xl">AVERAGE</h1>
      <div className="text-4xl">{average}</div>
    </div>
  );
}
