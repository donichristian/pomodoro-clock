
  <div align="center">
  <h1 align="center">Pomodoro Clock</h1>
  <h3>Codebase for the Pomodoro Clock</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=flat" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React%20DOM-004E89?logo=React%20DOM&style=flat" alt='React DOM\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Vite-004E89?logo=Vite&style=flat" alt='Vite\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Tailwind%20CSS-004E89?logo=Tailwind%20CSS&style=flat" alt='Tailwind CSS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-ESLint-004E89?logo=ESLint&style=flat" alt='ESLint\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🌟 Features](#-features)
  - [💻 Technologies Used](#-techologies)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Overview

 This project implements a Pomodoro Clock, a time management technique developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. This implementation allows users to customize session and break lengths, start, pause, and reset the timer, and provides visual and auditory cues upon completion of each interval.

---

## 🌟 Features

- Session Length Control: Adjust the length of work sessions according to personal preferences.
- Break Length Control: Customize the duration of breaks between work sessions.
- Start/Stop Timer: Begin or pause the timer at any point during the session.
- Reset Timer: Reset the timer and all settings to their default values.
- Audio Notification: Receive an auditory cue upon completion of each session or break.

---

## 💻 Technologies Used

- React: Built using React, a JavaScript library for building user interfaces.
- React.memo: Utilized React.memo to memoize the App component, preventing unnecessary re-renders when props don't change.
- React Hooks: Employed useState and useEffect hooks for managing state and side effects respectively.
- HTML Audio: Integrated HTML audio element to provide audio notifications.
- CSS: Styled components with CSS for a visually appealing user interface.

---

## 📁 Repository Structure

```sh
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── src
│   ├── app.css
│   ├── App.jsx
│   ├── clock.css
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── yarn.lock

```

---

## 💻 Code Summary

<details><summary>\src</summary>

| File | Summary |
| ---- | ------- |
| App.jsx |  The code defines a React component called App that renders a Pomodoro timer with break and session length settings, a countdown timer, and buttons to start, stop, reset, and toggle the play/pause state. |
| main.jsx |  The code imports React, ReactDOM, and App from various modules and renders the App component in the root element of the document. |

</details>

---

<details><summary>Root</summary>

| File | Summary |
| ---- | ------- |
| tailwind.config.js |  The code defines a Tailwind CSS configuration file, which specifies the content to be processed (HTML and JavaScript files in the src directory), the theme (no customizations), and the plugins (none). |
| vite.config.js |  The code defines a Vite configuration file that sets up a React project with the `@vitejs/plugin-react-swc` plugin and specifies the base URL for the project as '/pomodoro-clock/'. |

</details>

---

## 🚀 Getting Started
1.  Clone the repository to your local machine.
2. Install dependencies using npm install.
3. Run the project using npm start.
4. Access the application in your web browser at http://localhost:3000.

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
