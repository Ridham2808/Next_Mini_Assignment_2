import './globals.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export const metadata = {
  title: 'MF Dashboard',
  description: 'Mutual Fund Dashboard with Dual Router (Assignment 2)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* NavBar */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              MF Dashboard
            </Typography>
            <Button color="inherit" component={Link} href="/learn">Learn</Button>
            <Button color="inherit" component={Link} href="/learn/funds">Funds</Button>
            <Button color="inherit" component={Link} href="/learn/tools">Tools</Button>
            <Button color="inherit" component={Link} href="/market">Market</Button>
            <Button color="inherit" component={Link} href="/market/compare">Compare</Button>
            <Button color="inherit" component={Link} href="/market/about">About</Button>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
