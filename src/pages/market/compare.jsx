"use client";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import CompareTable from "@/components/CompareTable";

export default function ComparePage() {
  const [codes, setCodes] = useState([]);
  const [funds, setFunds] = useState([]);

  async function handleSearch(code) {
    if (!code || codes.includes(code)) return;
    if (codes.length >= 3) return;
    const res = await fetch(`https://api.mfapi.in/mf/${code}`);
    if (!res.ok) return;
    const data = await res.json();
    if (!data?.data) return;
    setCodes([...codes, code]);
    setFunds([
      ...funds,
      {
        scheme_name: data.meta.scheme_name,
        latestNAV: data.data[0].nav,
        date: data.data[0].date
      }
    ]);
  }

  return (
    <div>
      <NavBar />
      <h1 className="p-4 text-xl">Compare Funds (CSR)</h1>
      <SearchBar onSearch={handleSearch} />
      <CompareTable data={funds} />
    </div>
  );
}
