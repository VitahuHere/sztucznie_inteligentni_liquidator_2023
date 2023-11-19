import { getBankInfo } from "../../services/bankInfo.ts";
import { useEffect, useState } from "react";
import { BankInfoType } from "../../types/bank.ts";

export default function BankInfoTable() {
  const [data, setData] = useState<BankInfoType[]>([]);
  useEffect(() => {
    getBankInfo().then((res) => setData(res));
  }, []);
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left py-3 px-4 font-semibold text-sm">
            Bank Name
          </th>
          <th className="text-left py-3 px-4 font-semibold text-sm">
            Bank Address
          </th>
          <th className="text-left py-3 px-4 font-semibold text-sm">
            Bank NIP
          </th>
          <th className="text-left py-3 px-4 font-semibold text-sm">
            Bank KRS
          </th>
          <th className="text-left py-3 px-4 font-semibold text-sm">
            Bank Capitalization
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((bank) => (
          <tr className="border-b" key={bank.id}>
            <td className="text-left py-2 px-4">{bank.name || "No Info"}</td>
            <td className="text-left py-2 px-4">{bank.address || "No Info"}</td>
            <td className="text-left py-2 px-4">{bank.nip || "No Info"}</td>
            <td className="text-left py-2 px-4">{bank.krs || "No Info"}</td>
            <td className="text-left py-2 px-4">
              {bank.capitalization === "0.000"
                ? "No Info"
                : bank.capitalization}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
