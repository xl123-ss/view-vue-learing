<template>
  <div v-if="item" class="layout">
    <div>
      <img :src="'/src/assets/' + item.logo" :alt="item.title" />
    </div>
    <div>
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
      <p>
        <span class="meta"> @{{ item.location }}</span>
        <span class="meta"> @{{ item.date }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ItemService from '@/services/ItemService.js'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const item = ref(null)

onMounted(() => {
  ItemService.getItem(props.id)
    .then((res) => {
      console.log(res.data)
      item.value = res.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<style scoped>
.layout {
  display: flex;
}
.layout div {
  flex: 1;
  padding: 20px;
}

.layout div p {
  line-height: 2;
}
.layout .meta {
  font-size: 14px;
  color: #ccc;
  margin-right: 10px;
}
</style>
