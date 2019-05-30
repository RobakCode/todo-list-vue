<template>
  <div id="app">
    <v-app>
      <v-content>
        <ToDo/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import ToDo from './view/ToDo.vue';

export default {
  name: 'app',
  components: {
    ToDo,
  },
};
</script>

<style lang="scss">
</style>
