<template>
    <div class="login-required-component">
      <p class="message">You need to log in first to access this page.</p>
      <router-link to="/login" class="login-button">Log in</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginRequiredComponent',
  };
  </script>
  
  <style scoped>
  .login-required-component {
    background-color: #5b39a8;
    color: white;
    padding: 40px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .message {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .login-button {
    background-color: white;
    color: #5b39a8;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  .login-button:hover {
    background-color: #9b4aaf;
    color: white;
  }
  
  @media screen and (max-width: 600px) {
    .login-required-component {
      padding: 20px;
    }
    .message {
      font-size: 18px;
    }
    .login-button {
      font-size: 16px;
      padding: 8px 16px;
    }
  }
  </style>
  