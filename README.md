# KeenKeeper

KeenKeeper is a React-based web application designed to manage and track personal relationships. It provides tools to organize contacts, record interactions, and analyze engagement patterns over time.

---

## Live Demo

* GitHub Pages: [https://galibdev.github.io/keen-keeper/](https://galibdev.github.io/keen-keeper/)
* Netlify: [https://voluble-dasik-5510bd.netlify.app/](https://voluble-dasik-5510bd.netlify.app/)

---

## Features

* Interaction timeline (Call, Text, Meetup, Video)
* Friendship analytics with chart visualization
* Basic friend management
* Timeline filtering
* Fast development with Vite and React
* Styling with Tailwind CSS

---

## Technology Stack

* React
* React Router
* Vite
* Tailwind CSS
* Chart library (e.g., Chart.js or Recharts)

---

## Project Structure

```
src/
  components/
  contexts/
  layouts/
  pages/
  routes/
  assets/
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/GalibDev/keen-keeper.git
cd keen-keeper
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

For Netlify deployment, create a `netlify.toml` file in the root directory:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This configuration ensures proper routing when using React Router.

---

## Future Improvements

* Authentication system
* Database integration (e.g., Firebase or MongoDB)
* Real-time updates
* Enhanced mobile responsiveness

---

## Author

GitHub: [https://github.com/GalibDev](https://github.com/GalibDev)

---

## License

This project is intended for educational purposes.
