<template>
    <div class="dialog-wrapper" v-if="visible">
      <div class="dialog-backdrop" @click="$emit('close')"></div>
      <div class="dialog">
        <div class="dialog-header">{{ header }}</div>
        <div class="dialog-content">
          <slot></slot>
        </div>
        <div class="dialog-footer">
          <button class="dialog-button close" @click="$emit('close')">Close</button>
          <button id="proceed" class="dialog-button proceed" @click="whatToEmit">Complete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      header: {
        type: String,
        default: 'Dialog Header',
      },
    },
    methods:{
      whatToEmit(){
        // if(this.header =='Cant help'){
        //    this.$emit('reject')
        // }else{
        //   this.$emit('accept')
        this.$emit('complete')

        // }
      }
    }
  };
  </script>
  
  <style scoped>
  .dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
}

.dialog {
  position: relative;
  z-index: 91;
  width: 90%;
  max-width: 80%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 16px;
  text-align: center;
}

.dialog-header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.dialog-content {
  margin-bottom: 16px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
}

.dialog-button {
  padding: 8px 16px;
  margin-left: 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

.dialog-button.close {
  background-color: #f44336;
  color: #fff;
}

.dialog-button.close:hover {
  background-color: #d32f2f;
}

.dialog-button.proceed {
  background-color: #4caf50;
  color: #fff;
}

.dialog-button.proceed:hover {
  background-color: #388e3c;
}

  </style>
  