<template>
  <RouterLink
    class="item-link"
    :to="{ name: 'item-details', params: { id: item.id } }"
  >
    <div class="card" :class="item.finished ? 'finished' : ''">
      <img :src="'/src/assets/' + item.logo" :alt="item.title" />
      <h2>{{ item.title }}</h2>
      <p>{{ item.date }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card {
  height: 200px;
  border: 1px solid rgb(56, 124, 192);
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  margin: 10px;
}
.card img {
  width: 80px;
  height: 80px;
}

.finished {
  color: #ddd;
  border: 1px solid #ddd;
  text-decoration: line-through;
  font-style: italic;
  filter: grayscale(0.8);
}

.item-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
