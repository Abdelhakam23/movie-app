# 🎬 CineScope — Movie Discovery App

A sleek, responsive movie discovery web app built with **React** and powered by **The Movie Database (TMDB) API**. Browse trending movies, dive into detailed movie pages, and manage your account — all wrapped in a clean, dark cinematic UI.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB%20API-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

---

## ✨ Features

- 🔥 **Trending Movies Feed** — Discover the most popular movies of the week, fetched live from TMDB.
- 🎥 **Detailed Movie Pages** — Full backdrop hero section with poster, rating, runtime, release date, genres, overview, budget/revenue stats, and production companies.
- 🔐 **Authentication Pages** — Dedicated Login and Signup pages with form components.
- 🚦 **Client-Side Routing** — Smooth navigation powered by `react-router`, including dynamic routes (`/movie/:id`) and a custom 404 page.
- 🔔 **Toast Notifications** — Elegant, animated feedback messages via `react-toastify`.
- 💀 **Loading States** — Graceful loading indicators while data is being fetched.
- 📱 **Fully Responsive** — Built with Bootstrap utilities for a seamless experience across devices.
- 🚫 **Custom 404 Page** — A cinema-themed "Lost in the Cinema?" not-found page.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Core UI library |
| **React Router** | Client-side routing & navigation |
| **Bootstrap / Bootstrap Icons** | Styling & responsive layout |
| **React Toastify** | Toast notifications |
| **TMDB API** | Movie data (trending list & movie details) |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── MovieCard/
│   ├── Loading/
│   ├── LoginForm/
│   └── SignupForm/
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Signup/
│   ├── MovieDetails/
│   └── NotFound/
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` (or whichever port Vite/CRA assigns).

### Environment Setup

This project uses the [TMDB API](https://www.themoviedb.org/documentation/api). You'll need your own API key:

1. Create a free account at [themoviedb.org](https://www.themoviedb.org/).
2. Generate an API key from your account settings.
3. Replace the API key used in `Home.jsx` and `MovieDetails.jsx` with your own — ideally by moving it into an environment variable (`.env`) for better security:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

```js
const response = await fetch(
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
);
```

> ⚠️ **Note:** Avoid committing real API keys to a public repository. Add `.env` to your `.gitignore`.

---

## 🧭 Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Trending movies of the week |
| `/login` | Login | User login form |
| `/signup` | Signup | User registration form |
| `/movie/:id` | MovieDetails | Full details for a specific movie |
| `*` | NotFound | Custom 404 page |

---

## 📸 Screenshots

<img width="2834" height="1628" alt="image" src="https://github.com/user-attachments/assets/474b0659-83bf-48db-b7b1-2583037a2dad" />
<img width="2834" height="1628" alt="image" src="https://github.com/user-attachments/assets/623c9f89-830d-4dc9-8a9c-1bc68a12d32e" />
<img width="816" height="1768" alt="image" src="https://github.com/user-attachments/assets/e9b5a0e8-d717-4179-866b-5510f84ddcbb" />
<img width="816" height="1768" alt="image" src="https://github.com/user-attachments/assets/37a52b36-5142-44c2-8b1a-b86ae45760d3" />
<img width="816" height="1768" alt="image" src="https://github.com/user-attachments/assets/3aefeb91-51c8-4564-8591-52b76efd80c5" />






---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — feel free to use, modify, and distribute it.

---

## 🙏 Acknowledgements

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).
- Icons by [Bootstrap Icons](https://icons.getbootstrap.com/).

---

<p align="center">Made with ❤️ and React</p>
