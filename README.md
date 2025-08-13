# Resume Website (React + Vite)

## 🌐 Live Demo

🔗 [View the website here](https://patnarongsak.github.io/Resume-website-React)

---

This is a modern, responsive resume website built with React and Vite. It features a clean design, SPA navigation, and is optimized for both desktop and mobile devices.

## Features

- Responsive layout for all devices
- SPA navigation using `react-router-dom`
- Profile card, About, Resume, and Footer sections
- Pixel-perfect, modern UI with custom CSS
- Easy to customize and deploy

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/PatNarongsak/Resume-website-React.git
cd react-website
npm install
```

### Running the Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173` by default.

### Building for Production
```bash
npm run build
```
The output will be in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
react-website/
├── component/
│   └── header.jsx
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── assets/
│       └── react.svg
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Customization

- Edit content in `src/App.jsx` and components in `component/` to update your resume details.
- Update styles in `src/App.css` and other CSS files for custom theming.

## Deployment

You can deploy the production build (`dist` folder) to any static hosting service, such as Vercel, Netlify, or GitHub Pages.

## License

This project is open source and available under the [MIT License](LICENSE).
