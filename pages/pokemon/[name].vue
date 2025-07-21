<template>
  <div class="pokemon-detail-page">
    <div class="top-row">
      <NuxtLink to="/" class="back-link">
        <span class="arrow">←</span> Back to List
      </NuxtLink>
    </div>
    <div v-if="pokemon" class="pokemon-detail-card">
      <img :src="image" :alt="pokemon.name" class="pokemon-detail-img" />
      <h1 class="pokemon-detail-name">{{ capitalize(pokemon.name) }}</h1>
      <div class="pokemon-info">
        <div class="pokemon-info-row"><b>ID:</b> <span>{{ pokemon.id }}</span></div>
        <div class="pokemon-info-row"><b>Height:</b> <span>{{ pokemon.height }}</span></div>
        <div class="pokemon-info-row"><b>Weight:</b> <span>{{ pokemon.weight }}</span></div>
        <div class="pokemon-info-row">
          <b>Abilities:</b>
          <span>{{ abilitiesString }}</span>
        </div>
      </div>
    </div>
    <div v-else-if="pending" class="loading">Loading...</div>
    <div v-else class="error">Error: Pokémon not found!</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useFetch } from 'nuxt/app';
import { computed } from 'vue';

interface PokemonAbility {
  ability: { name: string }
}
interface PokemonData {
  id: number
  name: string
  height: number
  weight: number
  abilities: PokemonAbility[]
  sprites: {
    other: {
      ['official-artwork']: { front_default: string }
    }
  }
}

const route = useRoute();
const name = route.params.name as string;

const { data: pokemon, pending } = await useFetch<PokemonData>(
  `https://pokeapi.co/api/v2/pokemon/${name}`
);

const image = computed(() =>
  pokemon.value?.sprites.other['official-artwork'].front_default ?? ''
);

const abilitiesString = computed(() =>
  pokemon.value
    ? pokemon.value.abilities
        .map(a => a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1))
        .join(', ')
    : ''
);

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
</script>

<style scoped>
.pokemon-detail-page {
  min-height: 100vh;
  background: radial-gradient(ellipse at 65% 30%, #e6edff 70%, #f5f7ff 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 0.5rem;
}

.top-row {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 0.4em;
  font-size: 1.07rem;
  color: #2563eb;
  background: #f7faff;
  border-radius: 1.5em;
  padding: 0.72em 1.45em 0.72em 1em;
  font-weight: 500;
  margin: 1.6rem 0 0 2.2rem;
  box-shadow: 0 2px 16px 0 rgba(90,110,240,0.10);
  border: 1px solid #e5ecfb;
  transition: background 0.13s, box-shadow 0.15s;
}
.back-link:hover {
  background: #e8f1ff;
  color: #2040ba;
  text-decoration: underline;
}
.arrow {
  font-size: 1.19em;
  font-weight: bold;
  line-height: 1;
}

.pokemon-detail-card {
  background: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 4px 36px 0 rgba(62,110,255,0.11);
  padding: 2.1rem 2.2rem 1.5rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  margin: 0.2rem auto 0 auto;
  box-sizing: border-box;
  min-width: 0;
}

.pokemon-detail-img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1.3rem;
  border-radius: 50%;
  box-shadow: 0 0 24px 0 rgba(88,122,255,0.10);
  background: #f8faff;
  border: 2px solid #e2e8fa;
  padding: 0.5rem;
}
.pokemon-detail-name {
  font-size: 2.1rem;
  font-weight: 800;
  color: #172247;
  margin-bottom: 1.3rem;
  letter-spacing: 0.02em;
  text-align: center;
  text-shadow: 0 2px 8px rgba(120,130,255,0.07);
}
.pokemon-info {
  width: 100%;
  background: #f7f8fe;
  border-radius: 1.1rem;
  padding: 1.25rem 1.2rem 1.07rem 1.2rem;
  margin-top: 0.3rem;
  box-shadow: 0 1.5px 12px 0 rgba(120,150,255,0.06);
}
.pokemon-info-row {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  font-size: 1.12rem;
  color: #233163;
  margin-bottom: 0.5em;
  gap: 0.5em;
}
.pokemon-info-row:last-child {
  margin-bottom: 0;
}
.pokemon-info b {
  color: #1d2970;
  font-weight: 700;
  min-width: 94px;
  display: inline-block;
}
.loading, .error {
  margin-top: 4rem;
  font-size: 1.3rem;
  color: #6772a4;
}

@media (max-width: 600px) {
  .pokemon-detail-card {
    padding: 1.15rem 0.3rem 1.2rem 0.3rem;
    width: 96vw;
    min-width: unset;
    max-width: 99vw;
    margin-top: 1rem;
    border-radius: 1rem;
  }
  .pokemon-detail-img {
    width: 90px;
    height: 90px;
  }
  .pokemon-detail-name {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
  .pokemon-info {
    padding: 0.92rem 0.5rem 0.92rem 0.5rem;
    border-radius: 0.7rem;
  }
  .back-link {
    font-size: 1rem;
    padding: 0.65em 1.05em 0.65em 0.7em;
    margin: 1rem 0 0 0.7rem;
  }
}
</style>
