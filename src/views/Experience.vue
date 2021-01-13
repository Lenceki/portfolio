<template>
  <div class="exp-container">
    <ExperienceCard v-for="(item,index) in dataSource" :key="index"
      :dataSource="item"
    />
  </div>
</template>

<script>

import ExperienceCard from '@/components/ExperienceCard.vue'
import dataSource from '@/models/mockExperienceModel.js'
console.log(dataSource)
export default {
 
  components: {
    ExperienceCard
  },
  data() {
    return {
      dataSource,
    }
  }
}
</script>

<style lang="less" scoped>
.exp-container {

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  *> {
    margin-top: 1rem;
    flex-shrink: 0;
    width: 370px;
    height: 300px;
    
  }
}
</style>