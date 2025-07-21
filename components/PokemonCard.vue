<template>
  <NuxtLink :to="pokemon.url" class="pokemon-card">
    <img :src="pokemon.image" :alt="pokemon.name" />
    <div class="name">{{ pokemon.name }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PokemonListItem } from '@/types/pokemon-ui';

defineProps<{ pokemon: PokemonListItem }>();
</script>
