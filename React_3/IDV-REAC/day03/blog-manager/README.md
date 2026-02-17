# 📝 Blog Manager

A simple personal mini-blog built with **React + TypeScript + Vite**.  
You can **create**, **view**, **edit**, and **delete** articles — all saved locally in your browser (no backend).

---

## 🚀 Project Description

This project is a small blog manager made for learning React with TypeScript.  
It lets users write posts (title, category, content, author) and store them directly in the **localStorage**.  
You can use it offline, since everything works in your browser only.

Features:
- 🏠 Home page
- 📄 List of all articles
- ✏️ Create new article
- 🔍 View one article
- 🗑️ Edit or delete existing articles
- 💾 Data is stored locally (no API or database)
- 🧭 Navigation with React Router

---

## 🧠 Technologies

- [React](https://react.dev/) (frontend library)
- [TypeScript](https://www.typescriptlang.org/) (typed JavaScript)
- [Vite](https://vitejs.dev/) (fast dev server)
- [React Router](https://reactrouter.com/) (navigation)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) (data persistence)
- ESLint + Prettier for clean code

---

## 🛠️ Installation Guide (step by step)

Follow these steps carefully 👇

### 1️⃣ Download or Clone the project
If you downloaded a `.zip`, extract it.  
Or clone it from git:
```bash
git clone https://rendu-git.etna-alternance.net/module-10201/activity-54439/group-1066872

Then go inside:
cd IDV-REAC/day03/blog-manager

2️⃣ Install dependencies
This will download all the libraries the project needs.
npm install

3️⃣ Start the project
To run the app locally:
npm run dev
After that, you’ll see something like:
> Local: http://127.0.0.1:5173/
👉 Open that link in your browser.

4️⃣ Use the app
Go to /new to create a new article.
Go to /articles to see your list.
Click on a title to open and read it.
You can edit or delete articles easily.
Your posts are saved even if you refresh the page.

🧩 Folder Structure
blog-manager/
├── src/
│   ├── pages/          # All pages (Home, Articles, NewArticle, ArticleDetail)
│   ├── useArticles.ts  # Logic for adding/deleting/updating
│   ├── storage.ts      # Save & load from localStorage
│   ├── types.ts        # TypeScript interfaces
│   ├── App.tsx         # Main layout (header, footer, navigation)
│   ├── main.tsx        # Entry point + router
│   └── styles.css      # Simple styling
├── index.html
├── package.json
└── README.md

Author
Name: Lounes Sifouane
School: ETNA
Project: IDV-REAC / Day03 — Blog Manager
Year: 2025