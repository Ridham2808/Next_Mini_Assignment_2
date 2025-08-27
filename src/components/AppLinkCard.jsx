import { Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function AppLinkCard({ title, desc, href }) {
  return (
    <Card sx={{ m: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>{desc}</Typography>
        <Button component={Link} href={href} variant="contained" sx={{ mt: 1 }}>
          Visit
        </Button>
      </CardContent>
    </Card>
  );
}
