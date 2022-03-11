<template>
  <div id="nav">
    <router-link to="/" id="home">
      <avatar fullname="John Lawrence Figuerres" :size="50" color="#205072"></avatar>
      <span id="name-container">John Lawrence<span>Figuerres</span> </span>
    </router-link>
    <div id="nav-menu">
         <router-link to="/experience">Work Experience</router-link>
    
         <router-link to="/app">Application</router-link>
    
    </div>  
  </div>
  <router-view id="content-container"/>
  <Footer />
  <div id="modals"></div>
</template>

<script>
import Avatar from 'vue-avatar-component'
import Footer from '@/components/Footer.vue'
export default {
  props: {
  },
  components: {
    Avatar,
    Footer
  }
}
</script>
<style lang="less">

body {
  margin: 0;
  padding: 0;
  background-color: #ececec;
  overflow-x: hidden;
}

p, h1, h2, h3, h4, h5, h6 {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

#content-container {
  flex: 1;
  width: 100%;
}

#nav {
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    justify-self: end;

    font-size: 1.3rem;
    color: #2c3e50;
    text-decoration: none;
   
  }
   a:hover {
    font-weight: bolder;
  }

}


#home {
  display: flex;
  align-items: center;
  #name-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 0.5rem;
  }
}

#nav-menu{
  display: flex;
  align-items: center;
  height: 100%;
 
  a {
    margin-left: 1rem;
     padding: 5px 0.5rem;
     &.router-link-exact-active {
      color: #205072;
      border-bottom: 5px solid #205072;
      font-weight: bolder;
    }
    
  }
}


</style>
