<template>
   <div id="intro-me-container">
      <img id="profile" src="@/assets/profile.png" />
      <div id="intro-words-container">
        <h1>Hey! Im Lence</h1>
        A passionate mobile application engineer having an experience of building mobile and web application. 
        <div id="skill-icon-container">
          <span> <img src="@/assets/swift.png" /></span>
          <span> <img src="@/assets/flutter.png" /></span>
           <span> <img src="@/assets/vue.png" /></span>
            <span> <img src="@/assets/js.png" /></span>
            <span> <img src="@/assets/h5.png" /> </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'IntroMe',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#profile {
  height: 30vh;
  max-height: 35vw;
}
#intro-me-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6rem;
}

#intro-words-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 30vh;
  max-width: 35vw;
  text-align: left;
  margin-left: 2rem;
}

#skill-icon-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  * {
    flex: 1 1 0;
    height: auto;
    width: auto;
  }
  span {
    padding: 0.5rem;
  }
  img {
    width: 100%;
  }
}
</style>
