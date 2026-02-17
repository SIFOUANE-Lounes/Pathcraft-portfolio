# Contact CRM

Contact CRM is a small Angular project built as part of an academic assignment.  
The goal of this application is to manage contacts locally without any backend, using only `localStorage`.

This project demonstrates the basics of an Angular 20 application:
- Components & Standalone components
- Routing
- Reactive Forms with validation
- Services for data management
- Local persistence (localStorage)
- Simple UI and modular structure

The application allows users to manage contacts, categories, and favorites in a simple local CRM.

---

## 🚀 Features

### ✔ Contacts
- Create, edit and delete contacts  
- Contact detail page  
- Favorite/unfavorite a contact  
- Filter by name, category or favorites  
- Sort by name or creation date  
- All data is saved in `localStorage`

### ✔ Categories
- Create and delete categories  
- Each category has a name and a color  
- A category **cannot be deleted** if it still contains contacts

### ✔ Favorites
- Dedicated page listing all favorite contacts  
- Favorite displayed with a simple ★ icon

### ✔ Dashboard
- Displays global statistics:
  - total contacts  
  - total favorites  
  - total categories  
  - last created contacts  

---

## 📦 Technologies

This project was built with:

- **Angular 20**
- **TypeScript (strict mode)**
- **ESLint + Prettier**
- **localStorage API**
- **No CSS libraries, no backend, no external UI frameworks**

---

## 📁 Project Structure

src/
├─ app/
│ ├─ pages/ # All pages (contacts, categories, dashboard…)
│ ├─ data.service.ts # LocalStorage management
│ ├─ models.ts # Strict TypeScript interfaces
│ ├─ app.routes.ts # Routing configuration
│ ├─ app.ts # Root component
│ └─ app.component.html # Layout (header, footer, navigation)

yaml
Copier le code

The project uses standalone components for a simpler and more modern Angular structure.

---

## 🔧 Installation

Make sure you have:

- Node.js
- Angular CLI

Then install the project:

```bash
npm install
▶️ Run the Project
To start the development server:

bash
Copier le code
npm start
Then open the app in your browser:

arduino
Copier le code
http://localhost:4200/
The page will update automatically when you edit the source files.

🏗 Design Choices
Standalone components: cleaner project and no need for NgModules

Data service: centralizes all CRUD operations for contacts and categories

Reactive Forms: better validation and more control

localStorage: data persistence without a backend

Simple UI: no CSS frameworks, everything built manually

Strict TypeScript: better for learning and avoiding errors

All these choices allow the project to stay simple and educational while still respecting Angular best practices.

👤 Author
Lounes Sifouane
Student Developer — Angular Learning Project