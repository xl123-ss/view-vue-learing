<template>

  <div  class="d-flex flex-row">
    <template v-for="item in items" :key="item.id">

      <todo-item :item="item"></todo-item>
    </template>
  </div>



</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue'

import {ref,onMounted} from 'vue';




let items = ref(null)
import itemService from "@/service/itemService";


onMounted(() => {
  itemService.getTodoItems()
      .then(response => {
        // console.log(response.data)
        items.value = response.data
        console.log(items)
      })
      .catch(error => {
        console.log(error)
      })
})


// const items = reactive([
//   {
//     id: 1,
//     title: "RealWorldVue3",
//     date: "2023-03-12",
//     // logo:"@/assets/RealWorldVue.png",
//     logo: "/assets/RealWorldVue3.png",
//     finished: false
//   },
//   {
//     id: 2,
//     title: "Pinia.opt",
//     date: "2023-03-12",
//     logo: "@/assets/RealWorldVue3.png",
//     finished: true
//   },
//   {
//     id: 3,
//     title: "TypeScript Friendly Vue 3.opt",
//     date: "2023-03-12",
//     logo: "../assets/RealWorldVue3.png",
//     finished: true
//   },
//   {
//     id: 4,
//     title: "Vite.opt",
//     date: "2023-03-12",
//     logo: "RealWorldVue3.png",
//     finished: false
//   },
// ])




</script>

<style scoped>

</style>
