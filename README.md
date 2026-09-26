# Digital Solution — Premium Digital Products & Developer Kits

A high-converting, modern white digital storefront designed specifically to pass **Creem Merchant Compliance & Underwriting Review**. Ready for one-click deployment to **Vercel** via **GitHub**.

---

## 💎 Features & Compliance Readiness

- **100% Digital Products:** Strictly downloadable software, codebases, templates, and Figma assets with instant automated email fulfillment (zero prohibited services).
- **Brand Name:** **Digital Solution**
- **Official Support Email:** `support@digitalsolutionpro.shop`
- **Modern White Theme:** High-contrast typography, clean cards, responsive layouts, and accessible UI components.
- **Exact Pricing Catalog:** Maps all 13 required price points cleanly:
  - **UI Kits & Templates:** $12, $22, $24, $38, $39, $44, $66, $76, $88
  - **Advanced Boilerplates & Master Suites:** $98, $116, $142, $229
- **Compliance Architecture:** Zero AI-wrapper ambiguity. Instant downloadable ZIP files, Figma libraries, and private GitHub repository invitations.
- **Mandatory Compliance Pages:**
  - `/terms` — Terms of Service & Software Licensing
  - `/privacy` — Privacy Policy (GDPR/CCPA compliant)
  - `/refund` — Transparent 14-day Refund Policy for digital files
  - `/contact` — Customer Support Desk & Contact Info
- **Tech Stack:** Next.js 14 (App Router) + Tailwind CSS (Zero external configuration needed for Vercel).

---

## 🚀 How to Deploy to GitHub & Vercel

### Option A: Using GitHub Desktop (Easiest & No Terminal Needed)
1. Open **[GitHub Desktop](https://desktop.github.com/)**.
2. Select your `digital-solution` repository.
3. Review the modified files.
4. In the summary box at the bottom-left, type:
   ```text
   Rebuild storefront as 100% pure digital products for Creem compliance
   ```
5. Click **Commit to main**, then click **Push origin**.
6. Vercel will automatically build and deploy the update in under 60 seconds!

---

## 💳 Connecting Your Creem Checkout Links

When you create your products inside the Creem merchant dashboard:
1. Open [`src/data/products.ts`](./src/data/products.ts).
2. Replace each placeholder `creemCheckoutUrl`:
   ```typescript
   creemCheckoutUrl: "https://creem.io/checkout/YOUR_REAL_CREEM_PRODUCT_ID",
   ```
3. Commit and push — Vercel will automatically redeploy the latest changes.