<template>
  <admin-nav
    @home="toggleDisplay('new-requests')"
    @newRequests="toggleDisplay('new-requests')"
    @rejectedRequests="toggleDisplay('rejected-requests')"
    @acceptedRequests="toggleDisplay('accepted-requests')"
    @completedRequests="toggleDisplay('accepted-requests')"
  ></admin-nav>
  <ul class="sub-nav">
    <li :class="{ active: display === 'new-requests' }" @click="toggleDisplayMain('new-requests')">New Requests</li>
    <li :class="{ active: display === 'accepted-requests' }" @click="toggleDisplayMain('accepted-requests')">Completed Requests</li>
    <li :class="{ active: display === 'rejected-requests' }" @click="toggleDisplayMain('rejected-requests')">Rejected Requests</li>
  </ul>
  <component :is="display"></component>
</template>

<script>
import AcceptedRequests from './AcceptedRequests.vue'
import AdminNav from './AdminNav.vue';
import NewRequests from './NewRequests.vue'
import RejectedRequests from './RejectedRequests.vue'

export default {
  data(){
    return{
      display:'new-requests'
    }
  },
  components:{
    AdminNav,
    NewRequests,
    AcceptedRequests,
    RejectedRequests
  },
  methods:{
    toggleDisplayMain(display){
      this.display = display
    },
    toggleDisplay(display){
      this.display = display
      this.$store.commit('showSideMenu')
    }
  },
  provide(){
    return{
      toggleDisplay:this.toggleDisplay
    }
  }
}
</script>

<style scoped>
  /* Styling for the sub nav container */
  .sub-nav {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .sub-nav li {
    flex-basis: 30%;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .sub-nav li:hover {
    background-color: #ddd;
  }
  
  .sub-nav li.active {
    background-color: #4CAF50;
    color: white;
    /* Add special identifying design for active li */
    border: 2px solid #4CAF50;
    border-radius: 5px;
  }
  
  .sub-nav li.active:hover {
    background-color: #4CAF50;
  }
  
  /* Add animations */
  .sub-nav li {
    animation: fadeInUp 0.5s ease;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
</style>
