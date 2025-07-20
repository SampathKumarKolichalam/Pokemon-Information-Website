import { PokeApiDetailResponse } from '@/types/pokemon-detail';
import { PokemonDetail } from '@/types/pokemon-ui';

const cache: Record<string, { data: PokemonDetail, timestamp: number }> = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export default defineEventHandler(async (event) => {
  const name = event.context.params?.name?.toLowerCase();

  // === LOGGING: API Call ===
  console.log(`[${new Date().toISOString()}] API called: /pokemon/${name || 'UNKNOWN'}`);

  if (!name) {
    return sendError(event, createError({ statusCode: 400, statusMessage: "Missing Pokémon name" }));
  }

  // Serve from cache if available and fresh
  if (cache[name] && (Date.now() - cache[name].timestamp < CACHE_TTL)) {
    return cache[name].data;
  }

  try {
    const pokeData = await $fetch<PokeApiDetailResponse>(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name)}`
    );

    // Prefer official artwork, fallback to front_default, fallback to empty string
    const image =
      pokeData.sprites.other?.['official-artwork']?.front_default ||
      pokeData.sprites.front_default ||
      '';

    // Abilities: Capitalized, comma-separated
    const abilities = pokeData.abilities
      .map(a => a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1))
      .join(', ');

    const data: PokemonDetail = {
      name: pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1),
      image,
      height: pokeData.height,
      weight: pokeData.weight,
      abilities,
    };

    // Cache result
    cache[name] = { data, timestamp: Date.now() };

    return data;
  } catch (err: any) {
    if (err?.response?.status === 404) {
      return sendError(event, createError({ statusCode: 404, statusMessage: "Pokémon not found" }));
    }
    if (err?.response?.status === 429) {
      return sendError(event, createError({ statusCode: 429, statusMessage: "Rate limit reached. Please try again later." }));
    }
    console.error(`[${new Date().toISOString()}] Failed to fetch profile for Pokémon "${name}":`, err);
    return sendError(event, createError({ statusCode: 500, statusMessage: "Failed to fetch Pokémon profile" }));
  }
});
