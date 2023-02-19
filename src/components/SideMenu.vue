<template>
    <div class="menu-container">
      <div class="menu-backdrop" @click="$emit('close-menu')"></div>
      <div class="menu">
        <span class="close-icon" @click="$emit('close-menu')">
          <i class="fas fa-times"></i>
        </span>
        <ul>
          <li>
            <i class="fas fa-home fa-fw"></i>
            <a href="#">Home</a>
          </li>

          <li>
            <i class="fas fa-shopping-cart fa-fw"></i>
            <a href="#">Products</a>
          </li>
          <li>
            <i class="fas fa-info-circle fa-fw"></i>
            <a href="#">About Us</a>
          </li>
          <li>
            <i class="fas fa-phone fa-fw"></i>
            <a href="#">Contact</a>
          </li>
          <li>Exciting features are coming</li>
        </ul>
      </div>
    </div>
  </template>  
  
  <style scoped>
  .menu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  
  .menu-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s ease-out forwards;
  }
  
  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: #2c3e50;
    color: #fff;
    transform: translateX(-100%);
    animation: slideIn 0.3s ease-out forwards;
  }
  
  .menu.open {
    transform: translateX(0%);
    animation: slideOut 0.3s ease-out forwards;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  
  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
  }
  
  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    color: #fff;
  }
  
  .close-icon:hover {
    color: #f1c40f;
  }
  
  .fa {
    font-size: 24px;
    margin-right: 10px;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  </style>