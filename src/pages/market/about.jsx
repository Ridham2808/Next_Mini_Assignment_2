import NavBar from "@/components/NavBar";
import AppLinkCard from "@/components/AppLinkCard";

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <h1 className="p-4 text-xl">About This Dashboard (SSG)</h1>
      <p className="p-4">
        This project demonstrates both App Router (/learn/*) and Pages Router (/market/*) 
        working together. Each route uses a different rendering method (CSR, SSR, SSG, ISR).
        Data comes from <a href="https://api.mfapi.in/mf" target="_blank">MFAPI</a>.
      </p>
      <AppLinkCard title="Learn Funds" desc="See curated funds list" href="/learn/funds" />
      <AppLinkCard title="Market Snapshot" desc="Check 5 funds with 1m return" href="/market" />
    </div>
  );
}
