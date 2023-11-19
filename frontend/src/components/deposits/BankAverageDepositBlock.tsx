export default function BankAverageDepositBlock({
  name,
  average,
}: {
  name: string;
  average: number;
}) {
  return (
    <tr>
      <td className="text-2xl text-center">{name}</td>
      <td className="text-2xl text-center">{average}%</td>
    </tr>
  );
}
