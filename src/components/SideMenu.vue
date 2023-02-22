<template>
    <div class="menu-container">
  <div class="menu-backdrop" @click="$emit('close-menu')"></div>
  <div class="menu">
    <span class="close-icon" @click="$emit('close-menu')">
      <i class="fas fa-times"></i>
    </span>
    <ul>
      <li @click="$emit('home')">
        <i class="fas fa-home fa-fw"></i>
        <a href="#">Home</a>
      </li>
      <li @click="$emit('newRequests')">
        
    
    
    
        <i class="fas fa-plus fa-fw"></i>
        <a href="#">New requests</a>
      </li>
      <li @click="$emit('rejectedRequests')">
        <i class="fas fa-times-circle fa-fw"></i>
        <a href="#">Rejected requests</a>
      </li>
      <li @click="$emit('acceptedRequests')">
        <i class="fas fa-check-circle fa-fw"></i>
        <a href="#">Accepted requests</a>
      </li >
      <li @click="$emit('completedRequests')">
        <i class="fas fa-check-double fa-fw"></i>
        <a href="#">Completed requests</a>
      </li>
      <li>
        <i class="fas fa-address-book fa-fw"></i>
        <a href="#">Contact list</a>
      </li>
      <li>
        <i class="fas fa-envelope fa-fw"></i>
        <a href="#">Email list</a>
      </li>
      <li>
        <i class="fas fa-sign-out-alt fa-fw"></i>
        <a href="#">Logout</a>
      </li>
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
  background-color: #6c5ce7;
  color: #fff;
  transform: translateX(-100%);
  animation: slideIn 0.3s ease-out forwards;
  overflow-y: auto;
  padding: 30px 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
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
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
}

li:hover {
  background-color: #4834d4;
}

a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
  letter-spacing: 0.5px;
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

.badge {
  background-color: #f1c40f;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  border-radius: 50%;
  margin-left: 5px;
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