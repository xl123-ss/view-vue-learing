<script setup>
import TodoItem from '@/components/TodoItem.vue'
import { reactive } from 'vue'

const items = reactive([
  {
    id: 1,
    title: 'Vue3 学习',
    date: '2023-03-24',
    logo: 'vue.jpg',
    finished: false,
  },
  {
    id: 2,
    title: 'Vite 学习',
    date: '2023-03-23',
    logo: 'vite.jpg',
    finished: false,
  },
  {
    id: 3,
    title: 'Pinia 学习',
    date: '2023-03-23',
    logo: 'pinia.jpg',
    finished: false,
  },
])
</script>

<template>
  <h2>首页</h2>
  <div class="layout">
    <div v-for="item in items" :key="item.id">
      <TodoItem :item="item" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 90%;
  margin: 0 auto;
}
.layout div {
  flex: 1;
}
</style>
