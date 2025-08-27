import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function CompareTable({ data }) {
  if (!data || data.length === 0) return <p>No comparison data</p>;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Metric</TableCell>
          {data.map((f, i) => <TableCell key={i}>{f.scheme_name}</TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Latest NAV</TableCell>
          {data.map((f, i) => <TableCell key={i}>{f.latestNAV}</TableCell>)}
        </TableRow>
        <TableRow>
          <TableCell>Latest Date</TableCell>
          {data.map((f, i) => <TableCell key={i}>{f.date}</TableCell>)}
        </TableRow>
      </TableBody>
    </Table>
  );
}
