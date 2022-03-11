<template>
   <div id="intro-me-container">
  
      <div id="intro-words-container">
         
        <div>
         <img id="profile" src="@/assets/profile.png" />
            <h1>Hey! Im Lence</h1>
          A passionate mobile application engineer having an experience of building mobile and web application. 
       
        </div>
        <div class="divider"> </div>

        <div id="skill-icon-container">
            <H1> Skills </h1>
            <div class= "skill-item" v-for="(item, index) in skillList" :key="index">
            
                <img :src="item.icon" />
                <div class="content">
                <h4> {{item.title}}</h4>
                <p>{{item.yoe}} years of experience</p>
                </div>
            </div>
        </div>
         <div class="divider"> </div>
         <div id="arch-container">
            <H1> Code Architecture </h1>
            <p class= "arch-item" v-for="(item, index) in archList" :key="index">
              <b> {{ item.initial }} </b> - {{ item.name }}
            </p>
        </div>

      </div>
    </div>
</template>

<script>
import swifIncon from "@/assets/swift.png"
import kotlinIcon from "@/assets/kotlin.png"
import flutterIcon from "@/assets/flutter.png"
import vueIcon from "@/assets/vue.png"
import jsIcon from "@/assets/js.png"
import html5Icon from "@/assets/h5.png"
import gitIcon from "@/assets/git.png"
import Avatar from 'vue-avatar-component'
export default {
  name: 'IntroMe',
  components: {
    Avatar,
  },
  data () {
    return {
      archList: [
        {
          initial:"Clean",
          name: "Clean Code Archeture"
        },
        {
          initial:"MVVM",
          name: "Model View View Model"
        },
        {
          initial:"MVP",
          name: "Model View Presenter"
        },
        {
          initial:"MVP",
          name: "Model View Presenter"
        },
        
        {
          initial:"MVC",
          name: "Model View Controller"
        },
        {
          initial:"R",
          name: "Redux"
        }
        
      ],
      skillList: [
        {
          title: "Swift",
          yoe: "6+",
          icon: swifIncon
        },
        {
          title: "Kotlin",
          yoe: "2",
          icon: kotlinIcon
        },
        {
          title: "Flutter",
          yoe: "2",
          icon: flutterIcon
        },
        {
          title: "Git",
          yoe: "5+",
          icon: gitIcon
        },
        {
          title: "VueJs",
          yoe: "2",
          icon: vueIcon
        },
        {
          title: "Javascript",
          yoe: "6+",
          icon: jsIcon
        },
        {
          title: "HTML",
          yoe: "6+",
          icon: html5Icon
        }
      ]
    }
  }
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
  align-items: flex-start;
  justify-content: center;

  text-align: left;
  * {
    max-width: 20vw
  }
}

.divider {
  width: 0.5rem;
  height: 30vh;
  background-color: #9999997d;
  border-radius: 3rem;
  align-self: center;
  margin-left: 3rem;
  margin-right: 3rem;
}

h1, h4, p {
  padding:0px;
  margin: 0px
}
.arch-item {
  margin-top: 1rem
}
#skill-icon-container {
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30vw;
  
  
  .skill-item {
    align-items: center;
    display: flex;
    margin-top: 0.8rem;
    img {
      width: 1.5rem;
      margin-right: 1rem
    } 
    p {
      font-size: smaller;
    }
  }
  img {
    width: 1.5rem;
  }
}
</style>
