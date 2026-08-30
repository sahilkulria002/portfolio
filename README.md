# Robotics Engineer Portfolio

A modern, technical portfolio website built with React + Vite for a robotics engineer. Features a dark, minimalist design inspired by engineering labs and includes a 3D robotic arm visualization using React Three Fiber.

## Features

- **Dark Technical Aesthetic**: Premium engineering-focused design
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **3D Visualization**: Interactive 3D robotic arm in hero section
- **Smooth Animations**: Subtle motion effects using Framer Motion
- **Component-Based Architecture**: Easy to maintain and update
- **GitHub Pages Ready**: Fully static site optimized for deployment
- **Accessibility**: Semantic HTML, keyboard navigation, color contrast

## Project Structure

```
src/
├── components/          # React components for each section
├── data/               # Portfolio content (separate from UI)
│   ├── profile.js
│   ├── experience.js
│   ├── projects.js
│   └── skills.js
├── assets/             # Images and static files
├── App.jsx
├── App.css
├── index.css
└── main.jsx

dist/                   # Production build output
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Customization

### Update Your Information

Edit these files to add your information:

1. **src/data/profile.js** - Your name, bio, links, and personal info
2. **src/data/experience.js** - Work experience and projects
3. **src/data/projects.js** - Featured projects and personal robotics work
4. **src/data/skills.js** - Technical skills by category

### Add Project Images

Place project images in `public/images/` and reference them in the projects data.

### Customize Colors and Fonts

Edit `src/index.css` and component-specific CSS files to customize the design.

## Building for Production

```bash
# Build the optimized production version
npm run build

# Output will be in the dist/ folder
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file with GitHub Actions workflow
2. Push to your `main` branch
3. GitHub will automatically build and deploy to `gh-pages` branch

### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. The `dist/` folder contains your static site
3. Deploy via GitHub Pages settings

## Technologies Used

- React 18
- Vite
- Three.js & React Three Fiber
- Framer Motion
- CSS3

---

Built for robotics. Deployed on GitHub Pages.
