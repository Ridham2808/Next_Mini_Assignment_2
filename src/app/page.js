import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';

const links = [
  { title: "Learn Overview", desc: "Static overview of the app.", href: "/learn" },
  { title: "Funds (ISR)", desc: "Daily refreshed list of curated funds.", href: "/learn/funds" },
  { title: "Fund Detail (SSR)", desc: "Dynamic details of a scheme.", href: "/learn/fund/122639" },
  { title: "Tools (CSR)", desc: "Search mutual funds by code.", href: "/learn/tools" },
  { title: "Market Snapshot (ISR)", desc: "Hourly refreshed market snapshot.", href: "/market" },
  { title: "Market Fund (SSR)", desc: "Dynamic performance analysis.", href: "/market/fund/120492" },
  { title: "Compare Funds (CSR)", desc: "Compare up to 3 schemes.", href: "/market/compare" },
  { title: "About (SSG)", desc: "App Router + Pages Router explained.", href: "/market/about" },
];

export default function HomePage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Mutual Fund Dashboard — Assignment 2
      </Typography>
      <Typography variant="body1" gutterBottom>
        Explore mutual fund data using different Next.js rendering methods:
        CSR, SSR, ISR, and SSG — all in one project.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {links.map((link, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%" }}>
              <CardContent>
                <Typography variant="h6">{link.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {link.desc}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  component={Link}
                  href={link.href}
                >
                  Go
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
