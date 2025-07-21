# Pokemon Information Website with Nuxt 3, Vue 3, TypeScript, and Custom CSS

A Server-Side Rendered **Pokémon Information Website** built using **Nuxt 3 (Vue 3 + TypeScript)** and **Custom CSS**. It consumes the [PokeAPI](https://pokeapi.co/) and offers search, detailed Pokémon profiles, API rate limiting, debouncing, and server-side logging.

**Live Demo:** [https://pokemon-information-website.vercel.app/](https://pokemon-information-website.vercel.app/)

**GitHub Repo:** [https://github.com/SampathKumarKolichalam/Pokemon-Information-Website](https://github.com/SampathKumarKolichalam/Pokemon-Information-Website)

---

## Key Features

* API Proxying & Rate Limiting - Secure backend integration.
* Error Logging for Monitoring.
* Fully Responsive UI - Built with lightweight custom CSS only.

---

## High-Level Architecture

Architecture Diagram:
<img width="1183" height="597" alt="image" src="https://github.com/user-attachments/assets/818a8979-8282-4762-be46-1f5d9ea51768" />

---

## Tech Stack

| Layer      | Technology                  |
| ---------- | --------------------------- |
| Framework  | Nuxt 3 (Vue 3 + TypeScript) |
| Styling    | Custom CSS                  |
| API Source | PokeAPI                     |
| Deployment | Vercel                      |
| Logging    | Server Console Logging      |
| Tools      | ESLint, Prettier, Volar     |

---

## Setup & Installation

```bash
git clone https://github.com/SampathKumarKolichalam/Pokemon-Information-Website.git
cd Pokemon-Information-Website
```

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
npm run start
```

```bash
npm run lint
npm run format
```

---

## Folder Structure

| Folder           | Description                                     |
| ---------------- | ----------------------------------------------- |
| `pages/`         | Nuxt Pages (e.g., Home, Pokémon Details)        |
| `components/`    | Reusable UI Components (PokemonCard, SearchBox) |
| `server/api/`    | Custom Nuxt Server Routes (API proxy)           |
| `types/`         | TypeScript Interfaces & Type Definitions        |
| `assets/styles/` | Handcrafted Custom CSS Styles                   |
| `public/`        | Static Assets (Favicon, Images)                 |

---

## Development Best Practices

* Typed API responses to avoid runtime errors.
* Central error handling (server-side logs).
* Debounced controlled search for efficiency.
* Custom responsive design without CSS frameworks.
* Accessible & semantic HTML.
* Git Commits & Code linting.

---

## Project Screenshots


**Folder Structure**

<img width="391" height="497" alt="image" src="https://github.com/user-attachments/assets/ba7755f7-afc3-4ec5-839d-ace17c41b251" />

<img width="403" height="509" alt="image" src="https://github.com/user-attachments/assets/b2ac7047-95ac-4ce4-88f1-11cc2b08b199" />


**Web Application Server(Frontend + Backend)**

<img width="1022" height="379" alt="image" src="https://github.com/user-attachments/assets/46b5309b-5c20-42d8-817f-3c90ab0d250b" />


**Pokemon API Endpoints Testing in Browser**

<img width="1357" height="672" alt="image" src="https://github.com/user-attachments/assets/ed23fae3-5258-4a19-a46c-4c1ec5ff5f1e" />

<img width="1366" height="219" alt="image" src="https://github.com/user-attachments/assets/d7e10e37-5516-48b0-8059-50d0587914d9" />


**Pokemon API Endpoints Testing in ThunderClient**

<img width="1081" height="591" alt="image" src="https://github.com/user-attachments/assets/3b2a68ae-c1a3-4422-9296-545adfc824a2" />

<img width="1092" height="522" alt="image" src="https://github.com/user-attachments/assets/3ce2b9a1-40f6-4608-ab8a-5031f173492e" />


**Search Debouncing Testing in Browser(Dev Tools)**

<img width="1113" height="566" alt="image" src="https://github.com/user-attachments/assets/fc0c0c98-af63-44ad-a16b-4ff2c426d4c3" />

<img width="1123" height="546" alt="image" src="https://github.com/user-attachments/assets/3894af90-70ad-4689-a7de-64a9c36b87e6" />


**Web Application Deployed in Vercel**

<img width="1361" height="629" alt="image" src="https://github.com/user-attachments/assets/133c71a4-d74c-4e50-9c95-36c0571b44d8" />

<img width="1361" height="689" alt="image" src="https://github.com/user-attachments/assets/77752e95-fa0b-42c1-b435-6a037bb42086" />

<img width="1361" height="691" alt="image" src="https://github.com/user-attachments/assets/a7607dee-2b45-4955-9fe7-1178200cc99d" />

---

## Roadmap / Future Enhancements

* Add advanced fuzzy search or Solr-style search
* Dockerize for containerized deployment
* Integrate a caching layer (Redis/API caching)
* Add Pinia for state management (if data complexity grows)
* Add unit + E2E tests via Vitest or Cypress
* Add Sentry or another tracker for production error monitoring

---

## Stack Comparison (Vue/Nuxt vs React/Next)

| Feature             | Vue 3 / Nuxt 3                 | React / Next.js              |
| ------------------- | ------------------------------ | ---------------------------- |
| Language            | Vue Templates + TypeScript     | JSX/TSX                      |
| Routing             | File-based SSR & SSG           | Dynamic Routes + SSR config  |
| State Management    | Composition API / Pinia        | Context API / Redux          |
| Styling             | Scoped CSS / Custom / Tailwind | Styled-Components / Tailwind |
| Server Functions    | Nuxt Server Routes (/api)      | API Routes / Express Server  |
| Search Optimization | Debounce + API Proxy           | Debounce / Client filtering  |

---

## UI Previews

* Easy-to-use Pokémon search input with real-time results.
* Scrollable Pokémon list (first 60, future scalable).
* Clickable detail view with beautiful layout.
* Responsive from desktop to mobile with no layout breakage.
* Graceful handling of loading, error, and empty states.

---

## References

* [PokeAPI Developer Docs](https://pokeapi.co/docs/v2)
* [Nuxt 3 Official Docs](https://nuxt.com/docs)
* [Vue 3 Official Docs](https://vuejs.org/)

---

## License

This project is licensed under the **MIT License**.

---
