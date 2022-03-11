<template>
  <div class="application-container">
    <div class="app-item"    v-for="(item, index) in dataSource" :key="index"
    @click="showModal(item)"
    > 
      <img :src= "item.logo" />
      <b> {{item.name}} </b>
    </div>
    <Modal
    v-model="isShow"
    :close="closeModal"
  >
    <div class="modal">
      <div id="view-details" v-if="selectedDataSource != null">
      <div class="header-content">
      
          <div class="name-app">
            <h2>  {{ selectedDataSource.name }} </h2>
            <p>  <b>Status:  </b> {{ selectedDataSource.status}} </p>
            <p>  <b>Company:  </b> {{ selectedDataSource.company}} </p>
            <div id="skill-list-container">
              <b> Techology Stack: </b>
              <span class="skill-container"
                v-for="(item, index) in selectedDataSource.tools" 
                :key="index"
                >
                <img :src="item.imgSrc" />
                <h6> {{ item.name }}</h6>
               </span>
            </div>
            <p v-if="selectedDataSource.links != null" v-for="(item, index) in selectedDataSource.links">  <b>{{item.name}}:  </b> <a :href="item.url"> {{ item.url }}</a> </p>
             <p>  <b>Description:  </b> {{ selectedDataSource.desc}} </p>
           
          </div>
              <img id="icon" :src="selectedDataSource.logo">
      </div>
    
      <div class="body-content">
         <h4>  Participation: </h4>
         <p> {{selectedDataSource.tasks }}</p>
      </div>
      <div class="footer-content">
        <span v-if="selectedDataSource.images != null" >
         <h4> Screenshots: </h4>
         <div class="ss-container">
          <img class="ss-item-container"
                v-for="(item, index) in selectedDataSource.images" 
                :key="index"
                :src="item"
                />
           
         </div>
         </span>
         <span v-if="selectedDataSource.video != null" >
         <h4> Video: </h4>
         <video autoplay="true" oncanplay="this.muted=true"><source :src="selectedDataSource.video" type="video/mp4"> Your browser does not support the video tag. </video>
         </span>
      </div>
       <button class="close" @click="closeModal">
        <b> X </b>
      </button>
      </div>
     
    </div>
  </Modal>
  </div>

  
</template>

<script>
import dataSource from '@/models/mockAppModel.js'
export default {
  data() {
    return {
      isShow: false,
      dataSource,
      selectedDataSource: null,
    }
  },
  methods: {
    showModal (val) {
      this.selectedDataSource = val
      this.isShow = true
    },

    closeModal () {
      this.isShow = false
    },

  }
}
</script>
<style lang="less" scoped>
.application-container {
  display: flex;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
}
.app-item {
  display: flex;
  width: 8rem;
  height: 8rem;
  padding: 1rem;
  margin: 1rem 2rem;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  cursor: pointer;
 
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    align-self: center;
    height: auto;
    max-height: 80%;
    width: auto;
    max-width: 80%;
    margin-bottom: 0.5rem;
  }
}

.ss-container {
  display: flex;
  .ss-item-container {
    height: 10rem;
    margin-right: 1rem;
  }
}
.app-item:hover {
  background-color: #e7e7e7;
}

#view-details {
  background-color: white;
  border-radius: 1rem;
  width: 50vw;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  position: relative;
   .close:hover {
    background-color: #07375a;
  }
  .close {
    cursor: pointer;
    background-color: #205072;
    color: white;
    border: 1px solid #747171;
    position: absolute;
    top: -20px;
    left: -20px;
    height: 3rem;
    width: 3rem;
    border-radius: 10rem;
  }
  .header-content {
    display: flex;
    margin-bottom: 1rem;
    a {
      font-size: x-small;
    }
    #icon {
      width: 6rem;
      margin-left: 1.5rem;
      height:auto;
      max-height: 6rem;
      align-self:center
    }
    .name-app {
        display: flex;
        flex-direction: column; 
        flex: 1;
    }
  }
  .body-content {
    margin-bottom: 1rem;
    p {
      white-space: pre-line;
    }
    
  }
}

.skill-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 1rem;
  img {
    height: 1rem;
    width: auto;
  }
}

#skill-list-container {
  display: flex;
  margin-top: 0.3rem;
  justify-content: flex-start;
  width: 100%;
}
</style>