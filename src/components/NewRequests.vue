<template>
  <loading-spinner v-if="loading"></loading-spinner>
  <the-dialog
  :visible="dialogVisible"
    :header="header"
    @close="closeDialog"
    @complete="acceptSelected?proceed():reject(product)"
    @accept ="proceed(product)"
    @reject = "reject(product)"
  >
  <p class="emptySelect" v-if="!acceptSelected && optionSelected">You need to select an option</p>

  <div v-if="acceptSelected " class="helpMethod">

    <div >
      <a :href="whatsappLink"><i class="fab fa-whatsapp"></i> Chat on Whatsapp</a>
    </div>
    <div>
      <a :href="callLink"><i class="fas fa-phone"></i> Call</a>
    </div>
    <div>
      <a :href="emailLink"><i class="fas fa-envelope"></i> Send an Email</a>
    </div>
    <div>
      <a href="#"><i class="fas fa-envelope"></i> Add to Email list</a>
    </div>
    <div>
      <a href="#"><i class="fas fa-address-book"></i> Add to Contact List</a>
    </div>


  </div>

  <div v-if="rejectSelected">
    <label for="reason">Select Reason:</label>
  <select id="reason" v-model="rejectReason">
    <option value="" selected disabled hidden>Select One</option>

    <option value="no-funds">No funds at the moment</option>
    <option value="no-food">No food in stock</option>
    <option value="no-jobs">No jobs availabale</option>
    <option value="no-beds">All beds are occupied</option>
  </select>
  </div>

</the-dialog>
<done-helping
  
  :visible="closeApplication"
    :header="header"
    @close="closeDialog"
    @accept ="closeApplicationMethod(product)"
    @reject = "reject(product)"
  >



  <div v-if="acceptSelected">
    <label for="reason">Select Method:</label>
    <p class="emptySelect" v-if=" optionSelected">You need to select an option</p>

  <select id="reason" v-model="acceptReason">
    <option value="" selected disabled hidden>Select One</option>
    <option value="Direct Calling">Direct Call</option>
    <option value="Whatsapp Messaging">Whatsapp Message</option>
    <option value="Adding to contact list">Added to Contact-List</option>
    <option value="email-list">Added to Email-List</option>
  </select>
  </div>
 

</done-helping>
  <div class="product-list">
    <p v-if="products.length<1" class="noItem">no item</p>
    <div class="product-item" v-for="(product, index) in products" :key="index">
      <section id="help">
        <p v-if="product.detailsVisible" class="no" @click="showDialogOne(product)">
          <i class="fa-solid fa-xmark"></i>
          <v-btn color="red"  >
            Reject
          </v-btn>
        </p>
        <p v-if="product.detailsVisible" class="yes"  @click="showDialogTwo(product,product.number,product.email)">
          <i class="fa-solid fa-check" ></i>
          Accept
        </p>
      </section>
      
      <h3>{{ product.name }}</h3>
      <i>{{ product.nationality }}</i>
      <p v-if="product.detailsVisible">id: <b>{{ product.id }}</b></p>
      <p v-if="product.detailsVisible">Number: <b>{{ product.number }}</b></p>
<p v-if="product.detailsVisible">Email: <b>{{ product.email }}</b></p>
<p v-if="product.detailsVisible">Age: <b>{{ product.age }}</b></p>
<p v-if="product.detailsVisible">Gender: <b>{{ product.gender }}</b></p>
<p v-if="product.detailsVisible">Nationality: <b>{{ product.nationality }}</b></p>
<p v-if="product.detailsVisible">Emirate: <b>{{ product.emirate }}</b></p>
<p v-if="product.detailsVisible">Help: <b>{{ product.help }}</b></p>
<p @click="toggleDetails(index)" class="details-toggle">
  {{ product.detailsVisible ? 'Hide details' : 'View details' }}
</p>
</div>
</div>

</template>
<script>
import LoadingSpinner from './LoadingSpinner.vue';
import TheDialog from './TheDialog.vue'
import DoneHelping from './DoneHelping.vue';
export default {
data() {

  return {
    number:'',
    email:'',
    phoneNumber:'',
    optionSelected:false,
    acceptSelected:false,
    closeApplication:false,
    acceptReason:'',
    rejectReason:'',
    helpSelected:false,
    rejectSelected:false,
    pendingAccept:[],
    pendingReject:[],
      message:'',
      header:'',
      dialogVisible: false,
    dialog: false,
    selectedIndex: -1,
    loading:false,
    products: [
      // add more products here
    ],
    isMenuOpen: false,
  };
},
methods: {
  reject(){
    if(this.rejectReason == ''){
      this.optionSelected = true
    }else{
      this.pendingReject.forEach(item=>{
      fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/reject.json',
              //go to products file in firebase and create the perimeter folder
          {   
              method:'post',
              headers:{
                 'content-type':'json'
              },
              body:JSON.stringify({//push the form inputs to the folder as an object
                reason:this.rejectReason,
                 name:item.name,
                 email:item.email,
                 number:item.number,
                 emirate:item.emirate,
                 gender:item.gender,
                 help:item.help,
                 age:item.age,
                 nationality:item.nationality,

                  
              })
              }).then(data=>{
                  if(data.ok){
                    this.pendingReject = []
                    const index = this.products.indexOf(item);
  if (index > -1) {
    this.products.splice(index, 1);
  }

  // remove the selected product from the Firebase database
  const url = `https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/trial/${item.id}.json`;
  fetch(url, {
    method: 'DELETE'
  }).then(response => {
    if (response.ok) {
      console.log(`Product ${item.id} deleted successfully`);
    } else {
      console.error(`Failed to delete product ${item.id}`);
    }
  }).catch(error => {
    console.error(error);
  });

                  }
          }
          ).catch(err=>{
              this.$router.push('/')
              console.log(err)// if any error, load a 404 page 
          })

  
    })

    this.dialogVisible = false
  

    
    }
  },
  proceed(){
    this.header = 'How did you help'

    this.acceptSelected =true
    this.closeApplication = true
    this.dialogVisible = false
  },
  closeApplicationMethod(){
    if(this.acceptReason == ''){
      this.optionSelected = true
    }else{
      this.loading = true
       // const reason = this.acceptReason
    this.pendingAccept.forEach(item=>{
      fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/accepted.json',
              //go to products file in firebase and create the perimeter folder
          {   
              method:'post',
              headers:{
                 'content-type':'json'
              },
              body:JSON.stringify({//push the form inputs to the folder as an object
                reason:this.acceptReason,
                 name:item.name,
                 email:item.email,
                 emirate:item.emirate,
                 gender:item.gender,
                 help:item.help,
                 age:item.age,
                 nationality:item.nationality,
                 number:item.number,
                 timestamp: Date.now()



                  
              })
              }).then(data=>{
                  if(data.ok){
                    const index = this.products.indexOf(item);
                  if (index > -1) {
                    this.products.splice(index, 1);
                  }

  // remove the selected product from the Firebase database
  const url = `https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/trial/${item.id}.json`;
  fetch(url, {
    method: 'DELETE'
  }).then(response => {
    if (response.ok) {
      console.log(`Product ${item.id} deleted successfully`);
      console.log(item)
    } else {
      console.error(`Failed to delete product ${item.id}`);
    }
  }).catch(error => {
    console.error(error);
  });

  this.closeApplication = false;
  this.pendingAccept = []
                  }
          }
          ).catch(err=>{
              this.$router.push('/')
              console.log(err)// if any error, load a 404 page 
          })

  
    })

    this.dialogVisible = false
    this.loading = false
    
      
    }
   
  },
 
  showDialogOne(product,) {
    this.rejectSelected = true
    this.acceptSelected = false
    // this.helpSelected = false
    this.closeApplication = false
      this.header = 'We Can\'t Help'
    this.dialogVisible = true;
    this.pendingReject.push(product)
  },
  showDialogTwo(product,number,email) {
    this.phoneNumber = number
      this.email = email
    this.helpSelected = true
    this.rejectSelected = false
      this.header = 'How to Help'
    this.dialogVisible = true;
    this.pendingAccept.push(product)

    this.acceptSelected = true
  },
  closeDialog() {
    this.dialogVisible = false;
    this.closeApplication = false
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
  fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/trial.json')
    .then((response) => {
      if (response.ok) {
        this.loading = true

        return response.json();
      } else {
        return [];
      }
    })
    .then((data) => {
      for (const id in data) {
        this.products.push({id,...data[id]});

      }
      this.loading = false

    });
},
components:{
  TheDialog, 
  DoneHelping,
  LoadingSpinner
}
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

/* .product-item:hover {
transform: translateY(-10px);
} */

.details-toggle,.yes, .no {
color: #8F3AFF;
font-weight: bold;
cursor: pointer;
transition: all 0.2s ease-in-out;
}
.details-toggle{
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
#help {
display: flex;
justify-content: space-between;
margin-bottom: 10px;
width: 100%;
/* margin-top: 1rem; */
}

#help p {
margin: 0;
padding: 10px 20px;
border-radius: 5px;
transition: all 0.2s ease-in-out;
}

#help p.yes {
background-color: #2C0480;
color: white;
}

#help p.no {
background-color: #FF0033;
color: white;
margin-left: 1rem;
}

/* #help p:hover {
opacity: 0.8;
} */

/* Add backdrop */
.v-overlay--active {
background-color: rgba(0, 0, 0, 0.5);
}

/* Style dialog */
.v-dialog {
border-radius: 8px;
}

.dialog-card {
background-color: #fff;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
padding: 24px;
font-size: 16px;
text-align: center;
}

.dialog-card .headline {
font-weight: 600;
font-size: 24px;
margin-bottom: 16px;
}

.dialog-card p {
margin: 16px 0;
}

.dialog-card .v-btn {
font-weight: 600;
border-radius: 8px;
padding: 8px 24px;
margin: 8px;
text-transform: none;
}

.dialog-card .v-btn.red {
color: #fff;
background-color: #e53935;
}

.dialog-card .v-btn.green {
color: #fff;
background-color: #43a047;
}


select {
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: #f2f2f2;
  margin-top: 8px;
  margin-bottom: 16px;
}

select:focus {
  outline: none;
  box-shadow: 0 0 0 2px #4caf50;
}

label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
}
.helpMethod{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 3rem;
}
.emptySelect{
  color: red;
}
.noItem{
  font-size: 1.7rem;
  text-align: center;
margin-top: 18rem;
}


</style>