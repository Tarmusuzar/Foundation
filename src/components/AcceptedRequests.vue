<template>
  <loading-spinner v-if="loading"></loading-spinner>
    <accept-dialog
      :visible="dialogVisible"
      :header="header"
      @close="closeDialog"
      @accept="proceed(product)"
      @reject="reject(product)"
    >   <div  class="helpMethod">

      <div >
      <a :href="whatsappLink"><i class="fab fa-whatsapp"></i> Chat on Whatsapp</a>
    </div>
    <div>
      <a :href="callLink"><i class="fas fa-phone"></i> Call</a>
    </div>
    <div>
      <a :href="emailLink"><i class="fas fa-envelope"></i> Send an Email</a>
    </div>
    
</div>

       
      
    </accept-dialog>

    <div class="product-list">
      <p class="noItems" v-if="products.length<1" >    <i class="fas fa-exclamation-circle"></i>There are no accepted applications yet</p>

      <div class="product-item" v-for="(product, index) in products" :key="index">
        <section id="help">
          <div class="buttons">
            
            <p v-if="product.detailsVisible" class="yes" @click="showDialogTwo(product.name,product.number,product.email)">
              <i class="fas fa-eye"></i>Contact {{ product.name }}
            </p>
          </div>
          <div class="icons">
            <p v-if="product.help === 'I Need Help'" class="help-icon">
              <i class="fa-solid fa-hands-helping"></i>
            </p>
            <p v-else class="help-icon">
              <i class="fa-solid fa-hands-heart"></i>
            </p>
          
          </div>
        </section>
        <div class="product-info">
          <b style="color:green">You Helped!</b>
          <h3>{{ product.name }}</h3>
          <h3>Helped By : <i style="color:gray">{{ product.reason }}</i></h3>
          <div class="details" v-if="product.detailsVisible">
            <p>Number: <b>{{ product.number }}</b></p>
            <p>Email: <b>{{ product.email }}</b></p>
            <p>Age: <b>{{ product.age }}</b></p>
            <p>Gender: <b>{{ product.gender }}</b></p>
            <p>Nationality: <b>{{ product.nationality }}</b></p>
            <p>Emirate: <b>{{ product.emirate }}</b></p>
            <p>Help: <b>{{ product.help }}</b></p>
          </div>
          <p class="details-toggle" @click="toggleDetails(index)">
              {{ product.detailsVisible ? 'Hide details' : 'View details' }}
            </p>
        </div>
      </div>
    </div>
  </template><script>
// import DoneHelping from './DoneHelping.vue';
import AcceptDialog from './AcceptDialog.vue'
import LoadingSpinner from './LoadingSpinner.vue';
export default {
  data() {
    return {
      loading:false,
      email:'',
       phoneNumber:'',
      pendingAccept:[],
      pendingReject:[],
      message:'',
      header:'',
      dialogVisible: false,
      dialog: false,
      selectedIndex: -1,
      products: [
        // add more products here
      ],
      isMenuOpen: false,
    };
  },
  methods: {
    reject(product) {
      this.pendingReject.push(product);
      this.showDialogOne(
        product,
        'By proceeding, you delete this application permanently. This action cannot be undone.',
        'Reject Application'
      );
    },
    proceed(product) {
      this.pendingAccept.push(product);
      this.showDialogTwo(
        product,
        'Are you sure you want to add this application to accepted requests?',
        'Accept Application'
      );
    },
    
    showDialogTwo( name,number,email) {
      this.phoneNumber = number
      this.email = email
      this.header ='Contact'+ ' '+ name;
      this.dialogVisible = true;
  
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    proceedAction() {
      // Perform action here
      this.dialog = false;
      this.selectedIndex = -1;
    },
    toggleDetails(index) {
      this.products[index].detailsVisible = !this.products[index].detailsVisible;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    fetchProducts() {
      this.loading = true
      fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/accepted.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return [];
          }
        })
        .then((data) => {
          this.products = data;
          this.loading = false


        })
        .catch((error) => {
          console.log(error);
 
        });
        
    },
  },
  computed: {
    notificationCount() {
      return this.products.length;
    },
    whatsappLink(){
    return 'https://api.whatsapp.com/send?phone='+this.phoneNumber
  },
  callLink(){
    return 'tel:'+this.phoneNumber
  }
  ,
  emailLink(){

    return 'mailto:'+this.email
  }
  },
  beforeMount() {
    this.fetchProducts();
  },
  
  components: {
    AcceptDialog,
    LoadingSpinner
    // DoneHelping
  },
};
</script>

<style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  a {
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

  .details-toggle,
  .yes,
  .no {
    color: #8F3AFF;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .details-toggle {
    margin-top: 1rem;
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
  }

  .menu-icon {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .menu-icon:hover {
    color: #2C0480;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70px;
    right: -100%;
    opacity: 0;
    width: 100%;
    height: 90vh;
    background-color: #2C0480;
    transition: all 0.5s ease-in-out;
  }

  .nav-menu.active {
    right: 0%;
    opacity: 1;
    z-index: 1;
  }

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    padding: 2rem;
    width: 100%;
    height: 100%;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  .nav-link:hover {
    background-color: #8F3AFF;
  }

  @media screen and (min-width: 768px) {
    .menu-icon {
      display: none;
    }
    .nav-menu {
      position: initial;
      opacity: 1;
      height: auto;
      flex-direction: row;
      background-color: transparent;
    }
    .nav-link {
      padding: 0 1rem;
      color: #2C0480;
      font-size: 1rem;
      font-weight: bold;
      transition: none;
    }
    .nav-link:hover {
      background-color: transparent;
    }
  }
  .options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 24px;
}

.dialog-button {
  padding: 12px 24px;
  margin-bottom: 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  background-color: #fff;
  color: #2196f3;
  border: 2px solid #2196f3;
  transition: background-color 0.3s, color 0.3s;
}

.dialog-button:hover {
  background-color: #2196f3;
  color: #fff;
}

.fas,
.fab,
.far {
  margin-right: 8px;
  font-size: 16px;
}





</style>
