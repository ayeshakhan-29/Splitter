# Splitter

An app to calculate tip and total bill per person.

## Demo
You can play with these demo projects in your browser, without installing anything on your machine.
https://splitter-phi.vercel.app/

## Setup
### Initialize a demo project locally

1. Initialize a vite-pages project (with npm 7+):
   **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
2.  **Install dependencies:**
    `npm install`
3. `npm run dev` and start the development server and run the application locally.  This command starts the Vite development server, which will watch your files and automatically reload the browser when changes are made. You can view the application by navigating to http://localhost:5173 in your browser.
4. `npm run build` and this command creates an optimized production build of your application in the dist directory.
5. `npm run ssr`. You can [disable javascript in your browser](https://developer.chrome.com/docs/devtools/javascript/disable/), to verify if it can still render.


## Why React and Vite?

React and Vite were chosen for this project due to their powerful combination of features and benefits:

### React

- **Virtual DOM:** React's efficient virtual DOM ensures high performance by minimizing DOM manipulation overhead.
- **Large Ecosystem:** React has a vast ecosystem of libraries and tools, making it easy to find solutions for various development needs.
- **Community Support:** React has a large and active community, providing excellent support, resources, and updates.
- **Component-Based Architecture:** React's component-based architecture allows for building reusable UI components, which simplifies development and maintenance.

### Vite

- **Fast Development:** Vite offers lightning-fast cold server start and instant hot module replacement (HMR), enabling a smooth development experience.
- **Optimized Bundling:** Vite leverages ESBuild for fast bundling and minification, resulting in small bundle sizes and quick builds.
- **Modern JavaScript Support:** Vite supports modern JavaScript features out of the box, allowing developers to use the latest language enhancements.
- **Plugin Ecosystem:** Vite's plugin ecosystem provides additional functionalities and integrations, enhancing the development workflow.

By using React and Vite together, we aim to create a modern, efficient, and productive development environment for building high-quality web applications.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh