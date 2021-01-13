<template>
   <div class="exp-card-container">
       <h2 id="position-container">{{ dataSource.position }}</h2>
     
       <br />
      <div id="company-details-container">
         <img id="logo" :src="dataSource.logo" />
        
        <div id="details-container">
          <h3>{{ dataSource.company }}</h3>
          <span> {{dataSource.dateStart}} - {{dataSource.dateEnd}} </span>
          <br />
          <span> {{dataSource.address}}  </span> 
        </div>
      </div>
      <span style="width:100%;margin-top:2rem">
 
      </span>
      <div style="width:100%;margin-top:auto" v-if="dataSource.tools != null">
        <h4> Tools </h4>
        <div id="skill-list-container">
          
          <span class="skill-container"
            v-for="(item, index) in dataSource.tools" 
            :key="index"
            >
            <img :src="item.imgSrc" />
            <h6> {{ item.name }}</h6>


          </span>
        </div>
      </div>
    </div>
</template>

<script>
import ExperienceModel from '@/models/experienceModel.js'
export default {
  data () {
    return {
    }
  },
  name: 'ExperienceCard',
  props: {
    dataSource: {
      type: ExperienceModel,
      default: null
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#profile {
  height: 30vh;
  max-height: 35vw;
}

.exp-card-container{
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 30rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  h1, h2, h3, h4 ,h5 , h6 {
     margin:0;
  }
  
}

#position-container {
  text-align: left;
}
.skill-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 1.5rem;
  img {

    height: 2rem;
    width: auto;
  }
}

#skill-list-container {
  display: flex;
  margin-top: 0.3rem;
  justify-content: flex-start;
  width: 100%;
}

#company-details-container {
  display: flex;
  align-items: center;
  
  img {
    height: auto;
    width: 5rem;
  }
  #details-container{
    word-wrap: break-word;
    flex: 1;
    margin-left: 1rem;
  }
}
</style>
