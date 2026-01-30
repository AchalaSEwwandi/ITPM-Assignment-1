# ITPM-Assignment-1
Singlish to Sinhala Translator – Playwright Tests

## 👨‍🎓 Student Information
- **Name:** Achala Karunarathna
- **IT Number:** IT23553514
- **Module:** Information Technology Project Management
- **Assignment:** 01 - Playwright Testing Project

---

## 🔧 Project Overview
Automated Playwright tests for the Singlish → Sinhala translator available at https://www.swifttranslator.com/.

## ✅ Prerequisites
- Node.js (recommended v18 or later)
- npm (comes with Node.js)

## 💡 Install dependencies
Open a terminal (PowerShell on Windows) at the project root and run:

```powershell
npm install
# Install Playwright browsers (required to run tests)
npx playwright install
```

If you prefer adding a convenience script, add this to your `package.json` under `scripts`:

```json
"scripts": {
  "test": "npx playwright test",
  "show-report": "npx playwright show-report"
}
```

## ▶️ Run tests
- Run all tests:

```powershell
npx playwright test
```

- Run a single test file:

```powershell
npx playwright test tests/singlish-to-sinhala.spec.ts
```

- Run tests in headed mode (see browser window):

```powershell
npx playwright test --headed
```

## 📊 Test reports
After a test run, open the HTML report with:

```powershell
npx playwright show-report
# or open the file directly: playwright-report/index.html
```

## ⚠️ Troubleshooting
- If browsers fail to install, re-run `npx playwright install` with elevated privileges.
- If tests fail, check `playwright-report/` and `test-results/` for error details.

---

If you want, I can also add useful npm scripts to `package.json` to make running tests simpler. ✅
