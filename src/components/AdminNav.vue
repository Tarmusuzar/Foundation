<template>
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand" @click="toggleMenu">
    <a class="navbar-item" href="#">
      <span class="icon"><i class="fas fa-bars"></i></span>
    </a>
  </div>
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <span class="navbar-item-title">The Bahai Family</span>
    </a>
  </div>
  <div class="navbar-end">
    
    <a class="navbar-item" href="#">
      <span class="icon"><i class="fas fa-search"></i></span>
    </a>
    <a class="navbar-item" href="#">
      <span class="icon"><i class="fas fa-filter"></i></span>
    </a>
    <a class="navbar-item" href="#" @click="toggleDisplay('new-requests')">
      <span class="icon"><i class="fas fa-bell"></i></span>
      <span class="badge" v-if="notificationCount > 0">{{ notificationCount }}</span>
    </a>
  </div>
</nav>


    <side-menu v-if="sideMenu"
     @close-menu="toggleMenu()"
      @home="$emit('home')"   
      @newRequests="$emit('newRequests')"
    @rejectedRequests="$emit('rejectedRequests')"
    @acceptedRequests="$emit('acceptedRequests')"
    @completedRequests="$emit('completedRequests')"

     ></side-menu>

</template>
    <script>
    import SideMenu from './SideMenu.vue';
    
    export default {
      data() {
        return {
          products: [
          
            // add more products here
          ],
          isMenuOpen: false,
        };
      },
      methods: {
        toggleDetails(index) {
          this.products[index].detailsVisible = !this.products[index].detailsVisible;
        },
        toggleMenu() {
          this.$store.commit('showSideMenu')
        },
      },
      computed: {
        notificationCount() {
          return this.products.length;
        },
        sideMenu(){
          return this.$store.state.showSideMenu
        }
      },
      components: {
        SideMenu,
      },
      inject:['toggleDisplay'],
      beforeMount(){
    
           
           fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/trial.json')
           .then(response=>{
               if(response.ok){
                   return response.json()
               }else{
                   return []
               }
           })
           .then(data=>{
               for(const dat in data){
                    
                        this.products.push(data[dat])
    
                    console.log(dat)
               }
           
               
           })
           console.log(this.products)
    
           
          
    
       },
       
    };
    </script>  
      <style scoped>
      .product-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    a{
        text-decoration: none;
    }
    
    .product-item {
      margin: 10px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      width: 300px;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: white;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      transition: all 0.2s ease-in-out;
    }
    
    .product-item:hover {
      transform: translateY(-10px);
    }
    
    .details-toggle,.yes, .no {
      color: #8F3AFF;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    
    .details-toggle:hover {
      color: #2C0480;
    }
    
    .navbar {
      background: linear-gradient(to right, #8F3AFF, #2C0480);
      color: white;
      padding: 1rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 999;
    
    }
    .req{
      display: block;
    }
    .navbar-item {
      color: white;
      font-weight: bold;
    }
    
    
    
    
    
    .icon {
      margin-right: 5px;
    }
    .navbar-brand {
        display: flex;
        align-items: center;
      }
    
      .navbar-end {
        display: flex;
        align-items: center;
      }
    
      .navbar-item {
        margin: 0 10px;
      }
    
      .fa-bars, .fa-bell {
        font-size: 1.5rem;
        cursor: pointer;
      }
    
      .fa-bell {
        position: relative;
      }
    
    
      .navbar-item {
      position: relative;
    }
      .badge {
      position: absolute;
      top: -5px;
      right: -5px;
      min-width: 18px;
      text-align: center;
      background-color: red;
      color: white;
      border-radius: 50%;
      font-size: 0.8rem;
      padding: 2px;
      z-index: 1;
    }
     #help{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* justify-self: flex-end; */
        width: inherit;
        margin: .2rem;
    
     }
     .no{
        margin-left: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        color: red;
        min-width: 5.7rem;
        text-decoration: underline;
     }
     .yes{
        text-decoration: underline;
    
        margin-right: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        color: green;
        min-width: 2.7rem;
     }
     
     
    
    
    
    
    
      </style>