# Digital-Solution — Digital Products & Web Services Storefront

A high-converting, modern digital storefront designed specifically to pass **Creem Merchant Compliance & Underwriting Review**. Ready for one-click deployment to **Vercel** via **GitHub**.

---

## 💎 Features & Compliance Readiness

- **Exact Pricing Catalog:** Maps all 11 required price points cleanly:
  - **Digital Downloads:** $12, $23, $39, $44, $66, $76, $88
  - **Fixed-Scope Services:** $98, $116, $142, $229
- **Compliance Architecture:** Zero AI-wrapper ambiguity. Uses clear, defensible deliverables (instant ZIP/Figma files and 24-72h technical audit & deployment SLAs).
- **Mandatory Compliance Pages:**
  - `/terms` — Terms of Service & Commercial Licensing
  - `/privacy` — Privacy Policy (GDPR/CCPA compliant)
  - `/refund` — Transparent 14-day Refund & Cancellation Policy
  - `/contact` — Contact details, support ticketing, and fulfillment desk
- **Tech Stack:** Next.js 14 (App Router) + Tailwind CSS (Zero external configuration needed for Vercel).

---

## 🚀 How to Deploy to GitHub & Vercel

### Option A: Using GitHub Desktop (Easiest & No Terminal Needed)
1. Download and open **[GitHub Desktop](https://desktop.github.com/)**.
2. Click **File** > **Add Local Repository...**
3. Choose this folder: `C:\Users\ahimo\.gemini\antigravity\scratch\stackcraft-studio`.
4. If prompted that it is not a Git repo, click **"create a repository"**.
5. Click **"Publish repository"** to push it to your GitHub account (named `digital-solution`).
6. Head to **[Vercel.com](https://vercel.com)**:
   - Click **Add New...** > **Project**.
   - Import the newly created `digital-solution` GitHub repository.
   - Click **Deploy**. Vercel will build and give you a live production URL (e.g., `digital-solution.vercel.app`) in under 60 seconds!

### Option B: Using Git Command Line (If Git is installed)
```bash
cd C:\Users\ahimo\.gemini\antigravity\scratch\stackcraft-studio
git init
git add .
git commit -m "Initial commit of Digital-Solution storefront"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/digital-solution.git
git push -u origin main
```
Then import the repository into Vercel.

---

## 💳 Connecting Your Creem Checkout Links

When you create your products inside the Creem merchant dashboard:
1. Open [`src/data/products.ts`](./src/data/products.ts).
2. Replace each placeholder `creemCheckoutUrl`:
   ```typescript
   creemCheckoutUrl: "https://creem.io/checkout/YOUR_REAL_CREEM_PRODUCT_ID",
   ```
3. Commit and push — Vercel will automatically redeploy the latest changes.

---

## 📋 Checklist Before Submitting to Creem Review

- [x] All 11 prices clearly displayed with explicit deliverables.
- [x] Terms of Service page live and accessible at `/terms`.
- [x] Privacy Policy page live and accessible at `/privacy`.
- [x] Refund & Cancellation Policy page live and accessible at `/refund`.
- [x] Contact page with working email address live at `/contact`.
- [x] Clear fulfillment SLAs (Instant download vs. 24-72h for services).
- [x] Zero references to generative AI, prompt generation, or unpredictable API tokens.
