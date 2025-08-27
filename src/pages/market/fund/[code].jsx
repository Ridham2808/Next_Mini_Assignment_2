import NavBar from "@/components/NavBar";
import FundDetail from "@/components/FundDetail";
import EmptyState from "@/components/EmptyState";

export async function getServerSideProps({ params }) {
  const { code } = params;
  try {
    const res = await fetch(`https://api.mfapi.in/mf/${code}`);
    if (!res.ok) return { props: { data: null } };
    const data = await res.json();
    return { props: { data } };
  } catch {
    return { props: { data: null } };
  }
}

export default function FundPage({ data }) {
  if (!data?.data) return <EmptyState message="Invalid scheme code" />;

  const latest = { nav: data.data[0].nav, date: data.data[0].date };
  const history = data.data.slice(0, 30);

  return (
    <div>
      <NavBar />
      <FundDetail scheme={data.meta.scheme_name} latest={latest} history={history} />
    </div>
  );
}
