<template>
    <not-logged v-if="!login"></not-logged>
    <admin-display v-if="login"></admin-display>
</template>

<script>
import NotLogged from './NotLogged.vue'
// import LogIn from './LogIn.vue';
import AdminDisplay from './AdminDisplay.vue';
export default {
    data(){
        return{
            theComponent:''
        }
    },
    components:{
        AdminDisplay,
        // LogIn,
        NotLogged
    }
    ,
    computed:{
        component(){
            return this.$store.state.login ? 'admin-display':'log-in'
        },
        login(){
            return this.$store.state.login
        }
    }

}
</script>