import { PokeApiListResponse } from '@/types/pokemon-list';
import { PokeApiDetailResponse } from '@/types/pokemon-detail';
import { PokemonListItem } from '@/types/pokemon-ui';

// In-memory cache for API response
let cache: PokemonListItem[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache duration

export default defineEventHandler(async (event) => {
  // === LOGGING: API Call ===
  console.log(`[${new Date().toISOString()}] API called: /pokemon-list`);

  // 1. Serve from cache if available and not expired
  if (cache && (Date.now() - cacheTimestamp < CACHE_TTL)) {
    return cache;
  }

  try {
    // 2. Fetch the first 60 Pokémon names and URLs from PokeAPI
    const listRes = await $fetch<PokeApiListResponse>('https://pokeapi.co/api/v2/pokemon?limit=60');
    const results = listRes.results;

    // 3. For each Pokémon, fetch its details (for the sprite image), in parallel
    const detailedPokemon: PokemonListItem[] = await Promise.all(
      results.map(async (pokemon) => {
        try {
          // Use strong typing for detail fetch
          const detail = await $fetch<PokeApiDetailResponse>(pokemon.url);
          return {
            name: pokemon.name,
            image: detail.sprites.front_default || '',
            url: `/pokemon/${pokemon.name}`,
          };
        } catch (err) {
          // If fetching detail fails, still include Pokémon (without image)
          return {
            name: pokemon.name,
            image: '',
            url: `/pokemon/${pokemon.name}`,
          };
        }
      })
    );

    // 4. Save result in cache for 5 minutes
    cache = detailedPokemon;
    cacheTimestamp = Date.now();

    // 5. Return normalized, typed data to the frontend
    return detailedPokemon;
  } catch (err: any) {
    // 6. Handle PokeAPI rate limiting or other errors
    if (err?.response?.status === 429) {
      return sendError(
        event,
        createError({ statusCode: 429, statusMessage: 'Rate limit reached. Please try again later.' })
      );
    }
    // Log unexpected errors for debugging
    console.error(`[${new Date().toISOString()}] Failed to fetch Pokémon list:`, err);
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: 'Failed to fetch Pokémon list' })
    );
  }
});
