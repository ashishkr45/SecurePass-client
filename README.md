# SecurePass

SecurePass is a modern password generator web application built with React, Tailwind CSS, and Framer Motion. It allows users to generate secure, customizable passwords instantly with smooth UI interactions and a clean user experience.

The application focuses on simplicity while providing strong password generation capabilities suitable for everyday security needs.

---

## Features

* Generate secure random passwords
* Adjustable password length
* Toggle inclusion of numbers and special characters
* Animated UI interactions using Framer Motion
* Clean and responsive interface
* Instant password regeneration on setting changes

---

## Tech Stack

* React
* Tailwind CSS
* Framer Motion
* Vite
* JavaScript (ES6+)

---

## Project Structure

```
SecurePass/
│
├── src/
│   ├── assets/           # Backgrounds & images
│   ├── passwordGen.js    # Password generation logic
│   ├── App.jsx           # Main UI logic
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/SecurePass.git
cd SecurePass
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open the displayed local URL in your browser.

---

## How Password Generation Works

SecurePass generates passwords using randomized character selection based on user preferences:

* Base alphabet characters are always included
* Numbers and special characters are optionally added
* Random selection builds the final password
* Password regenerates automatically when settings change

---

## Future Improvements

Possible enhancements:

* Password strength meter
* Save password history
* Dark/light mode toggle
* Export passwords securely
* PWA support

---

## Author

Built as a learning and portfolio project to practice modern React UI patterns and secure random password generation.

---

If you find this project useful, consider giving it a star!