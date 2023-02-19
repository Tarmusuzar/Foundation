<template>
  <div class="cont">
    <the-nav></the-nav>
    <ul class="mainHome" >
    
        <ul class="intro">
            <p>We are one race:</p>
             <p class="human">The Human Race</p>
        </ul>
        <button><router-link to="/HelpMe">I need help</router-link></button>
        

    </ul>
  </div>
</template>
<script>
import TheNav from './TheNav.vue'
export default {
  components:{
    TheNav
  }
}
</script>
<style scoped>
    .mainHome{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
        background: linear-gradient(to bottom right, #6D9BF1, #B68CF5);
    }
    .mainHome p{
        
        font-size: 1.8rem;
        color: rgb(236, 226, 226);
        font-weight: 700;
        text-align: center;
        
    }
    .human{
        font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 4s steps(1000, end) infinite;

    }
    @keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
    .intro{
        border: 1px solid white;
        padding: 1rem;
        border-radius: 4px;
        width: 80%;
        margin: 0 auto;
    }
    
    .mainHome button{
        background: linear-gradient(to bottom right, #6D9BF1, #B68CF5);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 15px 35px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 3rem 0;
  
  letter-spacing: 2px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
    }
    button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}
a{
  text-decoration: none;
  color: inherit;
}

  
  .cont{
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

</style>