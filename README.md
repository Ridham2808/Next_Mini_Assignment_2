# 📊 MF Dashboard — Dual Router (Next.js)  
**Routing + Data Fetching with App Router _and_ Pages Router in one project**

This project demonstrates **both Next.js routers living together** in a single codebase:

- **App Router** under `/learn/*`
- **Pages Router** under `/market/*`

It purposely mixes **CSR, SSR, SSG, ISR** across different routes and uses only the **MFAPI** endpoints allowed in the assignment.

---

## 🔗 Live Route Map (8 routes total)

### A) App Router (`/learn/*`)
| Path | Render | Data | Why this method |
|---|---|---|---|
| `/learn` | **SSG** | — | Pure static overview and links. Fast, no fetch needed. |
| `/learn/funds` | **ISR (revalidate: 86400s)** | Server fetch of curated 10 scheme codes | “Daily” snapshot good enough for learning list; avoids rebuilding on every request. |
| `/learn/fund/[code]` | **SSR** | Server fetch on each request for the specific code | Detail page should always reflect latest NAV list; handles invalid codes gracefully. |
| `/learn/tools` | **CSR** | Client fetch _after user action_ | Interactive search; no data until user types a code. |

### B) Pages Router (`/market/*`)
| Path | Render | Data | Why this method |
|---|---|---|---|
| `/market` | **ISR (getStaticProps, revalidate: 3600s)** | Server fetch for a fixed list of 5 codes | Hourly “market snapshot” is fresh enough and highly cacheable. |
| `/market/fund/[code]` | **SSR (getServerSideProps)** | Server fetch on request | Must compute “recent performance” with nearest historical points; needs per-request freshness. |
| `/market/compare` | **CSR** | Client fetch for up to 3 codes | User-driven ad-hoc comparison; compute locally after user inputs. |
| `/market/about` | **SSG** | — | Static explainer of architecture, render modes, and data source. |

> ✅ This satisfies the requirement that each rendering mode (CSR/SSR/SSG/ISR) is clearly used at least once.

---

## 🧱 Tech Stack

- **Next.js** (App Router + Pages Router together)
- **Material UI (MUI)** for a clean **Material Design**, mobile-first UI
- **JavaScript / JSX**
- **Fetch API** (no extra data libs)
- **ES modules** + modern tooling from `create-next-app`

---

## 📂 Project Structure



```bash
mf-dashboard/
├─ (src/)?app/                       # App Router
│  ├─ layout.js
│  ├─ globals.css
│  └─ learn/
│     ├─ page.jsx                    # /learn (SSG)
│     ├─ funds/page.jsx              # /learn/funds (ISR, daily)
│     ├─ fund/[code]/page.jsx        # /learn/fund/[code] (SSR)
│     └─ tools/page.jsx              # /learn/tools (CSR)
├─ (src/)?pages/                     # Pages Router
│  └─ market/
│     ├─ index.jsx                   # /market (ISR hourly)
│     ├─ fund/[code].jsx             # /market/fund/[code] (SSR)
│     ├─ compare.jsx                 # /market/compare (CSR)
│     └─ about.jsx                   # /market/about (SSG)
├─ components/
│  ├─ NavBar.jsx
│  ├─ AppLinkCard.jsx
│  ├─ FundSummaryCard.jsx
│  ├─ FundList.jsx
│  ├─ FundDetail.jsx
│  ├─ CompareTable.jsx
│  ├─ SearchBar.jsx
│  └─ EmptyState.jsx
├─ utils/
│  └─ fetchFund.js
├─ .env.local                        # curated/fixed codes (documented below)
├─ package.json
└─ README.md