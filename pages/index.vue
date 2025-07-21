<template>
  <div class="landing-page">
    <h1 class="main-title">
      Pokémon Information
    </h1>
    <div class="subtitle">
      Explore the first 60 Pokémon — search by name or click any card for more info and fun facts!
    </div>
    <SearchBox v-model="search" placeholder="Search Pokémon..." />
    <transition-group
      name="fade-list"
      tag="div"
      :class="['pokemon-list', filteredPokemons.length === 1 ? 'single-card' : '']"
    >
      <PokemonCard
        v-for="poke in filteredPokemons"
        :key="poke.name"
        :pokemon="poke"
      />
      <div v-if="filteredPokemons.length === 0" class="empty-state" key="empty">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" width="64" alt="Pikachu looking" style="opacity:.6;margin-bottom:0.5rem;">
        <div>No Pokémon found. Try another name!</div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import PokemonCard from '~/components/PokemonCard.vue'
import SearchBox from '~/components/SearchBox.vue'
import type { PokemonListItem } from '@/types/pokemon-ui'
import { useFetch } from 'nuxt/app'
import debounce from 'lodash/debounce'

const search = ref('')
const debouncedSearch = ref('')

const { data: pokemons } = await useFetch<PokemonListItem[]>('/api/pokemon-list')

const setDebouncedSearch = debounce((val: string) => {
  debouncedSearch.value = val
}, 1050)

onBeforeUnmount(() => {
  setDebouncedSearch.cancel()
})

watch(search, (newVal) => {
  setDebouncedSearch(newVal)
})

const filteredPokemons = computed(() =>
  (pokemons.value ?? []).filter((p: PokemonListItem) =>
    p.name.toLowerCase().includes(debouncedSearch.value.trim().toLowerCase())
  )
)
</script>
