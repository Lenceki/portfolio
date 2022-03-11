<template>
  <div class="exp-container">
    <ExperienceCard v-for="(item,index) in dataSource" :key="index"
      :dataSource="item"
      @click="showModal(item)"
    />
  </div>
   <Modal
    v-model="isShow"
    :close="closeModal"
  >
    <div class="modal">
      <div id="view-details" v-if="selectedDataSource != null">
      <div class="header-content">
      
          <div class="name-company">
            <h2>  {{ selectedDataSource.company }} </h2>
            <p>  <b>Address:  </b> {{ selectedDataSource.address}} </p>
            <p>  <b>Position:  </b> {{ selectedDataSource.position}} ({{ selectedDataSource.level}}) </p>
            <p>  {{ selectedDataSource.dateStart}} - {{ selectedDataSource.dateEnd}}</p>
          </div>
              <img :src="selectedDataSource.logo">
      </div>
      <div class="body-content">
         <h4>  Participation: </h4>
         <p> {{selectedDataSource.story }}</p>
      </div>
        <div class="footer-content">
         <div style="width:100%;margin-top:auto" v-if="selectedDataSource.tools != null">
        <h4> Techology Stack </h4>
        <div id="skill-list-container">
          
          <span class="skill-container"
            v-for="(item, index) in selectedDataSource.tools" 
            :key="index"
            >
            <img :src="item.imgSrc" />
            <h6> {{ item.name }}</h6>


          </span>
        </div>
      </div>
      </div>
       <button class="close" @click="closeModal">
        <b> X </b>
      </button>
      </div>
     
    </div>
  </Modal>
</template>

<script>

import ExperienceCard from '@/components/ExperienceCard.vue'
import dataSource from '@/models/mockExperienceModel.js'

export default {
 
  components: {
    ExperienceCard
  },
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
.exp-container {
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  *> {
    margin-top: 1rem;
    flex-shrink: 0;
    width: 370px;
    height: 230px;
    
  }
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
    img {
      width: 6rem;
      margin-left: 1.5rem;
      height:auto;
      max-height: 6rem;
      align-self:center
    }
    .name-company {
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
</style>