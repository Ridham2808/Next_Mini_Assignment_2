"use client";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar className="flex gap-4">
        <Typography variant="h6" className="flex-grow">MF Dashboard</Typography>
        <Button color="inherit" component={Link} href="/learn">Learn</Button>
        <Button color="inherit" component={Link} href="/market">Market</Button>
        <Button color="inherit" component={Link} href="/learn/tools">Tools</Button>
        <Button color="inherit" component={Link} href="/market/compare">Compare</Button>
        <Button color="inherit" component={Link} href="/market/about">About</Button>
      </Toolbar>
    </AppBar>
  );
}
