import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function FundSummaryCard({ code, name, nav, date }) {
  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography>NAV: {nav}</Typography>
        <Typography>Date: {date}</Typography>
        <Button component={Link} href={`/learn/fund/${code}`} variant="outlined" sx={{ mt: 1 }}>
          Details
        </Button>
      </CardContent>
    </Card>
  );
}
