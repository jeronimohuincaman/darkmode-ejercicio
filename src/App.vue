<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useModeStore } from '@/stores/ModeStore'
import { reactive } from 'vue';

const modeStore = useModeStore();

const mode = reactive(modeStore);
</script>

<template>
  <div class="wrapper" v-bind:class="mode.darkmode ? 'dark' : ''">
    <div class="text">
      <RouterView />
    </div>
    <div class="img-container">
      <img src="./assets/img/mountains.png" alt="1">
    </div>
    <button @click="mode.cambiarModo()">Light / Dark</button>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #a1b5ff;
  background: -webkit-linear-gradient(to top, #FAFFD1, #a1b5ff);
  background: linear-gradient(to top, #FAFFD1, #a1b5ff);
}

.wrapper.dark {
  background: #000000;
  background: -webkit-linear-gradient(to bottom, #434343, #000000);
  background: linear-gradient(to bottom, #434343, #000000);
}

.wrapper .text {
  width: 100%;
  margin-bottom: 6rem;
}

.wrapper .img-container {
  height: 100vh;

}

img {
  position: absolute;
  top: 0;
  left: -2px;
  height: 100%;
  width: 101vw;
  z-index: 100;
}

button {
  width: 200px;
  height: 60px;
  border: 2px solid #434343;
  background: transparent;
  position: absolute;
  top: 2%;
  right: 2%;
  font-weight: 600;
  font-size: 1.2em;
  color: #434343;
  border-radius: 10px;
  z-index: 1001;

}

.wrapper.dark button {
  border: 2px solid #FFF;
  color: #fff;

}

button:hover {
  background: #434343;
  color: #FAFFD1;
  cursor: pointer;
}

.wrapper.dark button:hover {
  background: #FFF;
  color: #434343;
}
</style>
