<template>

  <RouterLink :to="{name:'item-details',params:{id:item.id}}" class="fruid-col-1" style="border: 3px #0c89ff solid;margin: 10px">
    <div >

      <h3>{{ item.title }}</h3>
      <img :src="'/src/assets/'+ item.logo"/>
      <p>{{ item.date }}</p>
      <p v-if="item.finished">结束</p>
      <p v-else>进行中</p>
    </div>
  </RouterLink>


</template>

<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})


</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}


</style>
