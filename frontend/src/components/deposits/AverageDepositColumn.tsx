import DepositAverageBox from "./DepositAverageBox.tsx";
import { AverageDepositRate } from "../../../types/bank.ts";

export default function AverageDepositColumn({
  fetchData,
}: {
  fetchData: () => Promise<AverageDepositRate>;
}) {
  return (
    <>
      <DepositAverageBox fetchData={fetchData} />
    </>
  );
}
