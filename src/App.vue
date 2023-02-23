<template>

  <div class="cont">
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  components:{


  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .noItems{
  display: flex;
  flex-direction: column;
  margin-top: 30vh;
  justify-content: center;
  align-items: center;
}
  
</style>