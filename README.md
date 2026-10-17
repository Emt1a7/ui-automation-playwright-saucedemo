# UI Automation Test Suite (Playwright & POM)

An automated UI testing suite built with **Playwright** and **JavaScript** implementing the **Page Object Model (POM)** design pattern against the [SauceDemo](https://www.saucedemo.com/) web application.

---

## 📁 Directory Structure

```text
.
├── q1/
│   ├── pageObject/
│   │   ├── basePage.js
│   │   └── loginPage.js
│   ├── tests/
│   │   └── login.spec.js
│   └── playwright.config.js
├── q2/
│   ├── pageObject/
│   │   ├── basePage.js
│   │   ├── loginPage.js
│   │   ├── sidebarpage.js
│   │   ├── invetorypage.js
│   │   ├── cartPage.js
│   │   └── checkoutOnePage.js
│   ├── tests/
│   │   └── login.spec.js
│   └── playwright.config.js
└── q3/
    ├── pageObject/
    │   ├── basePage.js
    │   ├── loginPage.js
    │   ├── sidebarpage.js
    │   ├── invetorypage.js
    │   ├── cartPage.js
    │   └── checkoutOnePage.js
    ├── tests/
    │   └── login.spec.js
    └── playwright.config.js
```

---

## 🧪 Test Coverage Overview

| Module | User Type | Key Test Scenarios |
| :--- | :--- | :--- |
| **Q1** | `locked_out_user` | • Verifies locked-out user authentication handling.<br>• Validates explicit error message display on login attempt. |
| **Q2** | `standard_user` | • Authenticates standard user.<br>• Resets application state via sidebar.<br>• Selects 3 random inventory items and verifies shopping cart badge count.<br>• Completes checkout flow and asserts order completion message.<br>• Resets app state and logs out. |
| **Q3** | `performance_glitch_user` | • Authenticates performance glitch user.<br>• Applies product sorting filter (**Name: Z to A**).<br>• Adds filtered item to cart and verifies cart count.<br>• Completes full checkout process and order verification.<br>• Resets app state and logs out safely. |

---

## 🛠️ Tech Stack & Dependencies

* **Language:** JavaScript (Node.js)
* **Testing Framework:** [Playwright Test](https://playwright.dev/)
* **Pattern:** Page Object Model (POM)
* **Data Helper:** `@faker-js/faker`

---

## 🚀 Setup & Execution Instructions

### Prerequisites
* **Node.js** (v16 or higher)
* **npm** (Node Package Manager)

### Installation

Clone the repository and install dependencies inside each question directory:

```bash
# Navigate to the target question directory
cd q1 # or cd q2 / cd q3

# Install dependencies
npm install

# Install Playwright browser binaries
npx playwright install
```

### Running Tests

To run the automated tests, execute the following commands inside the respective project directory (`q1`, `q2`, or `q3`):

To go back to Parent folder
cd.. and then to move to specific question folder cd q1 # or cd q2 / cd q3 and then run the tests

```bash
# Run tests in headless mode
npx playwright test

# Run tests in headed mode (visible browser UI)
npx playwright test --headed

# Run tests in debug mode
npx playwright test --debug

# View HTML Test Report
npx playwright show-report
```
