# EduCourses Website (Handlebars + Vite)

This project is a redesigned version of the EduCourses website using a modern development workflow.  
It focuses on clean component structure, reusable layout templates, and optimized asset handling.

---

## 🧩 Templating Engine Used

**Handlebars ( `.hbs` )**

Handlebars is used to break pages into reusable components such as:
- `layout.hbs` (main layout wrapper)
- `header.hbs` (navigation bar)
- `footer.hbs` (site footer)
- Page templates (`home.hbs`, `about.hbs`, `contact.hbs`)

This makes the website easier to maintain and avoids repeating HTML across pages.

---

## ⚡ Bundler / Dev Server

**Vite**

Vite is used because:
- It provides instant hot-reload development.
- Files update in real-time without manually refreshing.
- It builds optimized static files for deployment.

---


## 🛠️ Installation & Setup

### 1. Clone the Repository
git clone <your-repo-link>
cd <your-project-folder>


### 2. Install Dependencies
npm install

### 3. Run the Development Server
npm run dev

Then open:
http://localhost:5173/

### 4. Build for Production
npm run build
