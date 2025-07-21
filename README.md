# Pokemon Information Website with Nuxt 3, Vue 3, TypeScript, and Custom CSS

A Server-Side Rendered **Pokémon Information Website** built using **Nuxt 3 (Vue 3 + TypeScript)** and **Custom CSS**. It consumes the [PokeAPI](https://pokeapi.co/) and offers search, detailed Pokémon profiles, API rate limiting, debouncing, and server-side logging.

**Live Demo:** [https://pokemon-information-website.vercel.app/](https://pokemon-information-website.vercel.app/)
**GitHub Repo:** [https://github.com/SampathKumarKolichalam/Pokemon-Information-Website](https://github.com/SampathKumarKolichalam/Pokemon-Information-Website)

---

## Key Features

* API Proxying & Rate Limiting - Secure backend integration
* Error Logging for Monitoring
* Fully Responsive UI - Built with lightweight custom CSS only

---

## High-Level Architecture

Architecture Diagram:
[https://github.com/user-attachments/assets/5ef2375d-313a-4dc5-912f-4cf74d032818](https://github.com/user-attachments/assets/5ef2375d-313a-4dc5-912f-4cf74d032818)

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
