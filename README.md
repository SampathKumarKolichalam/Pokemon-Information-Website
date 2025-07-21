# Pokemon Information Website with Nuxt 3, Vue 3, TypeScript, and Custom CSS

A Server-Side Rendered **Pokémon Information Website** built using **Nuxt 3** (Vue 3 + TypeScript) and **Custom CSS**. It consumes the [PokeAPI](https://pokeapi.co/) and offers search, 
detailed Pokémon profiles, and optimizations like API rate limiting, debouncing, and logging.

**Live Demo:** [pokemon-information-website.vercel.app](https://pokemon-information-website.vercel.app/)  
**GitHub Repo:** [github.com/SampathKumarKolichalam/Pokemon-Information-Website](https://github.com/SampathKumarKolichalam/Pokemon-Information-Website)

---

## Key Features

- SSR/SSG with Nuxt 3 for SEO and fast rendering.
- List of 60 Pokémon with names and thumbnails.
- Search functionality with debouncing for performance.
- Profile page for each Pokémon with:
  - Large image
  - Name
  - Height, Weight
  - Abilities (Capitalized & comma-separated)
- API Proxy & Rate Limiting via Nuxt Server Routes.
- Error Logging on the server.
- Fully responsive, mobile-friendly UI with Custom CSS only.

---

## High-Level Architecture

<img width="1189" height="594" alt="image" src="https://github.com/user-attachments/assets/5ef2375d-313a-4dc5-912f-4cf74d032818" />

---

## Tech Stack Used

| Layer        | Technology                                           |
|--------------|------------------------------------------------------|
| **Frontend** | Vue 3, TypeScript                                    |
| **Full-Stack SSR** | Nuxt 3                                         |
| **Styling**  | Custom CSS                                           |
| **API**      | [PokeAPI](https://pokeapi.co/)                       |
| **Deployment** | Vercel                                             |
| **Logging**  | Console Error Logs                                   |

---

## Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/SampathKumarKolichalam/Pokemon-Information-Website.git
cd Pokemon-Information-Website


2. **Install Dependencies**

```bash
npm install


3. **Run the Development Server**

```bash
npm run dev


4. **Build for Production**

```bash
npm run build
npm run start


5. **Lint and Format**

```bash
npm run lint
npm run format
---

## Folder Structure

| Folder          | Purpose                                      |
|------------------|----------------------------------------------|
| `pages/`         | Routes and views (Home, Profile)             |
| `components/`    | UI Components like `PokemonCard`, `SearchBox`|
| `server/api/`    | API endpoints to proxy PokeAPI               |
| `types/`         | TypeScript types and interfaces              |
| `assets/styles/` | All custom CSS styling                       |
| `public/`        | Static files like favicon, images            |

---

## Development Best Practices

- TypeScript types/interfaces to prevent runtime errors.
- ESLint and Prettier for code clarity and formatting.
- API normalization and proxy for secure API calls.
- Debounced search input to reduce re-renders.
- Error handling in both frontend & backend.
- Semantic HTML and accessibility considerations.
- Clean and meaningful Git commits.

---

## Future Enhancements

- Integrate Semantic/Solr-like search for large datasets.
- Add Dockerization for cloud containerization.
- Integrate Sentry for advanced error tracking.
- Write Unit & Integration Tests with Vitest or Jest.
- Implement Pinia for state management if scaling.
- Move to Cloud Caching (e.g., Redis) for API response caching.

---

## Comparative Stack Notes

| Aspect             | React / Next.js + Node/Nest | Vue 3 / Nuxt 3                              |
|--------------------|-----------------------------|---------------------------------------------|
| **Language**       | JSX/TSX                     | Vue Templates + TypeScript                  |
| **Routing**        | Client/Server split         | File-based, SSR/SSG unified                 |
| **State Management** | Redux/Context API         | Vue Composition API / Pinia                 |
| **Server API**     | Node.js/Nest.js/Express     | Nuxt Server API Routes                      |
| **Styling**        | Tailwind, CSS-in-JS         | Custom CSS in this project                  |
| **Search Optimization** | Custom logic           | Semantic/Solr search potential              |

---

## UI/UX Highlights

- Smooth, responsive grid for Pokémon listings.
- Profile pages show detailed info with formatted abilities.
- Loading indicators for data fetches.
- User-friendly messages for API errors.
- Custom CSS for unique, lightweight design.

---

## References

- [PokeAPI](https://pokeapi.co/)
- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)

---

## 📝 License

This project is licensed under the **MIT License**.

---



