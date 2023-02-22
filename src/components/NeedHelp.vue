<template>
    <form>
      <p class="error" v-if="error">Make sure all fields are filled </p>
  <div class="form-row">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required v-model="name">
  </div>

  <div class="form-row">
    <label for="number">Phone Number</label>
    <input type="tel" id="number" name="number" required v-model="number">
  </div>

  <div class="form-row">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required v-model="email">
  </div>

  <div class="form-row">
    <label for="age">Age</label>
    <input type="number" id="age" name="age" required v-model="age">
  </div>

  <div class="form-row">
    <label for="gender">Gender:</label>
    <div class="form-row">
      <label>
        <input type="radio" name="gender" value="male" v-model="gender">
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="female" v-model="gender">
        Female
      </label>
    </div>
  </div>

  <div class="form-row">
    <label for="nation">Nationality</label>
    <select  id="nation"  name="nationality" required v-model="nationality">
      <option value="" selected disabled hidden>Select Nationality</option>
					<option v-for="nationality in nationalities" :value="nationality" :key="nationality">{{ nationality }}</option>
				</select> 
     </div>

  <div class="form-row" >
    <label for="emirate">Emirate</label>
    <select id="emirate" name="emirate"  v-model="emirate" required>
      <option value="" selected disabled hidden>Select Emirate</option>
      <option value="Abu Dhabi">Abu Dhabi</option>
      <option value="Dubai">Dubai</option>
      <option value="Sharjah">Sharjah</option>
      <option value="Ajman">Ajman</option>
      <option value="Umm Al Quwain">Umm Al Quwain</option>
      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
      <option value="Fujairah">Fujairah</option>
    </select>
  </div>

  <div class="form-row">
    <label for="select">How Can We Help</label>
    <select id="select" name="select" required v-model="help">
      <option value="" selected disabled hidden>Select One</option>
      <option value="need job">I need a job</option>
      <option value="need house">I need a house to stay</option>
      <option value="need food">I need food</option>
      <option value="need food">I need to go Home</option>
      <option value="need food">I'm in overstay</option>
      <option value="need food">I need someone to talk to</option>
      <option value="need food">I am depressed</option>
      <option value="need food">I want to join bahai</option>
      <option value="need food">Call Me</option>
      <option value="need food">I am sleeping on streets</option>
      <option value="need food">Other</option>
    </select>
  </div>

  <button @click.prevent="uploadResponse" class="purple-gradient-btn">Submit</button>
</form>

</template>

<script>
export default {
    data(){
        return{
          
          nationalities: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
,         error:false,

            name:'',
            number:'',
            email:'',
            age:'',
            nationality:'',
            categorySelected:false,
            emirate:'',
            help:''
        }
    },
    methods:{
      uploadResponse(){
       if(
        this.name ===""||
        this.number ===""||
        this.email ===""||
        this.age ===""||
        this.nationality ===""||
        this.emirate ===""||
        this.help ===""||
        this.gender === ""

        ){
          this.error = true
          setTimeout(() => {
            this.error = false
          }, 4000);
        }else{
          this.error=false
          fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/trial.json',
                //go to products file in firebase and create the perimeter folder
            {   
                method:'post',
                headers:{
                   'content-type':'json'
                },
                body:JSON.stringify({//push the form inputs to the folder as an object
                    name:this.name,
                    number:this.number,
                    email:this.email,
                    age:this.age,
                    nationality:this.nationality,
                    emirate:this.emirate,
                    help:this.help,
                    gender:this.gender

                    
                })
                }).then(data=>{
                    if(data.ok){
                        this.$router.push('/done')//if no error, reload the form
                    }
            }
            ).catch(err=>{
                this.$router.push('/')
                console.log(err)// if any error, load a 404 page 
            })
        }
      }
    }
  }
</script>

<style scoped>
   /* Form container */
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* margin: 50px; */
  padding: 50px;
  background-color: #f2f2f2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Form row */
.form-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
}

/* Form label */
label {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}



/* Form input */
input,
select {
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
}
.purple-gradient-btn {
  background: linear-gradient(to bottom, #a74acf, #7841b5);
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  transition: all 0.3s ease;
  width: 70%;
  max-width: 30rem;
}

.purple-gradient-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}
.error{
  text-align: center;
  background-color: red;
  width: 100vw;
  padding: .1rem;
  color: white;
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: 500;
  position: fixed;
  top: 0;

}



/* Form button */

</style>