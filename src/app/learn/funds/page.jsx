import NavBar from "@/components/NavBar";
import FundList from "@/components/FundList";

export const revalidate = 86400; // ISR daily

const curatedCodes = [
  "122639","120492","125497","118825","125354",
  "118955","120166","120586","118778","130503"
];

async function fetchFund(code) {
  const res = await fetch(`https://api.mfapi.in/mf/${code}`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  if (!data?.data) return null;
  return {
    code,
    name: data.meta.scheme_name,
    nav: data.data[0].nav,
    date: data.data[0].date
  };
}

export default async function FundsPage() {
  const results = await Promise.all(curatedCodes.map(fetchFund));
  const funds = results.filter(Boolean);

  return (
    <div>
      <h1 className="p-4 text-xl">Curated Funds (ISR)</h1>
      <FundList funds={funds} />
    </div>
  );
}
