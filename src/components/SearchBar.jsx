"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function SearchBar({ onSearch }) {
  const [code, setCode] = useState("");
  return (
    <div className="flex gap-2 p-4">
      <TextField label="Enter scheme code" value={code} onChange={(e) => setCode(e.target.value)} />
      <Button variant="contained" onClick={() => onSearch(code)}>Search</Button>
    </div>
  );
}
