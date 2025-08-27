import NavBar from "@/components/NavBar";
import FundList from "@/components/FundList";

const fixedCodes = ["122639","120492","125497","118825","125354"];

async function fetchFund(code) {
  const res = await fetch(`https://api.mfapi.in/mf/${code}`);
  if (!res.ok) return null;
  const data = await res.json();
  if (!data?.data) return null;

  const latest = data.data[0];
  const past = data.data.find(d => {
    const d30 = new Date();
    d30.setDate(d30.getDate() - 30);
    const dd = new Date(d.date);
    return Math.abs(dd - d30) <= 3 * 24 * 60 * 60 * 1000;
  });

  const return1m = past ? (((latest.nav - past.nav) / past.nav) * 100).toFixed(2) + "%" : "—";

  return {
    code,
    name: data.meta.scheme_name,
    nav: latest.nav,
    date: latest.date,
    return1m
  };
}

export async function getStaticProps() {
  const results = await Promise.all(fixedCodes.map(fetchFund));
  return {
    props: { funds: results.filter(Boolean) },
    revalidate: 3600
  };
}

export default function MarketPage({ funds }) {
  return (
    <div>
      <NavBar />
      <h1 className="p-4 text-xl">Market Snapshot (ISR)</h1>
      <FundList funds={funds} />
    </div>
  );
}
