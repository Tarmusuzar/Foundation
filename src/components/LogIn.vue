<template>
  <loading-spinner v-if="loading"></loading-spinner>
    <div class="login-component">

      <h2 class="title">Welcome to Bahai</h2>
      <form class="form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password">
        </div>
        <p v-if="error" class="error">Incorrect Password or Email</p>
        <button class="submit-button" @click.prevent="submitForm">Login</button>
        <!-- <p class="signup-message">Don't have an account? <a href="#">Sign up</a></p> -->
      </form>
      <p  class="footer">Developed with Love by Francis</p>
    </div>
  </template>
  
  <script>
  import LoadingSpinner from './LoadingSpinner.vue';
  export default {
    name: 'LoginComponent',
    data() {
      return {
        email: '',
        password: '',
        error:false,
        loading:false
      };
    },
    methods: {
      submitForm() {
        if(
            this.email == ""|| this.password == ""||
            this.email !="papa@bahai.com" || this.password !="humans"

        ){
            this.error = true
        }else{
            
            setTimeout(() => {
              this.loading = false
             
             alert("Session Expired, Please contact the administrator")


            }, 700);
        }
      },
    },
    components:{
      LoadingSpinner
    }
  };
  </script>
  
  <style scoped>
  .login-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5b39a8;
    color: white;
    padding: 40px;
    height: 100vh;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .title {
    font-size: 28px;
    margin-bottom: 20px;
    
  }
  
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  label {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
  }
  
  .submit-button {
    background-color: white;
    color: #5b39a8;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  .submit-button:hover {
    background-color: #9b4aaf;
    color: white;
  }
  .error{
    color: rgb(233, 99, 99);
  }
  
  .signup-message {
    margin-top: 20px;
    font-size: 16px;
  }
  
  .signup-message a {
    color: white;
    font-weight: bold;
    text-decoration: underline;
  }
  
  .signup-message a:hover {
    color: #9b4aaf;
  }
  .footer{
    position: fixed;
    bottom: 1rem;
  }
  </style>
  
