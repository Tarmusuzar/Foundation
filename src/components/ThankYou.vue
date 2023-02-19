<template>
    <div class="feedback-component">
      <h2 class="title">Thank you for your application!</h2>
      <p class="message">We appreciate your input and we'll use the provided email or number to reach you.</p>
      <p>Make sure the contacts you have provided are reachable.</p>
      <p>You will be provided a token number once selected. </p>
      <p>You will be emailed if not selected.</p>
      <button id="btn1" ><router-link to="/">Apply</router-link></button>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  .feedback-component {
    background: linear-gradient(to bottom right, #5b39a8, #9b4aaf);
    padding: 20px;
    color: white;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
  
  .title {
    font-size: 28px;
    margin: 0;
  }
 
  
  
  .message {
    font-size: 18px;
    margin-top: 10px;
    line-height: 1.5;
  }
  #btn1{
    color: red;
    width: 12rem;
    padding: 5rem;
    font-size: 1.1rem;
    margin-top: 3rem;
  }
  </style>
  