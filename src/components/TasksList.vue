<template>
  <v-card>
    <v-card-title primary-title :class="classList">
      <h3 class="headline white--text">{{list.toUpperCase()}}</h3>
    </v-card-title>
    <v-card-text>
      <v-layout row wrap v-if="tasksList">
        <TasksListItem v-for="(item, index) in tasksList" :key="index" :task="item" :list="list"/>
      </v-layout>
    </v-card-text>
  </v-card>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    TasksListItem: () => import('./TasksListItem.vue'),
  },
  props: {
    list: {
      type: String,
      default: 'todo',
    },
  },
  computed: {
    ...mapGetters(['getTasksList']),
    tasksList() {
      return this.getTasksList(this.list);
    },
    classList() {
      let result = '';
      switch (this.list) {
        case 'doing':
          result = 'blue darken-2';
          break;
        case 'done':
          result = 'green darken-1';
          break;
        default:
          result = 'amber darken-1';
      }
      return result;
    },
  },
  date() {
    return {
      name: 'TasksList',
    };
  },
};
</script>
