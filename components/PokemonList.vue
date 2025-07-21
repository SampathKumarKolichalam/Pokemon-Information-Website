<template>
  <div class="pokemon-list">
    <PokemonCard v-for="poke in pokemons" :key="poke.name" :pokemon="poke" />
  </div>
</template>

<script setup lang="ts">
import type { PokemonListItem } from '@/types/pokemon-ui';
import PokemonCard from './PokemonCard.vue';

defineProps<{ pokemons: PokemonListItem[] }>();
</script>
