import * as Vue from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import NeedHelp from './components/NeedHelp.vue'
import HomePage from './components/HomePage.vue'
import TheAdmin from './components/TheAdmin.vue'
import ThankYou from './components/ThankYou'
import LogIn from './components/LogIn'
import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      login: false,
      acceptedRequests:[],
      showSideMenu:false,
      isLoading:false
    }
  }
  ,
    mutations:{
      showSideMenu(state){
        state.showSideMenu = !state.showSideMenu
      },
      changeLoading(state){
        state.isLoading = !state.isLoading
      }
    }
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/HelpMe', component: NeedHelp },
    { path: '/', component: HomePage },
    { path: '/admin', component: TheAdmin },
    { path: '/done', component: ThankYou },
    { path: '/login', component: LogIn }
  ]
})

const app = Vue.createApp(App)
const vuetify = createVuetify()

app.use(store)
app.use(router)
app.use(vuetify)

app.mount('#app')
