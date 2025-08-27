import { Typography, Table, TableBody, TableCell, TableRow } from "@mui/material";

export default function FundDetail({ scheme, latest, history }) {
  return (
    <div className="p-4">
      <Typography variant="h5">{scheme}</Typography>
      <Typography>Latest NAV: {latest.nav} (as of {latest.date})</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Last 30 entries</Typography>
      <Table>
        <TableBody>
          {history.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.nav}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
