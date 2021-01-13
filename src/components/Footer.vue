<template>
   <footer>
    <div id="contact-address-info-container">
      <div id="info-container">
        <span> 
         <img src="@/assets/gmail.png" />
        lawrence.figuerres@gmail.com 
        </span>
        <span>  
          <img src="@/assets/location.png" />
          Bagumbong Caloocan City, Philippines 
        </span>
      </div>
      <div id="info-container">
         
        <span>
         <img src="@/assets/contact.png" />
         +639173170121
        </span>
        <a href="">
        <span>
          
         <img src="@/assets/heart.png" />
          Credits
       
        </span>
           </a>
      </div>
     
      
    </div>
    <div id="social-media-container">
      <a href="https://www.facebook.com/lawrence.figuerres"> <img src="@/assets/facebook.png" /> </a>
      <a href="https://www.linkedin.com/in/john-lawrence-figuerres-86557b12a/"> <img src="@/assets/linkedin.png" /> </a>
      <a href="https://github.com/Lenceki"> <img src="@/assets/github.png" /> </a>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
footer {
  background-color: #1B1B1B;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
 
}

#contact-address-info-container {
  display: flex;
  img {
    margin-right: 0.5rem;
    height: 1.3rem;
  }
  span {
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
   
  }
  a {
    color: white;
    text-decoration: none;
  }
}

#info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 2rem;
}

#social-media-container {
  display: flex;
  align-items: center;
  height: 100%;
  a {
    height: 60%;
    margin-left: 1rem;
  }
  img {
    height: 100%;
  }
}
</style>
