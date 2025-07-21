import type { H3Event } from 'h3'
import type { PokeApiListResponse } from '@/types/pokemon-list'
import type { PokeApiDetailResponse } from '@/types/pokemon-detail'
import type { PokemonListItem } from '@/types/pokemon-ui'
import { defineEventHandler, sendError, createError } from '#imports'

let cache: PokemonListItem[] | null = null
let cacheTimestamp = 0
const CACHE_TTL = 5 * 60 * 1000 

export default defineEventHandler(async (event: H3Event) => {
  console.log(`[${new Date().toISOString()}] API called: /pokemon-list`)

  if (cache && (Date.now() - cacheTimestamp < CACHE_TTL)) {
    return cache
  }

  try {
    const listRes = await $fetch<PokeApiListResponse>('https://pokeapi.co/api/v2/pokemon?limit=60')
    const results = listRes.results

    const detailedPokemon: PokemonListItem[] = await Promise.all(
      results.map(async (pokemon) => {
        try {
          const detail = await $fetch<PokeApiDetailResponse>(pokemon.url)
          return {
            name: pokemon.name,
            image: detail.sprites.front_default || '',
            url: `/pokemon/${pokemon.name}`,
          }
        } catch (err) {
          return {
            name: pokemon.name,
            image: '',
            url: `/pokemon/${pokemon.name}`,
          }
        }
      })
    )

    cache = detailedPokemon
    cacheTimestamp = Date.now()
    return detailedPokemon
  } catch (err: any) {
    if (err?.response?.status === 429) {
      return sendError(
        event,
        createError({ statusCode: 429, statusMessage: 'Rate limit reached. Please try again later.' })
      )
    }
    console.error(`[${new Date().toISOString()}] Failed to fetch Pokémon list:`, err)
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: 'Failed to fetch Pokémon list' })
    )
  }
})
