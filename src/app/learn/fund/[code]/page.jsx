import NavBar from "@/components/NavBar";
import FundDetail from "@/components/FundDetail";
import EmptyState from "@/components/EmptyState";

export const dynamic = "force-dynamic"; // SSR

async function fetchFund(code) {
  try {
    const res = await fetch(`https://api.mfapi.in/mf/${code}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function FundPage({ params }) {
  const { code } = params;
  const data = await fetchFund(code);

  if (!data?.data) return <EmptyState message="Invalid or missing scheme code." />;

  const latest = { nav: data.data[0].nav, date: data.data[0].date };
  const history = data.data.slice(0, 30);

  return (
    <div>
      <FundDetail scheme={data.meta.scheme_name} latest={latest} history={history} />
    </div>
  );
}
