# Playwright Automation API + UI Test

## Overview

This project demonstrates:

* API Automation using DummyJSON
* UI Automation using SauceDemo
* Page Object Model (POM)
* Environment-based configuration using `.env`

---

## Tech Stack

* Playwright (JavaScript)
* Node.js
* AJV (Schema Validation)

---

## Project Structure

```text
project-root/
├── .env                     # Environment configuration file (git-ignored)
├── .env.example/            # Setup directory containing default settings
│   └── env_setup.txt
├── tests/
│   ├── api/
│   │   └── api.spec.js      # API automation test spec
│   └── ui/
│       └── frontend.spec.js # UI automation test spec
├── pages/                   # Page Object Model classes
│   ├── loginpage.js
│   ├── inventorypage.js
│   ├── cartpage.js
│   ├── checkoutpage.js
│   └── checkoutcompletepage.js
├── utils/                   # Helper files and validators
│   ├── apihelper.js
│   ├── data.json
│   └── schemavalidator.js
├── playwright.config.js.    # Playwright configuration
├── package-lock.json
└── package.json          
```

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/miteshkakkad838/playwright-automation-framework.git
cd playwright-automation-framework
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

### 4. Setup Environment Variables

Create a `.env` file in root and add:

```env
# API
BASE_URL=https://dummyjson.com
APP_USERNAME=emilys
APP_PASSWORD=emilyspass

# UI
STORE_URL=https://www.saucedemo.com
STORE_USER=standard_user
STORE_PASSWORD=secret_sauce
```

---

## Running Tests

### Run All Tests

```bash
npx playwright test
```

---

### Run UI Tests Only

```bash
npx playwright test tests/ui/frontend.spec.js
```

---

### Run API Tests Only

```bash
npx playwright test tests/api/api.spec.js
```

---

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

### View HTML Report

```bash
npx playwright show-report
```

---

## Test Coverage

### API Automation

* Login and token extraction
* Fetch user cart
* Add product to cart
* Validate response schema using AJV

---

### UI Automation

* Login with standard user
* Sort products by price (high → low)
* Verify sorting logic
* Add top 2 expensive products
* Verify items in cart
* Complete checkout flow
* Validate order confirmation

---

## Main Features

* Page Object Model (POM)
* Dynamic waits using Playwright assertions
* Environment-based configuration
* Clean and maintainable structure
* Strong validations (sorting, cart, API schema)
