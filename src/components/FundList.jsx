import FundSummaryCard from "./FundSummaryCard";

export default function FundList({ funds }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {funds.map((f, i) => (
        <FundSummaryCard key={i} {...f} />
      ))}
    </div>
  );
}
