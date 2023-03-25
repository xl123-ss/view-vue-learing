<template>
<!--  <H1>tttt</H1>-->
  <div v-if="item" class="Info">
    <img class="img"  :src="'/src/assets/'+ item.logo">
    <p style="text-align:center;">{{ item.title }}</p>
    <p style="text-align:center;">{{ item.date }}</p>
    <p style="text-align:center;" v-text="item.finished ? '已结束' : '进行中'"></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import itemService from "@/service/itemService";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const item = ref(null)
// const idd = ref(1)
onMounted(() => {
  console.log(props.id)
  // console.log(this.$route.params.id);    // ming
  itemService.getItem(props.id).then((res) => {
    item.value = res.data
  })
})
</script>

<style  scoped>
.img {
  width: 100px;
  height: 100px;
}

.Info {
  float: left;
  margin: 20px;
}
</style>
