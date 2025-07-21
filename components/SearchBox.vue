<template>
  <input :value="modelValue" @input="onInput" class="search-box" :placeholder="placeholder" />
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string,
  placeholder?: string
}>();
const emit = defineEmits(['update:modelValue']);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  emit('update:modelValue', target?.value ?? '');
}
</script>

<style scoped>
.search-box {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
