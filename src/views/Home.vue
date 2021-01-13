<template>
  <div class="home">
    <IntroMe />
  </div>
</template>

<script>
// @ is an alias to /src
import IntroMe from "@/components/IntroMe.vue"
export default {
  name: 'Home',
  components: {
    IntroMe
  }
}
</script>

<style lang="less" scoped>

.home {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


</style>