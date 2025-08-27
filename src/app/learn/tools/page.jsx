"use client";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import FundSummaryCard from "@/components/FundSummaryCard";
import EmptyState from "@/components/EmptyState";

export default function ToolsPage() {
  const [fund, setFund] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch(code) {
    setError("");
    setFund(null);
    try {
      const res = await fetch(`https://api.mfapi.in/mf/${code}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (!data?.data) throw new Error();
      setFund({
        code,
        name: data.meta.scheme_name,
        nav: data.data[0].nav,
        date: data.data[0].date
      });
    } catch {
      setError("No fund found. Try a different code.");
    }
  }

  return (
    <div>
      <h1 className="p-4 text-xl">Tools (CSR Search)</h1>
      <SearchBar onSearch={handleSearch} />
      {fund && <FundSummaryCard {...fund} />}
      {error && <EmptyState message={error} />}
    </div>
  );
}
