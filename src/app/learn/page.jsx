import NavBar from "@/components/NavBar";
import AppLinkCard from "@/components/AppLinkCard";

export default function LearnPage() {
  return (
    <div>
      <h1 className="p-4 text-xl">Learn Section (SSG)</h1>
      <AppLinkCard title="Funds" desc="Explore 10 curated funds" href="/learn/funds" />
      <AppLinkCard title="Fund Details" desc="View NAV history of a fund" href="/learn/fund/122639" />
      <AppLinkCard title="Tools" desc="Search fund by code" href="/learn/tools" />
    </div>
  );
}
