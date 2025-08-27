export async function fetchFundData(code) {
  try {
    const res = await fetch(`https://api.mfapi.in/mf/${code}`);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (err) {
    console.error("Error fetching fund:", err);
    return null;
  }
}
