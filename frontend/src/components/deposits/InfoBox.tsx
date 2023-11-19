export default function InfoBox({ text }: { text: string }) {
  return (
    <div className="text-2xl flex items-center justify-center">
      <span>{text}</span>
    </div>
  );
}
